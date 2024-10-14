import type { ReactNode } from "react";

import { cn } from "@/features/utils/cn";

type PaginationWrapper = {
  className?: string;
  children: ReactNode;
};

export const PaginationWrapper = (props: PaginationWrapper) => {
  const { className, ...restProps } = props;
  return <div className={cn("flex items-center gap-6", className)} {...restProps} />;
};
