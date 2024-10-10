import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "@/shared/ui/Checkbox";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    labelText: { control: { type: "text" } },
  },
  args: {
    id: "checkbox",
    disabled: false,
    checked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const labelText = "Check-box";

export const Default: Story = {
  render: (args) => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return (
      <Checkbox
        checked={checkedValue}
        onCheckedChange={getCheckedValue}
        {...args}
      />
    );
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
  render: ({ labelText, id, ...restArgs }) => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return (
      <Checkbox
        id={id}
        checked={checkedValue}
        labelText={labelText}
        onCheckedChange={getCheckedValue}
        {...restArgs}
      />
    );
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
