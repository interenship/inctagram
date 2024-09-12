import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {cn} from "@/features/utils/cn";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({className, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex gap-[44px]", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({className, disabled=false, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      disabled={disabled}
      className={cn(
        "group flex justify-center items-center relative rounded-full border-2 border-light-100 w-[20px] h-[20px] transition-all duration-300  disabled:cursor-not-allowed disabled:border-light-900",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute -z-10 w-full h-full rounded-full bg-transparent transition-all duration-300",
          !disabled && "group-hover:bg-dark-100 group-hover:-z-10 group-hover:w-[36px] group-hover:h-[36px] group-active:bg-dark-100 group-active:w-[36px] group-active:h-[36px] group-focus:bg-dark-500 group-focus:w-[36px] group-focus:h-[36px]",
        )}/>
      <RadioGroupPrimitive.Indicator
        className=" flex items-center justify-center w-[10px] h-[10px]  rounded-full bg-light-100">
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export {RadioGroup, RadioGroupItem};
