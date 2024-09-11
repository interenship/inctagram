import { cn } from "@/features/utils/cn";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Typography } from "@/shared/ui/Typography";
import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseCheckbox: Story = {
  args: {
    defaultChecked: false,
  },

  render: ({ defaultChecked }) => {
    const [checkedValue, setCheckedValue] = useState(defaultChecked);

    return <Checkbox checked={checkedValue} onCheckedChange={setCheckedValue} />;
  },
};

export const DisabledCheckbox: Story = {
  args: {
    id: "checkbox",
    disabled: true,
  },
};
export const DisabledCheckedCheckbox: Story = {
  args: {
    id: "checkbox",
    disabled: true,
    checked: true,
  },
};

export const CheckboxWithLabel: Story = {
  args: {
    labelText: "Check-box",
    defaultChecked: false,
    id: "checkbox",
  },
  render: ({ labelText, defaultChecked, id }) => {
    const [checkedValue, setCheckedValue] = useState(defaultChecked);

    return <Checkbox id={id} checked={checkedValue} labelText={labelText} onCheckedChange={setCheckedValue} />;
  },
};

export const DisabledCheckboxWithLabel: Story = {
  args: {
    labelText: "Check-box",
    id: "checkbox",
    disabled: true,
  },
};

export const DisabledCheckedCheckboxWithLabel: Story = {
  args: {
    labelText: "Check-box",
    id: "checkbox",
    disabled: true,
    checked: true,
  },
};
