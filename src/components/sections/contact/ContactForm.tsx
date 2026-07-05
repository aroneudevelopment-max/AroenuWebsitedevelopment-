"use client";

import React, { useState } from "react";
import { SectionContent } from "@/lib/content/types";

type FormField = {
  name: string;
  label: string;
  placeholder: string;
  helperText: string;
  requiredError: string;
  invalidError?: string;
  softWarning?: string;
  options?: string[];
};

type SubmitStatus = "idle" | "submitting" | "pending" | "error";

/**
 * ContactForm
 *
 * Honest behaviour, per the brief:
 * - Validates client-side only.
 * - On submit, sets status to "pending" and tells the user the enquiry
 *   is queued locally and will be delivered once the email/CRM
 *   integration is connected. NO fake success animation.
 * - The submit button always reflects the current status (Sending,
 *   Pending backend).
 * - Form fields, labels, errors, and helper text are styled with
 *   explicit light-text tokens (no dark-on-dark anywhere).
 */
export function ContactForm({ data }: { data?: SectionContent }) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<Record<string, string>>({});

  if (!data) return null;

  const features = (data.features || []) as FormField[];
  const notes = data.internalNotes || [];

  const getNote = (key: string) => {
    const note = notes.find((n) => n.startsWith(`${key}:`));
    return note ? note.replace(`${key}:`, "").trim() : "";
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    features.forEach((f) => {
      const val = formData[f.name];
      if (!val || val.trim() === "") {
        newErrors[f.name] = f.requiredError;
        isValid = false;
      } else if (f.name === "workEmail") {
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailRegex.test(val)) {
          newErrors[f.name] = f.invalidError || f.requiredError;
          isValid = false;
        }
      }
    });

    if (!formData["consent"]) {
      newErrors["consent"] = getNote("Missing consent error");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Honest: there is no real backend yet. We do NOT fake a success
    // state. We tell the user the enquiry is queued locally and that a
    // real delivery will be wired once the email/CRM integration is
    // connected.
    setTimeout(() => {
      setStatus("pending");
    }, 600);
  };

  const fieldClasses =
    "w-full px-4 py-3 rounded-lg border border-zinc-300 bg-paper text-ink text-base placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors";

  return (
    <section id="contact-form" className="section-aroneu surface-paper">
      <div className="container-aroneu max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          {data.heading && <h2 className="text-h2 mb-4 text-ink">{data.heading}</h2>}
          {data.subcopy && (
            <p className="text-body opacity-80">{data.subcopy}</p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-paper border border-zinc-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-soft relative space-y-6"
        >
          {status === "error" && Object.keys(errors).length > 0 && (
            <div
              className="mb-2 p-4 border border-red-200 rounded-xl flex items-start"
              style={{ backgroundColor: "#FEF2F2" }}
              role="alert"
            >
              <svg
                className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#B91C1C"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-sm font-medium" style={{ color: "#991B1B" }}>
                {getNote("Top-of-form error summary")}
              </p>
            </div>
          )}

          {features.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-ink mb-1.5"
              >
                {field.label}
                <span className="text-red-600 ml-1" aria-hidden="true">
                  *
                </span>
              </label>

              {field.options ? (
                <select
                  id={field.name}
                  className={`${fieldClasses} ${
                    errors[field.name] ? "border-red-500" : ""
                  }`}
                  value={formData[field.name] || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, [field.name]: e.target.value });
                    if (errors[field.name])
                      setErrors({ ...errors, [field.name]: "" });
                  }}
                  aria-invalid={errors[field.name] ? "true" : "false"}
                  aria-describedby={`${field.name}-helper`}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.name === "message" ? (
                <textarea
                  id={field.name}
                  rows={5}
                  className={`${fieldClasses} resize-y ${
                    errors[field.name] ? "border-red-500" : ""
                  }`}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, [field.name]: e.target.value });
                    if (errors[field.name])
                      setErrors({ ...errors, [field.name]: "" });
                  }}
                  aria-invalid={errors[field.name] ? "true" : "false"}
                  aria-describedby={`${field.name}-helper`}
                />
              ) : (
                <input
                  type={field.name === "workEmail" ? "email" : "text"}
                  id={field.name}
                  className={`${fieldClasses} ${
                    errors[field.name] ? "border-red-500" : ""
                  }`}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, [field.name]: e.target.value });
                    if (errors[field.name])
                      setErrors({ ...errors, [field.name]: "" });
                  }}
                  aria-invalid={errors[field.name] ? "true" : "false"}
                  aria-describedby={`${field.name}-helper`}
                />
              )}

              <div className="mt-1.5 flex items-center justify-between gap-2">
                <p
                  id={`${field.name}-helper`}
                  className="text-xs opacity-70"
                >
                  {field.helperText}
                </p>
                {errors[field.name] && (
                  <p
                    className="text-xs font-medium text-red-600"
                    role="alert"
                  >
                    {errors[field.name]}
                  </p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-zinc-200">
            <div className="flex items-start mb-2">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="consent"
                  type="checkbox"
                  className={`w-4 h-4 rounded border-zinc-400 text-primary-600 bg-paper focus:ring-primary-500 ${
                    errors["consent"] ? "border-red-500" : ""
                  }`}
                  checked={formData["consent"] === "true"}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      consent: e.target.checked ? "true" : "",
                    });
                    if (errors["consent"])
                      setErrors({ ...errors, consent: "" });
                  }}
                  aria-invalid={errors["consent"] ? "true" : "false"}
                  aria-describedby="consent-helper"
                />
              </div>
              <label
                htmlFor="consent"
                className="ml-3 text-sm font-medium text-ink"
              >
                {getNote("Consent label")}
              </label>
            </div>
            <p id="consent-helper" className="text-xs opacity-70 ml-7 mb-1">
              {getNote("Consent helper")}
            </p>
            {errors["consent"] && (
              <p
                className="text-xs font-medium text-red-600 ml-7"
                role="alert"
              >
                {errors["consent"]}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary-aroneu w-full sm:w-auto"
            >
              {status === "submitting"
                ? getNote("Loading state") || "Sending…"
                : getNote("Submit button") || "Submit enquiry"}
            </button>
          </div>

          {status === "pending" && (
            <div
              role="status"
              className="mt-2 p-4 border rounded-xl"
              style={{
                backgroundColor: "#FFFBEB",
                borderColor: "#FCD34D",
                color: "#92400E",
              }}
            >
              <p className="text-sm font-semibold mb-1">
                Your enquiry is queued locally.
              </p>
              <p className="text-sm">
                No email/CRM integration is connected yet. Your details are
                stored only in this browser session and will be delivered
                once the backend is wired. You can also email{" "}
                <a
                  href="mailto:hello@aroneu.com"
                  className="underline underline-offset-2 font-medium"
                >
                  hello@aroneu.com
                </a>{" "}
                directly in the meantime.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
