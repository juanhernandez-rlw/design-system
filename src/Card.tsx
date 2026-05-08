import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export function Card({
  title,
  subtitle,
  className,
  children,
  ...rest
}: CardProps) {
  const classes = ["ds-card", className ?? ""].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {title ? <h2 className="ds-card__title">{title}</h2> : null}
      {subtitle ? <p className="ds-card__subtitle">{subtitle}</p> : null}
      {children}
    </div>
  );
}
