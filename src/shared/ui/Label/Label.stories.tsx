import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/shared/ui/Typography";

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
      description: "Отключает компонент, делая его недоступным для взаимодействия.",
    },
    htmlFor: {
      control: { type: "text" },
      description: "Уникальный идентификатор для связывания с компонентом, например, с input.",
    },
    children: {
      control: { type: "text" },
      description:
        "Содержимое, которое будет отображено внутри компонента Label. Это может быть текст или JSX-элементы, такие как Typography.",
    },
  },
  args: {
    disabled: false,
    htmlFor: "email",
    children: (
      <Typography.REGULAR14 className="ml-2 text-light-100">
        Your email address
      </Typography.REGULAR14>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <Typography.REGULAR14 className="ml-2 text-light-100">
        Your password is required.
      </Typography.REGULAR14>
    ),
  },
};
