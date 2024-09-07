import * as TabsPrimitive from "@radix-ui/react-tabs"

export type TabType = {
    disabled?: boolean
    title: string
    value: string
}

const Tabs = TabsPrimitive.Root

export { Tabs }
