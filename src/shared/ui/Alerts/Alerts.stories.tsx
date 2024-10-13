import type { Meta, StoryObj } from "@storybook/react";

import { Alerts, AlertsStatus } from ".";

const meta = {
  component: Alerts,
  args: {
    isShow: true,
    message: "",
    status: AlertsStatus.success,
  },
  argTypes: {
    status: {
      control: "radio",
      options: [AlertsStatus.success, AlertsStatus.failed],
    },
  },
  tags: ["autodocs"],
  title: "Ui/Alerts",
} satisfies Meta<typeof Alerts>;

export default meta;
type Story = StoryObj<typeof Alerts>;

export const Succes: Story = {
  args: {
    message: "Your settings are saved",
  },
};
export const Failed: Story = {
  args: {
    message: "Server is not available",
    status: AlertsStatus.failed,
  },
};
