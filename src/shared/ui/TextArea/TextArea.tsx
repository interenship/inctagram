import type { TextareaHTMLAttributes } from "react";
import { forwardRef, useId } from "react";

import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string;
  error?: string;
  placeholder?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const textareaId = useId();
    const {
      className,
      disabled,
      placeholder = "Text-area",
      labelText,
      error,
      ...restProps
    } = props;

    return (
      <>
        {labelText && (
          <Typography.REGULAR14>
            <label
              htmlFor={textareaId}
              className={cn("mb-1 block text-sm text-light-900", {
                "text-dark-100": disabled,
              })}
            >
              {labelText}
            </label>
          </Typography.REGULAR14>
        )}
        <textarea
          id={textareaId}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            "ring-offset-background !m-[2px] flex min-h-[80px] w-full min-w-[284px] resize-none rounded-sm border-dark-100 px-3 py-2 text-sm",
            "placeholder:text-md bg-background border text-light-900 placeholder:text-light-900",
            "focus:text-light-100 focus:placeholder:text-light-100 focus-visible:border-accent-700 focus-visible:outline-none",
            "active:placeholder:text-light active:border-light-100",
            {
              "border-danger-500 focus:border-danger-500 placeholder:text-light-100":
                error,
              "disabled:cursor-not-allowed disabled:opacity-50": disabled,
            },
            className,
          )}
          ref={ref}
          {...restProps}
        />
        {error && (
          <Typography.REGULAR14>
            <span className="pl-px text-xs text-danger-500">{error}</span>
          </Typography.REGULAR14>
        )}
      </>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
