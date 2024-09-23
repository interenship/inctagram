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
    children: {
      control: { type: "text" },
      description: "Текст, которые будут отображены внутри компонента Label.",
    },
  },
  args: {
    disabled: false,
    id: "email",
    children: "Your email address",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args}>{args.children}</Label>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Your password is required.",
  },
  render: (args) => <Label {...args}>{args.children}</Label>,
};
