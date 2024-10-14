import * as RadixCheckbox from "@radix-ui/react-checkbox";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useId } from "react";

import { cn } from "@/features/utils/cn";
import { CheckmarkOutline } from "@/shared/assets/icons/components";
import { Typography } from "@/shared/ui/Typography";

export type CheckboxProps = {
  label?: string;
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>;

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, id, label, disabled = false, ...restProps } = props;

  const generatedId = useId();
  const checkboxId = id || generatedId;

  const labelClass = cn("block max-w-max", label && "flex items-center gap-3");
  const radixCheckboxClass = cn(
    "focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground  peer flex size-[18px] items-center justify-center rounded-sm border border-light-500 hover:shadow-[0px_0px_0px_6px_#333333] focus:shadow-[0px_0px_0px_6px_#171717] focus-visible:outline-none focus-visible:ring-1 active:shadow-[0px_0px_0px_6px_#4c4c4c] disabled:cursor-not-allowed disabled:opacity-50 ",
    disabled && "hover:shadow-none focus:shadow-none active:shadow-none",
    className
  );

  const indicator = cn("flex items-center justify-center bg-white leading-none");
  const typography = cn("text-slate-50", disabled && "text-light-900");

  return (
    <label htmlFor={checkboxId} className={labelClass}>
      <RadixCheckbox.Root
        ref={ref}
        className={radixCheckboxClass}
        id={checkboxId}
        disabled={disabled}
        {...restProps}
      >
        <RadixCheckbox.Indicator className={indicator}>
          <CheckmarkOutline />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && (
        <Typography as={"label"} variant="regular14" className={typography}>
          {label}
        </Typography>
      )}
    </label>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
