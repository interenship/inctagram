import * as React from "react";
import { RadixSelectTrigger, RadixSelectIcon } from "./selectPrimitive";
import { cn } from "@/features/utils/cn";
import ChevronDown from "../../../../public/icons/chevron-down";

type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixSelectTrigger
> & {
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelectTrigger>,
  SelectTriggerProps
>(({ className, disabled, children, IconComponent, ...props }, ref) => (
  <RadixSelectTrigger
    ref={ref}
    disabled={disabled}
    className={cn(
      "group flex text-light-100 h-9 w-full items-center leading-6 justify-between rounded-sm border border-dark-100 bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {IconComponent && <IconComponent className="mr-2" />}
    <span>{children}</span>
    <RadixSelectIcon asChild>
      <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform" />
    </RadixSelectIcon>
  </RadixSelectTrigger>
));

SelectTrigger.displayName = RadixSelectTrigger.displayName;

export default SelectTrigger;
