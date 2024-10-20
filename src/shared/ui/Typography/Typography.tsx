import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps, ElementType, FC, ReactNode } from "react";

import { cn } from "@/features/utils/cn";

const typographyVariants = cva([""], {
  variants: {
    variant: {
      Large: ["text-[1.625rem] font-semibold leading-9"],
      h1: ["text-[1.25rem] font-bold leading-9"],
      h2: ["text-[1.125rem] font-bold leading-6"],
      h3: ["text-base font-semibold"],
      regular16: ["text-base font-normal"],
      bold16: ["text-base font-bold"],
      regular14: ["text-[0.875rem] font-normal leading-6"],
      medium14: ["text-[0.875rem] font-medium leading-6"],
      bold14: ["text-[0.875rem] font-bold leading-6"],
      small: ["text-xs font-normal"],
      semiBoldSmall: ["text-xs font-semibold"],
      regularLink: [
        "text-[0.875rem] font-normal leading-6 text-accent-100 underline underline-offset-4",
      ],
      smallLink: ["text-xs font-normal text-accent-100 underline underline-offset-4"],
    },
  },
});

type Props<T extends ElementType> = VariantProps<typeof typographyVariants> & {
  as?: T;
  children?: ReactNode;
} & ComponentProps<T>;

const createTypographyComponent = <T extends ElementType>(variant: Component): FC<Props<T>> => {
  return (props: Props<T>) => {
    const { as, className, ...restProps } = props;
    const Component = as || COMPONENTS[variant];

    return <Component className={cn(typographyVariants({ variant }), className)} {...restProps} />;
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
