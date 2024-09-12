import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Indicator, Item } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";

type RadioGroupItemProps = { labelText?: string } & ComponentPropsWithoutRef<
  typeof Item
>;

const RadioGroupItem = forwardRef<ElementRef<typeof Item>, RadioGroupItemProps>(
  (props, ref) => {
    const { className, disabled, labelText, ...restProps } = props;
    const styles = {
      item: cn(
        "group flex justify-center items-center relative rounded-full border-2 border-light-100 w-[20px] h-[20px] transition-all duration-300  disabled:cursor-not-allowed disabled:border-light-900",
        "hover:bg-dark-300 hover:shadow-[0px_0px_0px_6px_#333333] focus:bg-dark-500 focus:shadow-[0px_0px_0px_6px_#171717] active:bg-dark-100 active:shadow-[0px_0px_0px_6px_#4c4c4c]",
        disabled && "hover:shadow-none focus:shadow-none active:shadow-none",
        className,
      ),
      indicator:
        "flex items-center justify-center w-[10px] h-[10px] rounded-full bg-light-100",
      lable: "flex items-center justify-center",
    };
    return (
      <label htmlFor={props.id} className={styles.lable}>
        <Item
          ref={ref}
          disabled={disabled}
          className={styles.item}
          {...restProps}
        >
          <Indicator className={styles.indicator} />
        </Item>
        {labelText && (
          <Typography.REGULAR14
            className={cn(
              "ml-2",
              disabled ? "text-light-900 cursor-not-allowed" : "text-light-100",
            )}
          >
            {labelText}
          </Typography.REGULAR14>
        )}
      </label>
    );
  },
);
RadioGroupItem.displayName = Item.displayName;
export { RadioGroupItem };
