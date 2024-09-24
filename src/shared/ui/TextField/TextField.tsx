import { ComponentProps, useState } from "react";
import { cn } from "@/features/utils/cn";
import SvgSearch from "@/shared/assets/icons/components/Search";
import SvgEyeOutline from "@/shared/assets/icons/components/EyeOutline";
import SvgEyeOffOutline from "@/shared/assets/icons/components/EyeOffOutline";
import Close from "@/shared/assets/icons/components/Close";

type TextFieldProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

function TextField(props: TextFieldProps) {
  const {
    type = "text",
    disabled,
    label,
    className,
    error,
    ...restProps
  } = props;

  // Состояние показать/скрыть password
  const [showPassword, setShowPassword] = useState(false);
  // Состояние для значения инпута
  const [inputValue, setInputValue] = useState("");
  // Определяем тип инпута: если тип password и состояние showPassword true, то меняем на text
  const inputType = type === "password" && showPassword ? "text" : type;

  // Функция для переключения видимости пароля
  const togglePasswordVisibility = () => {
    if (!disabled) {
      setShowPassword(!showPassword);
    }
  };

  // Функция для очистки поля ввода
  const clearInput = () => {
    if (!disabled) {
      setInputValue("");
    }
  };

  return (
    <label className={cn(`w-full`, className)}>
      <div
        className={cn(
          "block text-light-900 text-sm",
          disabled && "text-dark-100",
        )}
      >
        {label}
      </div>

      <div className={cn("relative group")}>
        <input
          value={inputValue}
          type={inputType}
          disabled={disabled}
          onChange={(e) => setInputValue(e.currentTarget.value)}
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
            type === "text" && "pr-[35px]",
            type === "search" && "pl-[35px] pr-[35px]",
            type === "password" && "pr-[35px]",
          )}
          {...restProps}
        />

        {/* Кнопка очистки появляется только если есть значение в поле */}
        {(type === "text" || type === "search") && inputValue && (
          <Close
            onClick={clearInput}
            className={cn(
              "fill-light-900 absolute right-1 top-1.5 group-active:fill-light-100 cursor-pointer",
              disabled && "fill-dark-100 group-active:fill-dark-100",
            )}
          />
        )}

        {type === "search" && (
          <SvgSearch
            className={cn(
              "fill-light-900 absolute left-1.5 top-1.5 group-active:fill-light-100",
              disabled && "fill-dark-100 group-active:fill-dark-100",
            )}
          />
        )}

        {type === "password" && !showPassword && (
          <SvgEyeOutline
            onClick={togglePasswordVisibility}
            className={cn(
              "fill-light-100 absolute right-1 top-1.5 cursor-pointer",
              disabled && "fill-dark-100",
            )}
          />
        )}

        {type === "password" && showPassword && (
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
    </label>
  );
}

export { TextField };
