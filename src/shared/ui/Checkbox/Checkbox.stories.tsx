import { Checkbox } from "@/shared/ui/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
  },
  args: {
    id: "checkbox",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const labelText = "Check-box";

export const Default: Story = {
  render: () => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return <Checkbox checked={checkedValue} onCheckedChange={getCheckedValue} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    labelText,
  },
  render: ({ labelText, id }) => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return <Checkbox id={id} checked={checkedValue} labelText={labelText} onCheckedChange={getCheckedValue} />;
  },
};

export const DisabledWithLabel: Story = {
  args: {
    labelText,
    disabled: true,
  },
};

export const DisabledCheckedWithLabel: Story = {
  args: {
    labelText,
    disabled: true,
    checked: true,
  },
};
