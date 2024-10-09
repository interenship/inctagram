import type { Meta, StoryObj } from "@storybook/react";
import { Scrollbar } from "./Scrollbar";

const meta: Meta<typeof Scrollbar> = {
  component: Scrollbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Scrollbar>;

export const VerticalScroll: Story = {};
export const HorizontalScroll: Story = {};
