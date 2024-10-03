import React from "react";
import { DOTS, usePagination } from "@/shared/ui/Pagination/hooks/usePagination";
import { PaginationItem } from "@/shared/ui/Pagination/PaginationList/PaginationItem";
import { PaginationList } from "@/shared/ui/Pagination/PaginationList";
import { cn } from "@/features/utils/cn";
import { ArrowIosBack, ArrowIosForward } from "@/shared/assets/icons/components";
import { PaginationArrow } from "@/shared/ui/Pagination/PaginationList/PaginationArrow";

type PaginationProps = {
  onPageChange: (number: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className?: number;
};

export const Pagination = (props: PaginationProps) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <PaginationList>
      <PaginationArrow disabled={currentPage === 1} onClick={onPrevious}>
        <ArrowIosBack />
      </PaginationArrow>
      {paginationRange?.map((pageNumber) =>
        pageNumber === DOTS ? (
          <PaginationItem key={DOTS} className="pagination-item dots">
            &#8230;
          </PaginationItem>
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
      <PaginationArrow disabled={currentPage === lastPage} onClick={onNext}>
        <ArrowIosForward />
      </PaginationArrow>
    </PaginationList>
  );
};
