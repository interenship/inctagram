import { forwardRef } from "react"
import { TabType } from "./Tabs"
import { List, Trigger } from "@radix-ui/react-tabs"
import { cn } from "@/features/utils/cn"

export type TabsListProps = {
    tabs: TabType[],
    fullWidth?: boolean
}

const TabsList = forwardRef<
    React.ElementRef<typeof List>,
    React.ComponentPropsWithoutRef<typeof List>
    & TabsListProps
>(({ tabs, fullWidth = false, className, ...props }, ref) => (
    <List
        ref={ref}
        className={cn("inline-flex h-10 items-center justify-stretch rounded-md bg-muted py-1 pb-8 text-muted-foreground",
            "text-dark-100", fullWidth && "w-full",
            className
        )}
        {...props}
    >
        {tabs.map((tab) => {
            return <TabsTrigger value={tab.value} key={tab.value} disabled={tab.disabled}>{tab.title}</TabsTrigger>
        })}
    </List>
))
TabsList.displayName = List.displayName

const TabsTrigger = forwardRef<
    React.ElementRef<typeof Trigger>,
    React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
    <Trigger
        ref={ref}
        className={cn("inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm ring-offset-background transition-all",
            "w-full font-fontWSB border-b-2 border-solid border-dark-100 active:bg-accent-100 active:bg-opacity-15 hover:bg-accent-900 hover:bg-opacity-15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-700 focus-visible:rounded-sm disabled:text-dark-300 disabled:border-dark-300 disabled:cursor-not-allowed disabled:hover:bg-transparent data-[state=active]:text-accent-500 data-[state=active]:border-accent-500 data-[state=active]:disabled:text-accent-900 data-[state=active]:disabled:border-accent-900",
            className
        )}
        {...props}
    />
))
TabsTrigger.displayName = Trigger.displayName

export {TabsList, TabsTrigger}