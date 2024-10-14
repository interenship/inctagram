import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@/shared/ui/Header/Header";

const meta = {
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isLogged: {
      control: "boolean",
      description: "Контролирует, вошел ли пользователь в систему или нет",
    },
  },
  component: Header,
  tags: ["autodocs"],
  title: "Ui/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const NotLoggedIn: Story = {
  args: {
    isLogged: false,
  },
};

export const LoggedIn: Story = {
  args: {
    isLogged: true,
  },
};
