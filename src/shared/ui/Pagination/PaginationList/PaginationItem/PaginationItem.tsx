import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";
import { ComponentProps, ReactNode } from "react";

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
        "cursor-pointer",
        active && "flex justify-center items-center text-dark-900 rounded-sm bg-light-100 size-6",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <Typography.REGULAR14 className="">{children}</Typography.REGULAR14>
    </li>
  );
};
