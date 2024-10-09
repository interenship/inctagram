import React from "react";
import { DOTS, usePagination } from "@/shared/ui/Pagination/hooks/usePagination";
import { PaginationItem } from "@/shared/ui/Pagination/PaginationList/PaginationItem";
import { PaginationList } from "@/shared/ui/Pagination/PaginationList";
import { cn } from "@/features/utils/cn";
import { ArrowIosBack, ArrowIosForward } from "@/shared/assets/icons/components";
import { PaginationArrow } from "@/shared/ui/Pagination/PaginationList/PaginationArrow";
import { PaginationWrapper } from "@/shared/ui/Pagination/PaginationWrapper";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/shared/ui/Select/Select";
import { SelectItem } from "@/shared/ui/Select/SelectItem";
import { Typography } from "@/shared/ui/Typography";

type PaginationProps = {
  onPageChange: (number: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};

export const Pagination = (props: PaginationProps) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const emptyPagination = currentPage == 0 || (paginationRange && paginationRange.length < 2);
  const firstPage = currentPage === 1;
  const lastPage = currentPage === (paginationRange && paginationRange[paginationRange.length - 1]);

  return (
    !emptyPagination && (
      <PaginationWrapper>
        <PaginationList>
          <PaginationArrow disabled={firstPage} onClick={onPrevious}>
            <ArrowIosBack />
          </PaginationArrow>
          {paginationRange?.map((pageNumber) =>
            pageNumber === DOTS ? (
              <PaginationItem className="cursor-auto">&#8230;</PaginationItem>
            ) : (
              <PaginationItem
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(Number(pageNumber))}
              >
                {pageNumber}
              </PaginationItem>
            )
          )}
          <PaginationArrow disabled={lastPage} onClick={onNext}>
            <ArrowIosForward />
          </PaginationArrow>
        </PaginationList>
        <div className="flex items-center gap-1">
          <Typography.REGULAR14 className={"text-light-100"}>Show</Typography.REGULAR14>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <Typography.REGULAR14 className={"text-light-100 min-w-max leading-none"}>on page</Typography.REGULAR14>
        </div>
      </PaginationWrapper>
    )
  );
};
