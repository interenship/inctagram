import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/features/utils/cn";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <div
      ref={ref}
      className={cn(
        "w-[378px] rounded-sm border border-dark-300 bg-dark-500 text-light-100",
        className
      )}
      {...restProps}
    />
  );
});
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...restProps} />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return <div ref={ref} className={cn(className)} {...restProps} />;
  }
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return <div ref={ref} className={cn(className)} {...restProps} />;
  }
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...restProps } = props;
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...restProps} />;
});
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...restProps } = props;
  return <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...restProps} />;
});
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
