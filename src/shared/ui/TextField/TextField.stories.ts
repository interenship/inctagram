import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/shared/ui/TextField/TextField";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputWithDefaultType: Story = {
  args: {
    label: "Input without a type (text by default)",
  },
};

export const TextInput: Story = {
  args: {
    type: "text",
    label: "Email",
    className: "w-[280px]",
    disabled: false,
  },
};

export const TextInputError: Story = {
  args: {
    type: "text",
    label: "Email",
    className: "w-[280px]",
    error: "Random error text",
  },
};

export const TextInputDisabled: Story = {
  args: {
    type: "text",
    label: "Email",
    className: "w-[280px]",
    disabled: true,
  },
};

export const SearchInput: Story = {
  args: {
    type: "search",
    label: "Input Text",
  },
};

export const SearchInputError: Story = {
  args: {
    type: "search",
    error: "Some error occurred",
  },
};

export const SearchInputDisabled: Story = {
  args: {
    type: "search",
    disabled: true,
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    label: "Password",
  },
};

export const PasswordInputError: Story = {
  args: {
    type: "password",
    error: "Some error occurred",
    label: "Password",
  },
};

export const PasswordInputDisabled: Story = {
  args: {
    type: "password",
    label: "Password",
    disabled: true,
  },
};
