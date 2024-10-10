import { Root } from "@radix-ui/react-radio-group";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

import { cn } from "@/features/utils/cn";

type RadioGroupProps = ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, orientation = "horizontal", ...restProps } = props;
    return (
      <Root
        className={cn(
          "flex w-44 items-start gap-11",
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
