import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./TextArea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    label: "Text-area",
  },
};
export const Disabled: Story = {
  args: {
    label: "Text-area",
    disabled: true,
  },
};

export const error: Story = {
  args: {
    label: "Text-area",
    error: "Error text",
  },
};
