import type { Meta, StoryObj } from "@storybook/react";

import { ReCaptcha as ReCaptchaComponent } from "./ReCaptcha";
import { Typography } from '../Typography';

const meta: Meta<typeof ReCaptchaComponent> = {
  component: ReCaptchaComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReCaptchaComponent>;

export const Recaptcha: Story = {
  render: () => {

    return (
      <div className="flex gap-10">
        <div>
          <Typography.SMALL className="text-dark-100">Default</Typography.SMALL>
          <ReCaptchaComponent />
        </div>
        <div>
          <Typography.SMALL className="text-danger-600">Error</Typography.SMALL>
          <ReCaptchaComponent error={true} />
        </div>
      </div>
    );
  },
};
