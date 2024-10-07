import { cn } from "@/features/utils/cn";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    id: { type: "string" },
  },
  args: {
    id: "checkbox",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const CheckboxWithHook = (args: CheckboxProps) => {
  const [checkedValue, setCheckedValue] = useState(false);

  const getCheckedValue = (value: boolean) => {
    setCheckedValue(value);
  };

  return (
    <>
      <div className={cn("flex items-center gap-2")}>
        <Checkbox {...args} checked={checkedValue} onCheckedChange={getCheckedValue} />
        <Label disabled={args.disabled} htmlFor={args.id} className="text-light-100">
          Checkbox
        </Label>
      </div>
      <Typography.MEDIUM14 className={"text-light-100"}>Checked: {checkedValue ? "true" : "false"}</Typography.MEDIUM14>
    </>
  );
};

const CheckboxWithLabel = (args: CheckboxProps) => {
  return (
    <div className={cn("flex items-center gap-2")}>
      <Checkbox {...args} />
      <Label disabled={args.disabled} htmlFor={args.id} className="text-light-100">
        checkbox
      </Label>
    </div>
  );
};

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => <CheckboxWithHook {...args} />,
};

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <CheckboxWithLabel {...args} />,
};
