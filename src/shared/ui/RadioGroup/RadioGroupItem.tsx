import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { Indicator, Item } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";

type RadioGroupItemProps = {
  labelText?: string;
  // value: string;
} & ComponentPropsWithoutRef<typeof Item>;

const RadioGroupItem = forwardRef<ElementRef<typeof Item>, RadioGroupItemProps>(
  (props, ref) => {
    const { className, value, disabled, labelText, id, ...restProps } = props;
    const generatedId = useId();
    const finalId = id ?? generatedId;

    return (
      <label
        htmlFor={finalId}
        className={cn(
          "flex items-center justify-center",
          disabled
            ? "cursor-not-allowed opacity-50"
            : "text-light-100 hover:cursor-pointer",
          className,
        )}
      >
        <Item
          ref={ref}
          id={finalId}
          value={value}
          className={cn(
            "group flex justify-center items-center relative rounded-full border-2 border-light-100 w-[20px] h-[20px] transition-all duration-300  ",
            disabled
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-dark-300 hover:shadow-[0px_0px_0px_6px_#333333] focus:bg-dark-500 focus:shadow-[0px_0px_0px_6px_#171717] active:bg-dark-100 active:shadow-[0px_0px_0px_6px_#4c4c4c]",
            className,
          )}
          {...restProps}
        >
          <Indicator
            className={cn(
              "flex items-center justify-center w-[10px] h-[10px] rounded-full bg-light-100",
              className,
            )}
          />
        </Item>
        {labelText && (
          <Typography.REGULAR14 className={"ml-2"}>
            {labelText}
          </Typography.REGULAR14>
        )}
      </label>
    );
  },
);
RadioGroupItem.displayName = Item.displayName;
export { RadioGroupItem };
