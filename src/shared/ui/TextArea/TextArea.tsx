import * as React from "react";
import { cn } from "@/features/utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      disabled = false,
      placeholder = "Text-area",
      label,
      error,
      ...props
    },
    ref,
  ) => {
    const textareaClasses = cn(
      "flex min-h-[80px] min-w-[284px] w-full resize-none rounded-sm px-3 py-2 text-sm ring-offset-background",
      "text-light-900 placeholder:text-md border border-dark-100 bg-background",
      "focus-visible:outline-none focus-visible:border-accent-700 focus:text-light-100",
      "focus:border-light-100 active:border-light-100",
      {
        "border-dark-100": !error,
        "border-danger-500": error,
        "focus:border-danger-500": error,
        "disabled:cursor-not-allowed disabled:opacity-50": disabled,
      },
      className,
    );

    const labelClasses = cn("text-sm", {
      "text-light-900": !disabled,
      "text-dark-100": disabled,
    });

    return (
      <div className="flex flex-col pl-[1px] space-y-2">
        {label && <label className={labelClasses}>{label}</label>}
        <textarea
          disabled={disabled}
          placeholder={placeholder}
          className={textareaClasses}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-danger-500 pl-[1px] text-xs">{error}</span>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
