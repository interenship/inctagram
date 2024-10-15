import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./TextArea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    labelText: "Text-area",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    labelText: "Text-area",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Custom!",
    labelText: "Text-area",
    id: "123",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Custom!",
  },
};

export const Error: Story = {
  args: {
    error: "Error text",
    labelText: "Text-area",
  },
};
