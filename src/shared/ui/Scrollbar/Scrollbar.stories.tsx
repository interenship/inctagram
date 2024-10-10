import type { Meta, StoryObj } from "@storybook/react";
import { Scrollbar } from "./Scrollbar";

const meta: Meta<typeof Scrollbar> = {
  component: Scrollbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Scrollbar>;

export const VerticalScroll: Story = {
  render: (args) => <Scrollbar type={"vertical"} {...args} />,
};

export const HorizontalScroll: Story = {
  render: (args) => <Scrollbar type={"horizontal"} {...args} />,
};
