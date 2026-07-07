import { routes } from "@/lib/routes";

export const CAL_BOOKING_LINK = "https://cal.com/aroneu-development-nfqr40/15min";
export const TURNSTILE_SITE_KEY_FALLBACK = "0x4AAAAAADwKl8kn-lEIRD5S";

export function isBookACallLabel(label?: string | null) {
  return label?.trim().toLowerCase() === "book a call";
}

export function resolveCtaHref(href?: string | null, label?: string | null) {
  if (isBookACallLabel(label)) {
    return routes.bookACall;
  }

  return href || "#";
}
