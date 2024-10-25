import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";
import { DateRange } from "react-day-picker";
import { useState } from "react";

const meta = {
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    id: "datePickerId",
    label: "Data",
    errorMessage: "",
    placeholderText: "Add date",
    disabled: false,
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const createDatePickerStory = (args: any) => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(undefined);

  const handleSelect = (range: DateRange | undefined) => {
    setSelectedRange(range);
  };
  console.log(selectedRange);
  return <DatePicker selectedRange={selectedRange} onSelect={handleSelect} {...args} />;
};

export const Default: Story = args => createDatePickerStory(args);

export const WithError: Story = {
  args: {
    errorMessage: "Invalid date. Please use the format DD/MM/YYYY",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
