import type * as ScrollArea from "@radix-ui/react-scroll-area";
import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";
import type { ComponentPropsWithoutRef } from "react";
import React from "react";

export type ScrollbarProps = {
  children: React.ReactNode;
  type?: ScrollArea.ScrollAreaProps["type"];
} & ComponentPropsWithoutRef<"div">;

const ScrollBar = (props: ScrollbarProps) => {
  const { children, type = "auto", ...restProps } = props;
  return (
    <Root className="size-full overflow-hidden bg-inherit" type={type}>
      <Viewport className="size-full">{children}</Viewport>
      <Scrollbar className="w-[4px] cursor-pointer" orientation="vertical">
        <Thumb className="flex-1 rounded-sm bg-dark-300 hover:bg-light-900" />
      </Scrollbar>
      <Scrollbar className="h-[4px] cursor-pointer flex-col" orientation="horizontal">
        <Thumb className="flex-1 rounded-sm bg-dark-300 hover:bg-light-900" />
      </Scrollbar>
    </Root>
  );
};
ScrollBar.displayName = Root.displayName;

export { ScrollBar };
