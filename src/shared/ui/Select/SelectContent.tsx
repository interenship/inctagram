import * as React from "react";
import {
  RadixSelectContent,
  RadixSelectViewport,
  RadixSelectPortal,
} from "./SelectPrimitive";
import { cn } from "@/features/utils/cn";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof RadixSelectContent>,
  React.ComponentPropsWithoutRef<typeof RadixSelectContent>
>(({ className, children, position = "popper", ...props }, ref) => (
  <RadixSelectPortal>
    <RadixSelectContent
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[180px] overflow-hidden rounded-sm border bg-popover text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <RadixSelectViewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-Select-trigger-height)] w-full min-w-[var(--radix-Select-trigger-width)]",
        )}
      >
        {children}
      </RadixSelectViewport>
    </RadixSelectContent>
  </RadixSelectPortal>
));

SelectContent.displayName = RadixSelectContent.displayName;

export default SelectContent;
