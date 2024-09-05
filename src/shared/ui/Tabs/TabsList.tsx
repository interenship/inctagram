import { forwardRef } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/features/utils/cn"
import { TabsTrigger } from "."

const TabsList = forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn("inline-flex h-10 items-center justify-stretch rounded-md bg-muted py-1 pb-8 text-muted-foreground",
            "text-dark-100 w-full",
            className
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

export { TabsList }