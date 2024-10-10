import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "@/shared/ui/Sidebar/Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "left",
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
