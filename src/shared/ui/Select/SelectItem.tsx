import * as React from "react";
import {
  RadixSelectItem as Item,
  RadixSelectItemText as ItemText,
} from "src/shared/ui/Select/selectPrimitive";
import { cn } from "@/features/utils/cn";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default text-light-100 select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[highlighted]:bg-dark-300 data-[highlighted]:text-accent-500 hover:cursor-pointer",
      className,
    )}
    {...props}
  >
    <ItemText>{children}</ItemText>
  </Item>
));

SelectItem.displayName = "SelectItem";

export default SelectItem;
