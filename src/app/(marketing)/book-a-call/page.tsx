import { Metadata } from "next";
import { redirect } from "next/navigation";
import { CAL_BOOKING_LINK } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Book a Call | Aroneu",
  description: "Schedule a 15-minute introductory call with our team.",
};

export default function BookACallPage() {
  redirect(CAL_BOOKING_LINK);
}
