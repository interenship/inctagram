import { ComponentProps, ElementType, FC, ReactNode } from "react";

import { clsx } from "clsx";

import { cva } from "class-variance-authority";

const TypographyVariants = cva([""], {
  variants: {
    variant: {
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
    },
  },
});

type Props<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & ComponentProps<T>;

const createTypographyComponent = <T extends ElementType>(basicClassName: Component): FC<Props<T>> => {
  return (props: Props<T>) => {
    const { as, className, ...restProps } = props;
    const Component = as || COMPONENTS[basicClassName];
    const classNames = clsx(basicClassName, className);

    return <Component className={classNames} {...restProps} />;
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
  H1: createTypographyComponent("h1"),
  H2: createTypographyComponent("h2"),
  H3: createTypographyComponent("h3"),
};

type Component = keyof typeof COMPONENTS;
