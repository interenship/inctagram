import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./TextArea";

const meta = {
  args: {
    disabled: false,
    placeholder: "Text-area",
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
  },
  component: Textarea,
  tags: ["autodocs"],
  title: "Ui/Textarea",
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Custom!",
    id: "123",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Custom!",
    label: "",
  },
};

export const Error: Story = {
  args: {
    error: "Error text",
  },
};
