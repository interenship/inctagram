import type { Meta, StoryObj } from "@storybook/react";

import { Alerts, AlertsStatus } from ".";

const meta: Meta<typeof Alerts> = {
  component: Alerts,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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
};

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
