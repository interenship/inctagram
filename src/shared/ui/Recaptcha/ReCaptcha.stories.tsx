import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { ReCaptcha } from "./ReCaptcha";

const meta = {
  component: ReCaptcha,
  tags: ["autodocs"],
} satisfies Meta<typeof ReCaptcha>;

export default meta;
type Story = StoryObj<typeof ReCaptcha>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Typography.SMALL className="text-dark-100">Default</Typography.SMALL>
        <ReCaptcha />
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <>
        <Typography.SMALL className="text-danger-500">Error</Typography.SMALL>
        <ReCaptcha error />
      </>
    );
  },
};

export const Ru: Story = {
  render: () => {
    return (
      <>
        <Typography.SMALL className="text-dark-100">Ru</Typography.SMALL>
        <ReCaptcha language="ru" />
      </>
    );
  },
};
