import React from "react";

import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";

type CustomLabelProps = {
  id: string;
  disabled?: boolean;
  className?: string; // Поддержка пользовательского класса
  label?: string;
};

export default function CustomLabel(props: CustomLabelProps) {
  const { id, disabled, label } = props;
  return (
    <Label htmlFor={id} disabled={disabled}>
      <Typography.REGULAR14 className="text-light-900">{label}</Typography.REGULAR14>
    </Label>
  );
}
