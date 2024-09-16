import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";

type RadioGroupProps = { directionColumn?: boolean } & ComponentPropsWithoutRef<
  typeof Root
>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, directionColumn, ...restProps } = props;
    return (
      <Root
        className={cn(
          // "flex gap-11 disabled:cursor-not-allowed disabled:opacity-50",
          "flex gap-11",
          directionColumn ? "flex-col" : "flex-row",
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
