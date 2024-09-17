import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Alerts } from './Alerts';


const meta: Meta<typeof Alerts> = {
  component: Alerts,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Alerts>;

export const Succes: Story = {
  args: {
  },
};