import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root } from "@radix-ui/react-label";
import { cn } from "@/features/utils/cn";

type LabelProps = {
  disabled?: boolean;
} & ComponentPropsWithoutRef<typeof Root>;

const Label = forwardRef<ElementRef<typeof Root>, LabelProps>((props, ref) => {
  const { className, disabled = false, ...restProps } = props;

  return (
    <Root
      ref={ref}
      className={cn(
        disabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer",
        className,
      )}
      {...restProps}
    />
  );
});
Label.displayName = Root.displayName;

export { Label };
