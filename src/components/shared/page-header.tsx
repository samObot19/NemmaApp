import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  lede,
  children,
  className,
}: {
  title: string;
  lede?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Container as="section" className={cn("pt-10 pb-10 lg:pt-14 lg:pb-14", className)}>
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <h1 className="text-h1 lg:col-span-7">{title}</h1>
        {lede && (
          <p className="text-lede measure lg:col-span-5 lg:pt-2">{lede}</p>
        )}
      </div>
      {children}
    </Container>
  );
}
