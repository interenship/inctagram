import { Indicator, Item } from "@radix-ui/react-radio-group";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useId } from "react";

import { cn } from "@/features/utils/cn";

type RadioGroupItemProps = ComponentPropsWithoutRef<typeof Item>;

const RadioGroupItem = forwardRef<ElementRef<typeof Item>, RadioGroupItemProps>((props, ref) => {
  const { className, disabled = false, id, ...restProps } = props;

  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <Item
      ref={ref}
      className={cn(
        "group relative flex size-5 items-center justify-center rounded-full border-2 border-light-100 transition-all duration-300",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:bg-dark-300 hover:shadow-[0px_0px_0px_6px_#333333] focus:bg-dark-500 focus:shadow-[0px_0px_0px_6px_#171717] active:bg-dark-100 active:shadow-[0px_0px_0px_6px_#4c4c4c]",
        className
      )}
      id={finalId}
      {...restProps}
    >
      <Indicator
        className={cn(
          "flex size-2.5 items-center justify-center rounded-full bg-light-100",
          className
        )}
      />
    </Item>
  );
});
RadioGroupItem.displayName = Item.displayName;
export { RadioGroupItem };
