import { useId, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({
  label,
  hint,
  error,
  id,
  className,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const inputClasses = [
    "ds-input",
    error ? "ds-input--error" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ds-field">
      {label ? (
        <label className="ds-field__label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input id={inputId} className={inputClasses} {...rest} />
      {error ? (
        <span className="ds-field__error">{error}</span>
      ) : hint ? (
        <span className="ds-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}
