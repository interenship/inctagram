import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';


const meta: Meta<typeof Button> = {
  component: Button,
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
  // Todo Спросить на проверке по поводу args в Meta. Плохо или хорошо, в чём разница
  args: {
    children: 'Button',
    as: 'button',
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
    // Todo 1 из вариантов документации
    ...Primary.args,
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
    as: 'a',
    href: '/'
  },
  render: (args) => {
    return <Button {...args}>Button as Link</Button>
  }
};