import type { ReactNode } from "react";

import { cn } from "@/features/utils/cn";

type PaginationList = {
  className?: string;
  children: ReactNode;
};

export const PaginationList = (props: PaginationList) => {
  const { className, ...restProps } = props;
  return <ul {...restProps} className={cn("flex items-center gap-5 text-light-100", className)} />;
};
