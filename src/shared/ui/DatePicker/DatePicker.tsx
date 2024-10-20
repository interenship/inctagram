import { format, isValid, parse } from "date-fns";
import React, { useEffect, useId, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";

import { cn } from "@/features/utils/cn";
import CustomInput from "@/shared/ui/DatePicker/CustomInput/CustomInput";
import CustomLabel from "@/shared/ui/DatePicker/CustomLabel/CustomLabel";
import { Typography } from "@/shared/ui/Typography";

type DatePickerProps = {
  id?: string;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  disabled?: boolean;
};

export const DatePicker = (props: DatePickerProps) => {
  const generatedId = useId();
  const {
    id = generatedId,
    label = "Date select:",
    errorMessage = "",
    placeholder = "DD/MM/YYYY",
    disabled = false,
  } = props;

  const [month, setMonth] = useState<Date>(new Date());
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>(errorMessage);
  /*
    const datePickerRef = useRef<HTMLDivElement>(null);


    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      if (!datePickerRef.current?.contains(e.relatedTarget)) {
        setShowCalendar(false);
      }
    };
  */

  const handleDayPickerSelect = (range: DateRange | undefined) => {
    if (!range || !range.from) {
      setInputValue("");
      // setError("Please select a valid date range.");
      return;
    }

    const fromDate = format(range.from, "dd/MM/yyyy");

    if (!range.to || range.from.getTime() === range.to.getTime()) {
      setInputValue(fromDate);
      setError(undefined);
    } else {
      const toDate = format(range.to, "dd/MM/yyyy");
      setInputValue(`${fromDate} - ${toDate}`);
      setError(undefined);
    }
    setSelectedRange(range);
  };
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
    setShowCalendar(prev => !prev);
  };
  const handleIconClick = () => {
    setShowCalendar(prev => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

    if (regex.test(value) || value === "") {
      setInputValue(value);
      const parsedDate = parse(value, "dd/MM/yyyy", new Date());

      if (isValid(parsedDate)) {
        setSelectedRange({ from: parsedDate, to: undefined });
        setMonth(parsedDate);
        setError(undefined);
      } else {
        setSelectedRange(undefined);
        setError("Invalid date.");
      }
    } else {
      setError("Date must be in DD/MM/YYYY format.");
    }
  };
  const isFirstDay = (day: Date) => {
    return selectedRange?.from ? day.getTime() === selectedRange.from.getTime() : false;
  };
  const isLastDay = (day: Date) => {
    return selectedRange?.to ? day.getTime() === selectedRange.to.getTime() : false;
  };
  const isMiddleDay = (day: Date) => {
    if (!selectedRange?.from || !selectedRange?.to) return false;
    return day > selectedRange.from && day < selectedRange.to;
  };

  return (
    <div
      className="w-[310px] text-light-100"
      // ref={datePickerRef}
      // onBlur={handleBlur} // Отслеживаем потерю фокуса
      // tabIndex={-1}
    >
      <CustomLabel id={id} disabled={disabled} label={label} />
      {/*
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
          value={inputValue}
          placeholder="DD/MM/YYYY"
          onClick={handleInputClick}
          onChange={handleInputChange}
          disabled={disabled}
          ref={ref}
          {...restProps}
        />
        {!showCalendar && (
          <SvgCalendarOutline
            onClick={handleIconClick}
            className={cn(
              "absolute right-1 top-1.5 cursor-pointer fill-light-100",
              error && "fill-danger-500"
            )}
          />
        )}

        {showCalendar && (
          <SvgCalendar
            onClick={handleIconClick}
            className={cn("absolute right-1 top-1.5 cursor-pointer fill-light-100")}
          />
        )}
      </div>
*/}
      <CustomInput
        id={id}
        disabled={disabled}
        valueInput={inputValue}
        onChangeCallback={handleInputChange}
        onClickCallback={handleInputClick}
        onClickIconCallback={handleIconClick}
        showCalendar={showCalendar}
        placeholder={placeholder}
        hasError={!!error}
      />
      {showCalendar && (
        <DayPicker
          classNames={{
            root: cn("rounded-sm border border-dark-300 bg-dark-500 p-6 font-normal"),
            day: "w-[36px] h-[36px] text-center hover:bg-accent-700 hover:p-1 hover:rounded-full active:rounded-full active:bg-accent-900 focus:ring-2 focus:ring-accent-300",
            today: "font-bold text-accent-500 ",
            month_caption: cn("flex items-center justify-between"),
            caption_label: " text-light-100 font-bold py-1.5 pl-2 leading-6 pb-5",
            chevron: cn(
              "size-[20px] rounded-full bg-dark-100 fill-light-100 shadow-[0_0_0px_6px_rgba(76,76,76,1)] hover:bg-dark-300 hover:shadow-[0_0_0px_6px_rgba(51,51,51,1)]"
            ),
            nav: "relative",
            button_previous: cn("absolute right-12 top-2"),
            button_next: cn("absolute right-4 top-2"),
            weekdays: cn("font-normal text-light-900"),
          }}
          modifiersClassNames={{
            weekEnd: "text-danger-300 no-hover no-focus no-active",
            first: "rounded-l-full text-light-100 bg-accent-900",
            last: "rounded-r-full text-light-100 bg-accent-900",
            middle: "bg-accent-900  text-light-100",
            outside: "text-light-900",
          }}
          weekStartsOn={1}
          showOutsideDays
          month={month}
          onMonthChange={setMonth}
          mode="range"
          selected={selectedRange}
          onSelect={handleDayPickerSelect}
          modifiers={{
            weekEnd: { dayOfWeek: [0, 6] },
            first: isFirstDay,
            last: isLastDay,
            middle: isMiddleDay,
          }}
        />
      )}
      {error && <Typography.SMALL className={cn("text-danger-500")}>{error}</Typography.SMALL>}
    </div>
  );
};
