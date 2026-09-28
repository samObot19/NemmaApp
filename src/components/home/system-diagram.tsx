"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The site's single authored motion moment: a journal entry moving through
 * validation, posting, and the audit log. Values are illustrative; the panel
 * demonstrates the kind of system Nemma builds, not a live service.
 */
type Line = { text: string; value?: string };

const stages: { label: string; lines: Line[] }[] = [
  {
    label: "API request",
    lines: [{ text: "POST /v1/journal-entries" }, { text: "amount: 1250.00", value: "USD" }],
  },
  {
    label: "Validate",
    lines: [{ text: "debits = credits" }, { text: "period open · idempotency key new" }],
  },
  {
    label: "Post to ledger",
    lines: [
      { text: "Dr 1200 Receivables", value: "1,250.00" },
      { text: "Cr 4000 Revenue", value: "1,250.00" },
    ],
  },
  {
    label: "Audit log",
    lines: [{ text: "event: journal.posted" }, { text: "actor: partner-key · hash: 9f3a…" }],
  },
];

const STEP = 0.2;
const ease = [0.16, 1, 0.3, 1] as const;

export function SystemDiagram() {
  const reduce = useReducedMotion();

  return (
    <div className="dark min-w-0 overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-panel">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="text-mono-sm text-muted-foreground">
          ledger.posting-pipeline
        </span>
        <span className="text-mono-sm text-foreground">201 Created</span>
      </div>
      <ol className="px-5 py-4">
        {stages.map((stage, index) => {
          const isLast = index === stages.length - 1;
          const delay = index * STEP;
          return (
            <li key={stage.label} className="grid grid-cols-[1.25rem_1fr] gap-x-4">
              <div className="relative flex flex-col items-center">
                <motion.span
                  aria-hidden="true"
                  className="mt-1.5 block size-2.5 rounded-full bg-brand"
                  initial={reduce ? false : { scale: 0.4, opacity: 0.3 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay, duration: 0.35, ease }}
                />
                {!isLast && (
                  <motion.span
                    aria-hidden="true"
                    className="mt-1.5 w-px flex-1 origin-top bg-border-strong"
                    initial={reduce ? false : { scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: delay + 0.1, duration: STEP, ease }}
                  />
                )}
              </div>
              <motion.div
                className={isLast ? "pb-1" : "pb-5"}
                initial={reduce ? false : { opacity: 0.35, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.05, duration: 0.4, ease }}
              >
                <p className="text-sm font-medium">{stage.label}</p>
                <div className="mt-1.5 flex flex-col gap-0.5">
                  {stage.lines.map((line) => (
                    <p
                      key={line.text}
                      className="text-mono-sm flex max-w-[46ch] justify-between gap-4 text-muted-foreground"
                    >
                      <span className="min-w-0 break-words">{line.text}</span>
                      {line.value && <span className="shrink-0">{line.value}</span>}
                    </p>
                  ))}
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
