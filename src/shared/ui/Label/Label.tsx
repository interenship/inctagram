import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/features/utils/cn";

const labelVariants = cva(
  "text-fontS leading-lineHM font-fontWR text-light-100",
);

type LabelProps = {
  disabled?: boolean;
  required?: boolean;
} & ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof labelVariants>;

const Label = forwardRef<ElementRef<typeof Root>, LabelProps>((props, ref) => {
  const { className, id, required, children, disabled, ...restProps } = props;
  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <Root
      ref={ref}
      htmlFor={finalId}
      className={cn(
        labelVariants(),
        disabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer",
        className,
      )}
      {...restProps}
    >
      {children}
      {required && <span className="ml-0.5 text-danger-500">*</span>}
    </Root>
  );
});
Label.displayName = Root.displayName;

export { Label };
