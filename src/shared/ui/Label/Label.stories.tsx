import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/shared/ui/Typography";

import { Label } from "./index";

const meta = {
  component: Label,
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
      <Typography variant="regular14" className="ml-2 text-light-100">
        Your email address
      </Typography>
    ),
  },

  tags: ["autodocs"],
  title: "Ui/Label",
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <Typography variant="regular14" className="ml-2 text-light-100">
        Your password is required
      </Typography>
    ),
  },
};
