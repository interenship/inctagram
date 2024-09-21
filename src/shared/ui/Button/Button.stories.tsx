import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';


const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'text'],
      table: {
        type: { summary: "'primary' | 'secondary' | 'outline' | 'text'" },
      },
    },
  },
  args: {
    children: 'Button',
    asChild: false,
    disabled: false,
    className: '',
    fullWidth: false,
    onClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};
export const Text: Story = {
  args: {
    variant: 'text',
  },
};
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true
  },
  render: (args) => {
    return <div className='w-[50vw] flex justify-center'>
      <Button {...args}>Button</Button>
    </div>
  }
};
export const AsLink: Story = {
  args: {
    variant: 'outline',
    asChild: true,
    children: '<a>Button as Link</a>'
  },
  argTypes: {
    children: {
      table: {
        readonly: true,
      }
    },
  },
  render: (args) => {
    return <Button {...args}><a>Button as Link</a></Button>
  }
};