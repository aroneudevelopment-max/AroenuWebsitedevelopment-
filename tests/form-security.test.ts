import assert from "node:assert/strict";
import test from "node:test";

import {
  CAREER_CV_MAX_BYTES,
  validateCareerApplicationInput,
  validateCareerCv,
  validateContactSubmissionInput,
} from "../src/lib/server/form-security.ts";

test("contact validation rejects missing required fields", () => {
  const result = validateContactSubmissionInput({
    fullName: "",
    workEmail: "lead@example.com",
    company: "Aroneu",
    role: "CTO",
    teamNeed: "Platform team",
    message: "Need help",
  });

  assert.equal(result, "Please complete the required contact fields.");
});

test("contact validation rejects invalid work email", () => {
  const result = validateContactSubmissionInput({
    fullName: "Jane Lead",
    workEmail: "not-an-email",
    company: "Aroneu",
    role: "CTO",
    teamNeed: "Platform team",
    message: "Need help",
  });

  assert.equal(result, "Please enter a valid work email.");
});

test("career validation rejects missing consent", () => {
  const result = validateCareerApplicationInput({
    fullName: "Jane Candidate",
    email: "jane@example.com",
    location: "Berlin",
    consent: "",
  });

  assert.equal(result, "Please confirm the application consent checkbox.");
});

test("career CV validation rejects PNG uploads", () => {
  const file = new File([new Uint8Array([137, 80, 78, 71])], "resume.png", {
    type: "image/png",
  });

  const result = validateCareerCv(file);

  assert.equal(result.error, "Please upload a PDF or Word document for the CV.");
});

test("career CV validation rejects files over 10 MB", () => {
  const file = new File([new Uint8Array(CAREER_CV_MAX_BYTES + 1)], "resume.pdf", {
    type: "application/pdf",
  });

  const result = validateCareerCv(file);

  assert.equal(result.error, "CV file is too large. Maximum size is 10 MB.");
});

test("career CV validation accepts PDF, DOC, and DOCX files", () => {
  const fixtures = [
    {
      file: new File([new Uint8Array([1, 2, 3])], "resume.pdf", {
        type: "application/pdf",
      }),
      extension: ".pdf",
    },
    {
      file: new File([new Uint8Array([1, 2, 3])], "resume.doc", {
        type: "application/msword",
      }),
      extension: ".doc",
    },
    {
      file: new File([new Uint8Array([1, 2, 3])], "resume.docx", {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }),
      extension: ".docx",
    },
  ];

  for (const { file, extension } of fixtures) {
    const result = validateCareerCv(file);

    assert.equal(result.error, undefined);
    assert.match(result.filename || "", new RegExp(`\\${extension}$`));
  }
});
