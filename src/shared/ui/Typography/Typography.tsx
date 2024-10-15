import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export type TypographyVariant =
  | "large"
  | "h1"
  | "h2"
  | "h3"
  | "regular14"
  | "regular16"
  | "bold14"
  | "bold16"
  | "medium14"
  | "small"
  | "boldSmall"
  | "link"
  | "linkSmall"
  | "error";

type TypographyProps<T extends ElementType> = {
  as?: T;
  gray?: boolean;
  variant?: TypographyVariant;
} & ComponentPropsWithoutRef<T>;

const typographyClasses: Record<TypographyVariant, string> = {
  large: "text-[1.625rem] leading-9 font-semibold",
  h1: "text-[1.25rem] leading-9 font-bold",
  h2: "text-[1.125rem] leading-6 font-bold",
  h3: "text-base font-semibold",
  regular14: "text-[0.875rem] leading-6 font-normal",
  regular16: "text-base font-normal",
  bold14: "text-[0.875rem] leading-6 font-bold",
  bold16: "text-base font-bold",
  medium14: "text-[0.875rem] leading-6 font-medium",
  small: "text-xs font-normal",
  boldSmall: "text-xs font-semibold",
  link: "text-[0.875rem] leading-6 font-normal text-accent-100 underline underline-offset-4",
  linkSmall: "text-xs font-normal text-accent-100 underline underline-offset-4",
  error: "text-xs text-danger-500 font-normal leading-6",
};

export const Typography = <T extends ElementType = "p">(props: TypographyProps<T>) => {
  const { as: Component = "p", className, gray, variant = "regular14", ...rest } = props;

  const grayClass = gray && "text-light-900";
  const classNames = clsx(typographyClasses[variant], grayClass, className);

  return <Component className={classNames} {...rest} />;
};
