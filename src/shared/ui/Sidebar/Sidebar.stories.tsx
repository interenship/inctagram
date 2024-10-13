import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar as SidebarComponent } from ".";

const meta = {
  component: SidebarComponent,
  tags: ["autodocs"],
  title: "Ui/Sidebar",
} satisfies Meta<typeof SidebarComponent>;

export default meta;
type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {};
