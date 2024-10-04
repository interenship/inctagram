import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from "react";
import { cn } from "@/features/utils/cn";
import SvgSearch from "@/shared/assets/icons/components/Search";
import SvgEyeOutline from "@/shared/assets/icons/components/EyeOutline";
import SvgEyeOffOutline from "@/shared/assets/icons/components/EyeOffOutline";
import Close from "@/shared/assets/icons/components/Close";

export type TextFieldProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  onClear?: () => void;
};

export const TextField = forwardRef<ElementRef<"input">, TextFieldProps>(
  (props, ref) => {
    const {
      type,
      disabled = false,
      className,
      error,
      onClear,
      value,
      ...restProps
    } = props;

    const TextFieldType = {
      passwordType: "password",
      searchType: "search",
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputType =
      type === TextFieldType.passwordType && isPasswordVisible ? "text" : type;

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <div className={cn("flex flex-col")}>
        <div
          className={cn("relative group", disabled && "pointer-events-none")}
        >
          <input
            ref={ref}
            value={value}
            type={inputType}
            disabled={disabled}
            className={cn(
              [
                "w-full px-2.5 border rounded-sm border-dark-100 bg-transparent leading-6 text-light-900 font-normal text-base h-9 [&::-webkit-search-cancel-button]:hidden",
              ],
              [
                "enabled:active:border-light-100 enabled:active:text-light-100 enabled:active:bg-dark-500 enabled:active:outline-none",
                "enabled:hover:border-light-900 enabled:hover:text-light-900",
                "enabled:focus:border-accent-500 enabled:focus:outline-none",
              ],
              error && "border-danger-500",
              type === TextFieldType.searchType && "pl-[35px] pr-[35px]",
              type === TextFieldType.passwordType && "pr-[35px]",
            )}
            {...restProps}
          />

          {type === TextFieldType.searchType && value && (
            <Close
              onClick={onClear}
              className={cn(
                "fill-light-900 absolute right-1 top-1.5 group-active:fill-light-100 cursor-pointer",
                disabled && "fill-dark-100 group-active:fill-dark-100",
              )}
            />
          )}

          {type === TextFieldType.searchType && (
            <SvgSearch
              className={cn(
                "fill-light-900 absolute left-1.5 top-1.5 group-active:fill-light-100",
                disabled && "fill-dark-100 group-active:fill-dark-100",
              )}
            />
          )}

          {type === TextFieldType.passwordType && !isPasswordVisible && (
            <SvgEyeOutline
              onClick={togglePasswordVisibility}
              className={cn(
                "fill-light-100 absolute right-1 top-1.5 cursor-pointer",
                disabled && "fill-dark-100",
              )}
            />
          )}

          {type === TextFieldType.passwordType && isPasswordVisible && (
            <SvgEyeOffOutline
              onClick={togglePasswordVisibility}
              className={cn(
                "fill-light-100 absolute right-1 top-1.5 cursor-pointer",
                disabled && "fill-dark-100",
              )}
            />
          )}
        </div>

        {error && (
          <div className={cn("text-danger-500 font-normal text-sm leading-6")}>
            {error}
          </div>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
