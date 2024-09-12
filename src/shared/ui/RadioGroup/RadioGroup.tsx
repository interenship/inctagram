import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root } from "@radix-ui/react-radio-group";
import { cn } from "@/features/utils/cn";

type RadioGroupProps = ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, ...restProps } = props;
    const styles = cn("flex gap-[44px]", className);
    return <Root className={styles} {...restProps} ref={ref} />;
  },
);
RadioGroup.displayName = Root.displayName;
export { RadioGroup };
