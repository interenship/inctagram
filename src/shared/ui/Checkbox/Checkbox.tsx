import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";

type Checkbox = {
  labelText?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<ElementRef<typeof Root>, Checkbox>((props, ref) => {
  const { className, id, labelText, disabled = false, ...restProps } = props;

  return (
    <label htmlFor={id} className={cn("block max-w-max", labelText && "flex items-center gap-3")}>
      <Root
        ref={ref}
        className={cn(
          "hover:shadow-[0px_0px_0px_6px_#333333] focus:shadow-[0px_0px_0px_6px_#171717] active:shadow-[0px_0px_0px_6px_#4c4c4c]  peer flex justify-center items-center w-[18px] h-[18px] border border-light-500 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ",
          disabled && "hover:shadow-none focus:shadow-none active:shadow-none",
          className
        )}
        id={id}
        disabled={disabled}
        {...restProps}
      >
        <Indicator className={cn("flex justify-center items-center leading-none bg-white")}>
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.85999 18C9.72288 17.9996 9.58732 17.9709 9.46173 17.9159C9.33615 17.8608 9.22323 17.7805 9.12999 17.68L4.26999 12.51C4.08832 12.3164 3.991 12.0585 3.99944 11.7932C4.00788 11.5278 4.12139 11.2767 4.31499 11.095C4.5086 10.9133 4.76645 10.816 5.03181 10.8244C5.29718 10.8329 5.54832 10.9464 5.72999 11.14L9.84999 15.53L18.26 6.33C18.3453 6.22372 18.4515 6.13602 18.572 6.07227C18.6925 6.00851 18.8247 5.97007 18.9606 5.95928C19.0965 5.9485 19.2331 5.9656 19.3621 6.00955C19.4912 6.0535 19.6098 6.12336 19.7109 6.21485C19.8119 6.30633 19.8932 6.41751 19.9497 6.54154C20.0062 6.66558 20.0368 6.79986 20.0395 6.93614C20.0422 7.07242 20.0171 7.20781 19.9656 7.33401C19.9141 7.46021 19.8373 7.57455 19.74 7.67L10.6 17.67C10.5076 17.7724 10.3951 17.8545 10.2695 17.9113C10.1439 17.9681 10.0078 17.9983 9.86999 18H9.85999Z"
              fill="black"
            />
          </svg>
        </Indicator>
      </Root>
      {labelText && (
        <Typography.REGULAR14 className={cn("text-slate-50", disabled && "text-light-900")}>
          {labelText}
        </Typography.REGULAR14>
      )}
    </label>
  );
});
Checkbox.displayName = Root.displayName;

export { Checkbox };