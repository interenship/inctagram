import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";

type RadioGroupProps = ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, orientation = "horizontal", ...restProps } = props;
    return (
      <Root
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
