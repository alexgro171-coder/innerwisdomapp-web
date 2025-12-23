import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      {container ? (
        <div className="mx-auto max-w-7xl">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}

