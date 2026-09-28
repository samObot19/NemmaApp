import { site } from "@/content/site";

export const inquiryTypes = [
  { value: "project", label: "Project inquiry" },
  { value: "partnership", label: "Partnership or business inquiry" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General contact" },
] as const;

export type InquiryType = (typeof inquiryTypes)[number]["value"];

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  type: InquiryType;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export function isInquiryType(value: string | null): value is InquiryType {
  return inquiryTypes.some((type) => type.value === value);
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(payload: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (payload.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!emailPattern.test(payload.email.trim())) {
    errors.email = "Enter a valid email address so we can reply.";
  }
  if (payload.message.trim().length < 20) {
    errors.message = "Tell us a little more. A few sentences is enough.";
  }
  return errors;
}

export type ContactResult =
  | { status: "delivered" }
  | { status: "not-configured"; mailto: string }
  | { status: "failed"; mailto: string };

/**
 * Delivery boundary. The form UI never talks to a backend directly; it calls
 * this function. Until `site.contactEndpoint` points at a real endpoint or
 * form service, submissions are not delivered and the UI says so honestly,
 * offering a prefilled email instead.
 */
export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  const mailto = buildMailto(payload);

  if (!site.contactEndpoint) {
    return { status: "not-configured", mailto };
  }

  try {
    const response = await fetch(site.contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return response.ok ? { status: "delivered" } : { status: "failed", mailto };
  } catch {
    return { status: "failed", mailto };
  }
}

export function buildMailto(payload: ContactPayload): string {
  const typeLabel =
    inquiryTypes.find((type) => type.value === payload.type)?.label ?? "Contact";
  const subject = `${typeLabel} from ${payload.name.trim()}`;
  const body = [
    payload.message.trim(),
    "",
    `Name: ${payload.name.trim()}`,
    `Email: ${payload.email.trim()}`,
    payload.company.trim() ? `Company: ${payload.company.trim()}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
