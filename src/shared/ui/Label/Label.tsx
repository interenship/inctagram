import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { Root } from "@radix-ui/react-label";
import { cn } from "@/features/utils/cn";

type LabelProps = {
  disabled?: boolean;
} & ComponentPropsWithoutRef<typeof Root>;

const Label = forwardRef<ElementRef<typeof Root>, LabelProps>((props, ref) => {
  const { className, id, children, disabled, ...restProps } = props;
  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <Root
      ref={ref}
      htmlFor={finalId}
      className={cn(
        "block text-fontS leading-lineHM font-fontWR text-light-100",
        disabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer",
        className,
      )}
      {...restProps}
    >
      {children}
    </Root>
  );
});
Label.displayName = Root.displayName;

export { Label };
