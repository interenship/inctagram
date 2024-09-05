import { forwardRef } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/features/utils/cn"

const TabsTrigger = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn("inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm ring-offset-background transition-all",
            "w-full font-fontWSB border-b-2 border-solid border-dark-100 active:bg-accent-100 active:bg-opacity-15 hover:bg-accent-900 hover:bg-opacity-15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-700 focus-visible:rounded-sm disabled:text-dark-300 disabled:border-dark-300 disabled:cursor-not-allowed disabled:hover:bg-transparent data-[state=active]:text-accent-500 data-[state=active]:border-accent-500 data-[state=active]:disabled:text-accent-900 data-[state=active]:disabled:border-accent-900",
            className
        )}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export { TabsTrigger }