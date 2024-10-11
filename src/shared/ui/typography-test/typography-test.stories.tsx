import type { Meta, StoryObj } from '@storybook/react';
import { TypographyTest, TypographyVariant } from './typography-test';

const mockText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH';

const meta: Meta<typeof TypographyTest> = {
  argTypes: {
    as: { control: { type: 'text' } },
    variant: {
      control: {
        options: [
          'large', 'h1', 'h2', 'h3', 'regular14', 'regular16', 'bold14', 'bold16',
          'medium14', 'small', 'boldSmall', 'link', 'linkSmall', 'error'
         ],
        type: 'select',
      },
    },
  },
  component: TypographyTest,
  tags: ['autodocs'],
  title: 'TypographyTest',
};

type Story = StoryObj<typeof meta>;
export default meta;

const typographyVariants: { variant: TypographyVariant, label: string, href?: string }[] = [
  { variant: 'large', label: 'Large' },
  { variant: 'h1', label: 'H1' },
  { variant: 'h2', label: 'H2' },
  { variant: 'h3', label: 'H3' },
  { variant: 'regular14', label: 'Regular-14' },
  { variant: 'regular16', label: 'Regular-16' },
  { variant: 'bold14', label: 'Bold-14' },
  { variant: 'bold16', label: 'Bold-16' },
  { variant: 'medium14', label: 'Medium-14' },
  { variant: 'small', label: 'Small' },
  { variant: 'boldSmall', label: 'Bold-Small' },
  { variant: 'link', label: 'Link', href: 'https://google.com' },
  { variant: 'linkSmall', label: 'Link-Small', href: 'https://facebook.com' },
  { variant: 'error', label: 'Error' },
];

export const TypographyForTest: Story = {
  render: (args: { variant?: TypographyVariant; gray?: boolean }) => (
    <div className='flex flex-col gap-6'>
      {typographyVariants.map(({ variant, label, href }) => (
        <div key={variant} className='flex gap-10 items-center' >
          <TypographyTest className="w-[100px]" {...args} variant="regular14" >{label}:</TypographyTest>
          {variant.startsWith('link') ? (
            <TypographyTest {...args} variant={variant}>
              <a href={href}>{label}</a>
            </TypographyTest>
          ) : (
            <TypographyTest {...args} variant={variant}>{mockText}</TypographyTest>
          )}
        </div>
      ))}
      <div className='flex gap-10 items-center'>
        <TypographyTest className="w-[100px]" {...args} variant="regular14" gray>Gray:</TypographyTest>
        <TypographyTest {...args} variant="regular14" gray>{mockText}</TypographyTest>
      </div>
    </div>
  ),
};