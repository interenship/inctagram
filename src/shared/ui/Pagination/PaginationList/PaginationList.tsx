import { cn } from "@/features/utils/cn";
import { ReactNode } from "react";

type PaginationList = {
  className?: string;
  children: ReactNode;
};

export const PaginationList = (props: PaginationList) => {
  const { className, ...restProps } = props;
  return <ul {...restProps} className={cn("flex text-light-100 items-center gap-5", className)} />;
};
