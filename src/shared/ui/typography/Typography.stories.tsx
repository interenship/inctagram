import type { Meta, StoryObj } from '@storybook/react';

import { ElementType, ReactNode, useState } from 'react';

import { Typography } from './Typography';

const meta = {
  component: Typography.Body1,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography.Body1>;

export default meta;

type Story = StoryObj<typeof meta>;

type createStoryArgs = {
  Component: typeof Typography.Body1;
  as?: ElementType;
  children?: ReactNode;
};

const createStory = (args: createStoryArgs): Story => {
  const { Component, as, children } = args;

  return {
    args: {
      children,
    },
    render: ({ children }) => <Component as={as}>{children}</Component>,
  };
};

const testText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH';

const allTypographyStyle = {
  margin: '0.5rem 0',
};

export const AllTypography = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.H1 style={allTypographyStyle}>Heading 1</Typography.H1>
      <Typography.H2 style={allTypographyStyle}>Heading 2</Typography.H2>
      <Typography.H3 style={allTypographyStyle}>Heading 3</Typography.H3>
      <Typography.H4 style={allTypographyStyle}>Heading 4</Typography.H4>
      <Typography.Body1 style={allTypographyStyle}>Body 1</Typography.Body1>
      <Typography.Body2 style={allTypographyStyle}>Body 2</Typography.Body2>
      <Typography.Subtitle1 style={allTypographyStyle}>Subtitle 1</Typography.Subtitle1>
      <Typography.Subtitle2 style={allTypographyStyle}>Subtitle 2</Typography.Subtitle2>
      <Typography.Caption style={allTypographyStyle}>Caption</Typography.Caption>
      <Typography.Overline style={allTypographyStyle}>Overline</Typography.Overline>
      <Typography.Link1 style={allTypographyStyle}>Link</Typography.Link1>
      <Typography.Link2 style={allTypographyStyle}>Link</Typography.Link2>
    </div>
  ),
};

export const H1 = createStory({ Component: Typography.H1, children: testText });

export const H2 = createStory({ Component: Typography.H2, children: testText });

export const H3 = createStory({ Component: Typography.H3, children: testText });

export const H4 = createStory({ Component: Typography.H4, children: testText });

export const Body1 = createStory({ Component: Typography.Body1, children: testText });

export const Body2 = createStory({ Component: Typography.Body2, children: testText });

export const Subtitle1 = createStory({ Component: Typography.Subtitle1, children: testText });

export const Subtitle2 = createStory({ Component: Typography.Subtitle2, children: testText });

export const Caption = createStory({ Component: Typography.Caption, children: testText });

export const Overline = createStory({ Component: Typography.Overline, children: testText });

export const Link1 = createStory({ Component: Typography.Link1, children: testText });

export const Link2 = createStory({ Component: Typography.Link2, children: testText });

export const TypographyAsButton: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <>
        <Typography.Body1
          as="button"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          like a button press to increase
        </Typography.Body1>
        <Typography.Body2>{value}</Typography.Body2>
      </>
    );
  },
};
