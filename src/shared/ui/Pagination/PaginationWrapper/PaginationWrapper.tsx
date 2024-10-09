import { cn } from "@/features/utils/cn";
import { ReactNode } from "react";

type PaginationWrapper = {
  className?: string;
  children: ReactNode;
};

export const PaginationWrapper = (props: PaginationWrapper) => {
  const { className, ...restProps } = props;
  return <div className={cn("flex items-center gap-6", className)} {...restProps} />;
};
