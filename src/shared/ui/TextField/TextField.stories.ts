import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/shared/ui/TextField/TextField";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputWithDefaultType: Story = {
  args: {},
};

export const TextInput: Story = {
  args: {
    type: "text",
    className: "w-[280px]",
    disabled: false,
  },
};

export const TextInputError: Story = {
  args: {
    type: "text",
    className: "w-[280px]",
    error: "Random error text",
  },
};

export const TextInputDisabled: Story = {
  args: {
    type: "text",
    className: "w-[280px]",
    disabled: true,
  },
};

export const SearchInput: Story = {
  args: {
    type: "search",
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
  },
};

export const PasswordInputError: Story = {
  args: {
    type: "password",
    error: "Some error occurred",
  },
};

export const PasswordInputDisabled: Story = {
  args: {
    type: "password",
    disabled: true,
  },
};
