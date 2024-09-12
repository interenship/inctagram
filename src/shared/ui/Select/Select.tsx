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
import { cn } from "@/features/utils/cn";
import ChevronDown from ".././../../../public/icons/chevron-down";

const Select = Root;
const SelectValue = Value;

const styles = {
  trigger: cn(
    "group flex text-light-100 h-9 w-full items-center leading-6 justify-between rounded-sm border border-dark-100 bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  ),
  content: cn(
    "relative z-50 max-h-96 w-full  overflow-hidden rounded-sm border bg-popover text-popover-foreground shadow-md",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ),
  contentPopper: cn(
    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
  ),
  viewport: cn("p-1 "),
  viewportPopper: cn(
    "h-[var(--radix-Select-trigger-height)] w-full min-w-[var(--radix-Select-trigger-width)]",
  ),
};

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
    className={cn(styles.trigger, className)}
    {...props}
  >
    {IconComponent && <IconComponent className="mr-2" />}
    <span>{children}</span>
    <Icon asChild>
      <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform" />
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
        styles.content,
        position === "popper" && styles.contentPopper,
        className,
      )}
      position={position}
      {...props}
    >
      <Viewport
        className={cn(
          styles.viewport,
          position === "popper" && styles.viewportPopper,
        )}
      >
        {children}
      </Viewport>
    </Content>
  </Portal>
));

SelectContent.displayName = Content.displayName;

export { Select, SelectTrigger, SelectContent, SelectValue };
