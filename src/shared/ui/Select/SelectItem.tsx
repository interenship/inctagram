import { Item, ItemText } from "@radix-ui/react-select";
import * as React from "react";

import { cn } from "@/features/utils/cn";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-light-100 outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:cursor-pointer data-[highlighted]:bg-dark-300 data-[highlighted]:text-accent-500",
      className
    )}
    {...props}
  >
    <ItemText>{children}</ItemText>
  </Item>
));

SelectItem.displayName = "SelectItem";

export { SelectItem };
