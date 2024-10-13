import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/features/utils/cn";

type PaginationArrowProps = {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
} & ComponentProps<"li">;

export const PaginationArrow = (props: PaginationArrowProps) => {
  const { className, disabled = false, ...restProps } = props;
  return (
    <li
      {...restProps}
      className={cn(disabled && "pointer-events-none opacity-50", "cursor-pointer", className)}
    />
  );
};
