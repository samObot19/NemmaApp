import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Comp = "div",
  id,
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "nav" | "article";
  id?: string;
}) {
  return (
    <Comp
      id={id}
      className={cn("mx-auto w-full max-w-[75rem] px-6 lg:px-8", className)}
    >
      {children}
    </Comp>
  );
}
