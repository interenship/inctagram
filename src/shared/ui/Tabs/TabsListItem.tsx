import { List, Trigger } from "@radix-ui/react-tabs";
import { forwardRef } from "react";

import { cn } from "@/features/utils/cn";

import type { TabType } from "./Tabs";

export type TabsListProps = {
  tabs: TabType[];
  fullWidth?: boolean;
};

const TabsList = forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List> & TabsListProps
>((props, ref) => {
  const { tabs, fullWidth = false, className, ...restProps } = props;

  return (
    <List
      ref={ref}
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-10 items-center justify-stretch rounded-md py-1 pb-8",
        "text-dark-100",
        fullWidth && "w-full",
        className
      )}
      {...restProps}
    >
      {tabs.map(tab => {
        return (
          <TabsTrigger value={tab.value} key={tab.value} disabled={tab.disabled}>
            {tab.title}
          </TabsTrigger>
        );
      })}
    </List>
  );
});
TabsList.displayName = List.displayName;

const TabsTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <Trigger
      ref={ref}
      className={cn(
        "ring-offset-background inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm transition-all",
        "w-full border-b-2 border-solid border-dark-100 font-semibold hover:bg-accent-900 hover:bg-opacity-15 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-700 active:bg-accent-100 active:bg-opacity-15 disabled:cursor-not-allowed disabled:border-dark-300 disabled:text-dark-300 disabled:hover:bg-transparent data-[state=active]:border-accent-500 data-[state=active]:text-accent-500 data-[state=active]:disabled:border-accent-900 data-[state=active]:disabled:text-accent-900",
        className
      )}
      {...restProps}
    />
  );
});
TabsTrigger.displayName = Trigger.displayName;

export { TabsList, TabsTrigger };
