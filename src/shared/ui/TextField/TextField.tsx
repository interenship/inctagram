import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useId, useState } from "react";

import { cn } from "@/features/utils/cn";
import Close from "@/shared/assets/icons/components/Close";
import SvgEyeOffOutline from "@/shared/assets/icons/components/EyeOffOutline";
import SvgEyeOutline from "@/shared/assets/icons/components/EyeOutline";
import SvgSearch from "@/shared/assets/icons/components/Search";

export type TextFieldProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  onClear?: () => void;
};

export const TextField = forwardRef<ElementRef<"input">, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const generatedId = useId();

    const {
      type,
      disabled = false,
      className,
      error,
      onClear,
      value,
      id = generatedId,
      ...restProps
    } = props;

    const TextFieldType = {
      passwordType: "password",
      searchType: "search",
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputType = type === TextFieldType.passwordType && isPasswordVisible ? "text" : type;

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <div className={cn("flex flex-col")}>
        <div className={cn("group relative", disabled && "pointer-events-none")}>
          <input
            id={id}
            ref={ref}
            value={value}
            type={inputType}
            disabled={disabled}
            className={cn(
              [
                "h-9 w-full rounded-sm border border-dark-100 bg-transparent px-2.5 text-base font-normal leading-6 text-light-900 [&::-webkit-search-cancel-button]:hidden",
              ],
              [
                "enabled:active:border-light-100 enabled:active:bg-dark-500 enabled:active:text-light-100 enabled:active:outline-none",
                "enabled:hover:border-light-900 enabled:hover:text-light-900",
                "enabled:focus:border-accent-500 enabled:focus:outline-none",
              ],
              error && "border-danger-500",
              type === TextFieldType.searchType && "px-[35px]",
              type === TextFieldType.passwordType && "pr-[35px]"
            )}
            {...restProps}
          />

          {type === TextFieldType.searchType && value && (
            <Close
              onClick={onClear}
              className={cn(
                "absolute right-1 top-1.5 cursor-pointer fill-light-900 group-active:fill-light-100",
                disabled && "fill-dark-100 group-active:fill-dark-100"
              )}
            />
          )}

          {type === TextFieldType.searchType && (
            <SvgSearch
              className={cn(
                "absolute left-1.5 top-1.5 fill-light-900 group-active:fill-light-100",
                disabled && "fill-dark-100 group-active:fill-dark-100"
              )}
            />
          )}

          {type === TextFieldType.passwordType && !isPasswordVisible && (
            <SvgEyeOutline
              onClick={togglePasswordVisibility}
              className={cn(
                "absolute right-1 top-1.5 cursor-pointer fill-light-100",
                disabled && "fill-dark-100"
              )}
            />
          )}

          {type === TextFieldType.passwordType && isPasswordVisible && (
            <SvgEyeOffOutline
              onClick={togglePasswordVisibility}
              className={cn(
                "absolute right-1 top-1.5 cursor-pointer fill-light-100",
                disabled && "fill-dark-100"
              )}
            />
          )}
        </div>

        {error && (
          <div className={cn("text-sm font-normal leading-6 text-danger-500")}>{error}</div>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
