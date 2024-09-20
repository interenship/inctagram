import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";

type RadioGroupProps = {
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  onValueChange: (value: string) => void;
  value: string;
  /**The name used when using this component inside a form*/
  name?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  (props, ref) => {
    const {
      className,
      value,
      disabled,
      onValueChange,
      orientation = "horizontal",
      ...restProps
    } = props;
    return (
      <Root
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
        className={cn(
          "flex items-start gap-11 w-44",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className,
        )}
        {...restProps}
        ref={ref}
      />
    );
  },
);
RadioGroup.displayName = Root.displayName;
export { RadioGroup };
