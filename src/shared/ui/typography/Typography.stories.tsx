import type { Meta, StoryObj } from "@storybook/react";

import { ElementType, ReactNode, useState } from "react";

import { Typography } from "./Typography";

const meta = {
  component: Typography.H1,
  tags: ["autodocs"],
  title: "Components/Typography",
} satisfies Meta<typeof Typography.H1>;

export default meta;

type Story = StoryObj<typeof meta>;

type createStoryArgs = {
  Component: typeof Typography.H1;
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

const testText = "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH";

const allTypographyStyle = {
  margin: "0.5rem 0",
};

export const AllTypography = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.H1 style={allTypographyStyle}>Heading 1</Typography.H1>
      <Typography.H2 style={allTypographyStyle}>Heading 2</Typography.H2>
      <Typography.H3 style={allTypographyStyle}>Heading 3</Typography.H3>
    </div>
  ),
};

export const H1 = createStory({ Component: Typography.H1, children: testText });

export const H2 = createStory({ Component: Typography.H2, children: testText });

export const H3 = createStory({ Component: Typography.H3, children: testText });

export const TypographyAsButton: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <>
        <Typography.H1
          as="button"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          like a button press to increase
        </Typography.H1>
        <Typography.H2>{value}</Typography.H2>
      </>
    );
  },
};
