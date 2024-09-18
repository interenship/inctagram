import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./index";

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description:
        "Отключает компонент, делая его недоступным для взаимодействия.",
    },
    id: {
      control: { type: "text" },
      description: "Ваш id.",
    },
  },
  args: {
    disabled: false,
    id: "email",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args}>Your email address</Label>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Label {...args}>Your email address</Label>,
};
