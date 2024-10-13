import { Content, Root } from "@radix-ui/react-tabs";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

import { cn } from "@/features/utils/cn";

export type TabType = {
  disabled?: boolean;
  title: string;
  value: string;
};

const Tabs = Root;

const TabsContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>((props, ref) => {
  const { className, ...restProps } = props;

  return <Content ref={ref} className={cn("text-white", className)} {...restProps} />;
});
TabsContent.displayName = Content.displayName;

export { Tabs, TabsContent };
