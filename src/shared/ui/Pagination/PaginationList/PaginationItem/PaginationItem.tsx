import { cn } from "@/features/utils/cn";
import { ComponentProps, ReactNode } from "react";

type PaginationItemProps = {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  active?: boolean;
} & ComponentProps<"li">;

export const PaginationItem = (props: PaginationItemProps) => {
  const { className, active = false, disabled = false, ...restProps } = props;
  return (
    <li
      {...restProps}
      className={cn("", active && "text-fuchsia-700", disabled && "pointer-events-none opacity-50", className)}
    />
  );
};
