import { forwardRef } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/features/utils/cn"

const TabsContent = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn("text-white", className)}
        {...props}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { TabsContent }