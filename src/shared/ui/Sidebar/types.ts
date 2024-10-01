import React from "react";

export type MenuItemProps = {
  href: string;
  title: string;
  icon: React.ElementType;
  filledIcon?: React.ElementType;
  disabled?: boolean;
  className?: string;
};
