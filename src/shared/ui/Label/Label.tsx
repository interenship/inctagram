import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/features/utils/cn";

const labelVariants = cva("text-fontS leading-lineHM font-fontWR");

type LabelProps = { disabled?: boolean } & ComponentPropsWithoutRef<
  typeof Root
> &
  VariantProps<typeof labelVariants>;

const Label = forwardRef<ElementRef<typeof Root>, LabelProps>((props, ref) => {
  const { className, id, disabled, ...restProps } = props;
  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <Root
      ref={ref}
      htmlFor={finalId}
      className={cn(
        labelVariants(),
        disabled
          ? "text-light-900 cursor-not-allowed"
          : "text-light-100 hover:cursor-pointer",
        className,
      )}
      {...restProps}
    />
  );
});
Label.displayName = Root.displayName;

export { Label };
