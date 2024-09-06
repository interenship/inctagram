import { forwardRef } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/features/utils/cn"
import { TabType } from "./Tabs"
import { TabsTrigger } from "."

export type TabsListProps = {
    tabs: TabType[],
    fullWidth?: boolean
}

const TabsList = forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
    & TabsListProps
>(({ tabs, fullWidth = false, className, ...props }, ref) => (
    <TabsPrimitive.List
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
    </TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

export { TabsList }