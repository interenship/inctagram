import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { Indicator, Item } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";
import { Label } from "@/shared/ui/Label";

type RadioGroupItemProps = {
  labelText?: string;
} & ComponentPropsWithoutRef<typeof Item>;

const RadioGroupItem = forwardRef<ElementRef<typeof Item>, RadioGroupItemProps>(
  (props, ref) => {
    const { className, value, disabled, labelText, id, ...restProps } = props;
    const generatedId = useId();
    const finalId = id ?? generatedId;

    return (
      <div>
        <Label
          htmlFor={finalId}
          disabled={disabled}
          className={cn("flex items-center justify-center", className)}
        >
          {labelText && (
            <Typography.REGULAR14 className={"ml-2"}>
              {labelText}
            </Typography.REGULAR14>
          )}
        </Label>
        <Item
          ref={ref}
          id={id}
          value={value}
          className={cn(
            "group flex justify-center items-center relative rounded-full border-2 border-light-100 w-5 h-5 transition-all duration-300  ",
            disabled
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-dark-300 hover:shadow-[0px_0px_0px_6px_#333333] focus:bg-dark-500 focus:shadow-[0px_0px_0px_6px_#171717] active:bg-dark-100 active:shadow-[0px_0px_0px_6px_#4c4c4c]",
            className,
          )}
          {...restProps}
        >
          <Indicator
            className={cn(
              "flex items-center justify-center w-2.5 h-2.5 rounded-full bg-light-100",
              className,
            )}
          />
        </Item>
      </div>
    );
  },
);
RadioGroupItem.displayName = Item.displayName;
export { RadioGroupItem };
