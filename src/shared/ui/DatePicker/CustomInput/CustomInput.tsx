import React, { forwardRef } from "react";

import { cn } from "@/features/utils/cn";
import SvgCalendar from "@/shared/assets/icons/components/Calendar";
import SvgCalendarOutline from "@/shared/assets/icons/components/CalendarOutline";

type CustomInputProps = {
  id: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  valueInput: string;
  onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCallback: (e: React.MouseEvent<HTMLInputElement>) => void;
  onClickIconCallback: () => void;
  showCalendar: boolean;
  className?: string;
};

const CustomInput = (props: CustomInputProps) => {
  const {
    id,
    disabled = false,
    error,
    placeholder = "DD/MM/YYYY",
    valueInput,
    onChangeCallback,
    onClickCallback,
    onClickIconCallback,
    showCalendar,
    className,
    ...restProps
  } = props;

  return (
    <div className={cn("group relative w-full", disabled && "pointer-events-none")}>
      <input
        className={cn(
          "h-9 w-full rounded-sm border border-dark-300 bg-transparent px-2.5 py-1.5 text-base font-normal text-light-100",
          "enabled:active:border-dark-300 enabled:active:bg-dark-500 enabled:active:outline-none",
          "enabled:hover:border-dark-100 enabled:hover:bg-dark-500 enabled:hover:outline-none",
          "enabled:focus:border-accent-700 enabled:focus:bg-dark-500 enabled:focus:outline-none",
          disabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer",
          error && "border-danger-500 bg-dark-500 text-danger-500",
          className
        )}
        id={id}
        type="text"
        value={valueInput}
        placeholder="DD/MM/YYYY"
        onClick={onClickCallback}
        onChange={onChangeCallback}
        disabled={disabled}
        {...restProps}
      />
      {!showCalendar && (
        <SvgCalendarOutline
          onClick={onClickIconCallback}
          className={cn(
            "absolute right-1 top-1.5 cursor-pointer fill-light-100",
            error && "fill-danger-500"
          )}
        />
      )}

      {showCalendar && (
        <SvgCalendar
          onClick={onClickIconCallback}
          className={cn("absolute right-1 top-1.5 cursor-pointer fill-light-100")}
        />
      )}
    </div>
  );
};

export default CustomInput;
