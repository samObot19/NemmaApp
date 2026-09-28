"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import {
  inquiryTypes,
  isInquiryType,
  submitContact,
  validateContact,
  type ContactErrors,
  type ContactPayload,
  type ContactResult,
} from "@/lib/contact";

const deliveryConfigured = Boolean(site.contactEndpoint);

const fieldOrder: (keyof ContactPayload)[] = [
  "name",
  "email",
  "company",
  "type",
  "message",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("type");
  const initialType = isInquiryType(requested) ? requested : "project";
  const about = getProject(searchParams.get("about") ?? "");
  const initialMessage = about
    ? `I am interested in something similar to your work on "${about.title}".\n\n`
    : "";

  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    type: initialType,
    message: initialMessage,
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactPayload, boolean>>
  >({});
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<ContactResult | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const fieldId = (name: keyof ContactPayload) => `${id}-${name}`;
  const errorId = (name: keyof ContactPayload) => `${id}-${name}-error`;

  function update<K extends keyof ContactPayload>(
    name: K,
    value: ContactPayload[K],
  ) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) {
      setErrors(validateContact(next));
    }
  }

  function blur(name: keyof ContactPayload) {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateContact(values));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      type: true,
      message: true,
    });

    setSubmitted(true);

    if (fieldOrder.some((name) => nextErrors[name])) {
      // The summary renders on the next paint; focus it once it exists.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setPending(true);
    const outcome = await submitContact(values);
    setPending(false);
    setResult(outcome);
    if (outcome.status === "not-configured") {
      window.location.assign(outcome.mailto);
    }
  }

  if (result?.status === "delivered") {
    return (
      <Alert>
        <AlertTitle>Message sent.</AlertTitle>
        <AlertDescription>
          Thanks, {values.name.trim()}. We will reply to {values.email.trim()}.
        </AlertDescription>
      </Alert>
    );
  }

  const errorFor = (name: keyof ContactPayload) =>
    touched[name] && errors[name] ? errors[name] : undefined;

  const nameError = errorFor("name");
  const emailError = errorFor("email");
  const messageError = errorFor("message");
  const summaryItems = submitted
    ? fieldOrder.flatMap((name) =>
        errors[name] ? [{ name, message: errors[name] as string }] : [],
      )
    : [];

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-describedby={`${id}-note`}
    >
      <FieldGroup className="gap-6">
        {summaryItems.length > 0 && (
          <Alert
            ref={summaryRef}
            tabIndex={-1}
            variant="destructive"
            aria-labelledby={`${id}-summary-title`}
          >
            <AlertTitle id={`${id}-summary-title`}>
              {summaryItems.length === 1
                ? "There is a problem with one field."
                : `There are problems with ${summaryItems.length} fields.`}
            </AlertTitle>
            <AlertDescription>
              <ul className="flex flex-col gap-1">
                {summaryItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`#${fieldId(item.name)}`}
                      onClick={(event) => {
                        event.preventDefault();
                        formRef.current
                          ?.querySelector<HTMLElement>(
                            `#${CSS.escape(fieldId(item.name))}`,
                          )
                          ?.focus();
                      }}
                    >
                      {item.message}
                    </Link>
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={nameError ? true : undefined}>
            <FieldLabel htmlFor={fieldId("name")}>Name</FieldLabel>
            <Input
              id={fieldId("name")}
              name="name"
              autoComplete="name"
              required
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              onBlur={() => blur("name")}
              aria-invalid={nameError ? true : undefined}
              aria-describedby={nameError ? errorId("name") : undefined}
            />
            <FieldError id={errorId("name")}>{nameError}</FieldError>
          </Field>
          <Field data-invalid={emailError ? true : undefined}>
            <FieldLabel htmlFor={fieldId("email")}>Email</FieldLabel>
            <Input
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => blur("email")}
              aria-invalid={emailError ? true : undefined}
              aria-describedby={emailError ? errorId("email") : undefined}
            />
            <FieldError id={errorId("email")}>{emailError}</FieldError>
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor={fieldId("company")}>
              Company
              <span className="font-normal text-muted-foreground">
                (optional)
              </span>
            </FieldLabel>
            <Input
              id={fieldId("company")}
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor={fieldId("type")}>What is this about?</FieldLabel>
            <NativeSelect
              id={fieldId("type")}
              name="type"
              value={values.type}
              onChange={(e) =>
                update(
                  "type",
                  isInquiryType(e.target.value) ? e.target.value : "general",
                )
              }
            >
              {inquiryTypes.map((type) => (
                <NativeSelectOption key={type.value} value={type.value}>
                  {type.label}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        </div>

        <Field data-invalid={messageError ? true : undefined}>
          <FieldLabel htmlFor={fieldId("message")}>Message</FieldLabel>
          <FieldDescription id={`${fieldId("message")}-hint`}>
            What you are building, where it stands today, and any timeline.
          </FieldDescription>
          <Textarea
            id={fieldId("message")}
            name="message"
            required
            rows={6}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={messageError ? true : undefined}
            aria-describedby={
              messageError
                ? `${fieldId("message")}-hint ${errorId("message")}`
                : `${fieldId("message")}-hint`
            }
          />
          <FieldError id={errorId("message")}>{messageError}</FieldError>
        </Field>

        {result && (
          <Alert variant={result.status === "failed" ? "destructive" : "default"}>
            <AlertTitle>
              {result.status === "not-configured"
                ? "Your email app should now be open with the message filled in."
                : "The message could not be sent."}
            </AlertTitle>
            <AlertDescription>
              {result.status === "not-configured"
                ? "If it did not open, use the link below or write to us directly."
                : "Nothing was sent. You can send the same message by email instead."}
            </AlertDescription>
            <Button asChild variant="outline" size="sm" className="mt-2 w-fit">
              <a href={result.mailto}>Open in your email app</a>
            </Button>
          </Alert>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" disabled={pending}>
            {pending && <Spinner data-icon="inline-start" />}
            {pending
              ? "Sending"
              : deliveryConfigured
                ? "Send message"
                : "Send by email"}
          </Button>
          <p id={`${id}-note`} className="text-sm text-muted-foreground">
            {deliveryConfigured
              ? "We reply to every message."
              : "Opens your email app with the message filled in."}
          </p>
        </div>
      </FieldGroup>
    </form>
  );
}
