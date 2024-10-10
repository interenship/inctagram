"use client";
import * as React from "react";
import {
  Root,
  Trigger,
  Icon,
  Portal,
  Content,
  Viewport,
  Value,
} from "@radix-ui/react-select";
import ChevronDown from "@/shared/assets/icons/components/ChevronDown";
import { cn } from "@/features/utils/cn";

export type Size = "small" | "medium";

const Select = Root;
const SelectValue = Value;

type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof Trigger> & {
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: Size;
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  SelectTriggerProps
>(
  (
    { className, disabled, children, IconComponent, size = "medium", ...props },
    ref,
  ) => {
    const triggerClasses = cn(
      "group flex text-light-100 items-center leading-6 justify-between border border-dark-100 bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
      {
        "h-9": size === "medium",
        "h-[24px] text-[14px] px-[5px] py-0": size === "small",
      },
      className,
    );
    return (
      <Trigger
        ref={ref}
        disabled={disabled}
        className={triggerClasses}
        {...props}
      >
        {IconComponent && <IconComponent className="mr-2" />}
        <span>{children}</span>
        <Icon asChild>
          <ChevronDown
            className={cn(
              "group-data-[state=open]:rotate-180 transition-transform",
              {
                "w-[18px] h-[18px] pl-[2px]": size === "small",
              },
            )}
          />
        </Icon>
      </Trigger>
    );
  },
);

SelectTrigger.displayName = Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 overflow-hidden border rounded-[2px] border-light-100 bg-dark-900 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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

export { Select, SelectTrigger, SelectContent, SelectValue };
