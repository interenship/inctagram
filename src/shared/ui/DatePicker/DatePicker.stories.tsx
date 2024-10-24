import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";

const meta = {
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    id: "datePickerId",
    label: "Data",
    errorMessage: "",
    placeholder: "Add date",
    disabled: false,
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: "Invalid date. Please use the format DD/MM/YYYY",
  },
};
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
