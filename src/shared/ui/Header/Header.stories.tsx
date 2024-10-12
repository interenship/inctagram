import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@/shared/ui/Header/Header";

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isLogged: {
      control: "boolean",
      description: "Контролирует, вошел ли пользователь в систему или нет",
    },
  },
};

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
