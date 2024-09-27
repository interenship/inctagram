import React from "react";

export type MenuItem = {
  href: string;
  label: string;
  icon: React.ElementType;
  filledIcon?: React.ElementType;
  disabled?: boolean;
};
