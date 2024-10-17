import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
