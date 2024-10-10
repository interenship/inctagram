"use client";

import {
  Content,
  Icon,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import * as React from "react";

import { cn } from "@/features/utils/cn";
import ChevronDown from "@/shared/assets/icons/components/ChevronDown";

const Select = Root;
const SelectValue = Value;

type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof Trigger> & {
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  SelectTriggerProps
>(({ className, disabled, children, IconComponent, ...props }, ref) => (
  <Trigger
    ref={ref}
    disabled={disabled}
    className={cn(
      "bg-background ring-offset-background placeholder:text-muted-foreground group flex h-9 w-full items-center justify-between rounded-[2px] border border-dark-100 px-3 py-1.5 text-sm leading-6 text-light-100 focus:border-blue-500 focus:outline-none focus:ring-0 active:border-light-100 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      "data-[state=open]:border-white",
      className,
    )}
    {...props}
  >
    {IconComponent && <IconComponent className="mr-2" />}
    <span>{children}</span>
    <Icon asChild>
      <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
    </Icon>
  </Trigger>
));

SelectTrigger.displayName = Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 overflow-hidden rounded-[2px] border border-light-100 bg-dark-900 shadow-md",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <Viewport
        className={cn(
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </Viewport>
    </Content>
  </Portal>
));

SelectContent.displayName = Content.displayName;

export { Select, SelectContent, SelectTrigger, SelectValue };
