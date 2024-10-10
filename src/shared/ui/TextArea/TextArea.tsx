import { TextareaHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";
import { Label } from "@/shared/ui/Label";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string;
  error?: string;
  placeholder?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const generatedId = useId();
    const {
      className,
      disabled,
      placeholder = "Text-area",
      labelText,
      error,
      id = generatedId,
      ...restProps
    } = props;

    return (
      <>
        {labelText && (
          <Label
            htmlFor={id}
            className={cn("block text-sm mb-1 text-light-900", {
              "text-dark-100": disabled,
            })}
          >
            <Typography.REGULAR14>{labelText}</Typography.REGULAR14>
          </Label>
        )}
        <textarea
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            "flex min-h-[80px] min-w-[284px] w-full border-dark-100 resize-none rounded-sm px-3 py-2 text-sm !m-[2px] ring-offset-background",
            "text-light-900 placeholder:text-md placeholder:text-light-900 border border-dark-100 bg-background",
            "focus-visible:outline-none focus-visible:border-accent-700 focus:text-light-100 focus:placeholder:text-light-100",
            "active:border-light-100 active:placeholder:text-light",
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
            <span className="text-danger-500 pl-[1px] text-xs">{error}</span>
          </Typography.REGULAR14>
        )}
      </>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
