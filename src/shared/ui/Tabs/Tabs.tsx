import { cn } from "@/features/utils/cn"
import { Content, Root } from "@radix-ui/react-tabs"
import { forwardRef } from "react"

export type TabType = {
    disabled?: boolean
    title: string
    value: string
}

const Tabs = Root

const TabsContent = forwardRef<
    React.ElementRef<typeof Content>,
    React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
    <Content
        ref={ref}
        className={cn("text-white", className)}
        {...props}
    />
))
TabsContent.displayName = Content.displayName

export { Tabs, TabsContent }
