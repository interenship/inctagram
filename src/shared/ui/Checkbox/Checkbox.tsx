import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { cn } from "@/features/utils/cn";
import { CheckmarkOutline } from "@/shared/assets/icons/components";

type Checkbox = ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<ElementRef<typeof Root>, Checkbox>((props, ref) => {
  const { className, id, disabled = false, ...restProps } = props;

  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <Root
      ref={ref}
      className={cn(
        "hover:shadow-[0px_0px_0px_6px_#333333] focus:shadow-[0px_0px_0px_6px_#171717] active:shadow-[0px_0px_0px_6px_#4c4c4c]  peer flex justify-center items-center w-[18px] h-[18px] border border-light-500 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ",
        disabled && "hover:shadow-none focus:shadow-none active:shadow-none",
        className
      )}
      id={finalId}
      disabled={disabled}
      {...restProps}
    >
      <Indicator className={cn("text-light-300")}>
        <CheckmarkOutline />
      </Indicator>
    </Root>
  );
});
Checkbox.displayName = Root.displayName;

export { Checkbox };
