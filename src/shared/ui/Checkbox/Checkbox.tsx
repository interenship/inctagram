import { Indicator, Root } from "@radix-ui/react-checkbox";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useId } from "react";

import { cn } from "@/features/utils/cn";
import { CheckmarkOutline } from "@/shared/assets/icons/components";
import { Typography } from "@/shared/ui/Typography";

type Checkbox = {
  labelText?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<ElementRef<typeof Root>, Checkbox>((props, ref) => {
  const { className, id, labelText, disabled = false, ...restProps } = props;

  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <label
      htmlFor={finalId}
      className={cn("block max-w-max", labelText && "flex items-center gap-3")}
    >
      <Root
        ref={ref}
        className={cn(
          "focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground  peer flex size-[18px] items-center justify-center rounded-sm border border-light-500 hover:shadow-[0px_0px_0px_6px_#333333] focus:shadow-[0px_0px_0px_6px_#171717] focus-visible:outline-none focus-visible:ring-1 active:shadow-[0px_0px_0px_6px_#4c4c4c] disabled:cursor-not-allowed disabled:opacity-50 ",
          disabled && "hover:shadow-none focus:shadow-none active:shadow-none",
          className
        )}
        id={finalId}
        disabled={disabled}
        {...restProps}
      >
        <Indicator className={cn("flex items-center justify-center bg-white leading-none")}>
          <CheckmarkOutline />
        </Indicator>
      </Root>
      {labelText && (
        <Typography.REGULAR14 className={cn("text-slate-50", disabled && "text-light-900")}>
          {labelText}
        </Typography.REGULAR14>
      )}
    </label>
  );
});
Checkbox.displayName = Root.displayName;

export { Checkbox };
