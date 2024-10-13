import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";

type PaginationItemProps = {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  active?: boolean;
} & ComponentProps<"li">;

export const PaginationItem = (props: PaginationItemProps) => {
  const { className, active = false, disabled = false, children, ...restProps } = props;
  return (
    <li
      {...restProps}
      className={cn(
        "flex size-6 cursor-pointer items-center justify-center rounded-sm hover:bg-dark-500",
        active && "bg-light-100 text-dark-900 ",
        disabled && "pointer-events-none opacity-50 ",
        className
      )}
    >
      <Typography.REGULAR14>{children}</Typography.REGULAR14>
    </li>
  );
};
