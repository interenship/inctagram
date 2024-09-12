import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const NotLoggedIn: Story = {
  render: () => <Header isLogged={false} />,
};

export const LoggedIn: Story = {
  render: () => <Header isLogged={true} />,
};
