import React, { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/features/utils/cn";
import SvgCalendar from "@/shared/assets/icons/components/Calendar";
import SvgCalendarOutline from "@/shared/assets/icons/components/CalendarOutline";

type CustomInputProps = {
  onClickIconCallback: () => void;
  showCalendar: boolean;
  hasError: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const DatePickerButton = (props: CustomInputProps) => {
  const {
    disabled,
    value,
    onClick,
    onClickIconCallback,
    showCalendar,
    hasError,
    className,
    ...restProps
  } = props;
  return (
    <div className={cn("group relative w-full", disabled && "pointer-events-none")}>
      <button
        type="button"
        value={value}
        onClick={onClick}
        disabled={disabled}
        {...restProps}
        className={cn(
          "h-9 w-full rounded-sm border border-dark-300 bg-transparent px-2.5 py-1.5 text-left text-base font-normal text-light-100",
          "active:border-dark-300 active:bg-dark-500 active:outline-none",
          "hover:border-dark-100 hover:bg-dark-500 hover:outline-none",
          "focus:border-accent-700 focus:bg-dark-500 focus:outline-none",
          disabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer",
          hasError && "border-danger-500 bg-dark-500 text-danger-500",
          className
        )}
      >
        {value === "" ? "Select date" : value}
      </button>
      {!showCalendar && (
        <SvgCalendarOutline
          onClick={onClickIconCallback}
          className={cn(
            "absolute right-1 top-1.5 cursor-pointer text-light-100",
            disabled ? "cursor-not-allowed" : "hover:cursor-pointer",
            hasError && "text-danger-500"
          )}
        />
      )}

      {showCalendar && (
        <SvgCalendar
          onClick={onClickIconCallback}
          className={cn(
            "absolute right-1 top-1.5 cursor-pointer text-light-100",
            hasError && "text-danger-500"
          )}
        />
      )}
    </div>
  );
};

export default DatePickerButton;
