import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { ReCaptcha as ReCaptchaComponent } from "./ReCaptcha";

const meta = {
  component: ReCaptchaComponent,
  tags: ["autodocs"],
  title: "UI/ReCaptcha",
} satisfies Meta<typeof ReCaptchaComponent>;

export default meta;
type Story = StoryObj<typeof ReCaptchaComponent>;

export const ReCaptcha: Story = {
  render: () => {
    return (
      <div className="flex gap-10">
        <div>
          <Typography.SMALL className="text-dark-100">Default</Typography.SMALL>
          <ReCaptchaComponent />
        </div>
        <div>
          <Typography.SMALL className="text-danger-500">Error</Typography.SMALL>
          <ReCaptchaComponent error />
        </div>
      </div>
    );
  },
};
