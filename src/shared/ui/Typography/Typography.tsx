import { ComponentProps, ElementType, FC, ReactNode } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/features/utils/cn";

const TypographyVariants = cva([""], {
  variants: {
    variant: {
      Large: ["text-fontXXL leading-lineHL font-fontWSB"],
      h1: ["text-fontXL leading-lineHL font-fontWB "],
      h2: ["text-fontL leading-lineHM font-fontWB"],
      h3: ["text-fontHS leading-lineHM font-fontWSB"],
      regular16: ["text-fontM leading-lineHM font-fontWR"],
      bold16: ["text-fontM leading-lineHM font-fontWB"],
      regular14: ["text-fontS leading-lineHM font-fontWR"],
      medium14: ["text-fontS leading-lineHM font-fontWM"],
      bold14: ["text-fontS leading-lineHM font-fontWB"],
      small: ["text-fontXS leading-lineHS font-fontWR"],
      semiBoldSmall: ["text-fontXS leading-lineHS font-fontWSB"],
      regularLink: ["text-fontS leading-lineHM font-fontWR text-accent-100 underline underline-offset-8"],
      smallLink: ["texts-fontXS leading-lineHS font-fontWR text-accent-100 underline underline-offset-8"],
    },
  },
});

type Props<T extends ElementType> = VariantProps<typeof TypographyVariants> & {
  as?: T;
  children?: ReactNode;
} & ComponentProps<T>;

const createTypographyComponent = <T extends ElementType>(basicClassName: Component): FC<Props<T>> => {
  return (props: Props<T>) => {
    const { as, className, ...restProps } = props;
    const Component = as || COMPONENTS[basicClassName];

    return <Component className={cn([TypographyVariants({ variant: basicClassName }), className])} {...restProps} />;
  };
};

const COMPONENTS = {
  Large: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  regular16: "p",
  bold16: "p",
  regular14: "p",
  medium14: "p",
  bold14: "p",
  small: "p",
  semiBoldSmall: "p",
  regularLink: "a",
  smallLink: "a",
} as const;

export const Typography = {
  LARGE: createTypographyComponent("Large"),
  H1: createTypographyComponent("h1"),
  H2: createTypographyComponent("h2"),
  H3: createTypographyComponent("h3"),
  REGULAR16: createTypographyComponent("regular16"),
  BOLD16: createTypographyComponent("bold16"),
  REGULAR14: createTypographyComponent("regular14"),
  MEDIUM14: createTypographyComponent("medium14"),
  BOLD14: createTypographyComponent("bold14"),
  SMALL: createTypographyComponent("small"),
  SEMIBOLDSMALL: createTypographyComponent("semiBoldSmall"),
  REGULARLINK: createTypographyComponent("regularLink"),
  SMALLLINK: createTypographyComponent("smallLink"),
};

type Component = keyof typeof COMPONENTS;
