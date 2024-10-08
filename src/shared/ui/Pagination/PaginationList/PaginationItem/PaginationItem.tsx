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
        "cursor-pointer flex justify-center items-center rounded-sm size-6 hover:bg-dark-500",
        active && "text-dark-900 bg-light-100 ",
        disabled && "pointer-events-none opacity-50 ",
        className
      )}
    >
      <Typography.REGULAR14 className="">{children}</Typography.REGULAR14>
    </li>
  );
};
