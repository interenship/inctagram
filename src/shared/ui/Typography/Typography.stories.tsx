import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Typography } from "./Typography";

const meta = {
  component: Typography.H1,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography.H1>;

export default meta;

type Story = StoryObj<typeof meta>;

const testText =
  "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH";

const stylesForTypography = "flex flex-col bg-slate-50 gap-2 p-10";

export const AllTypography = {
  render: () => (
    <div className={stylesForTypography}>
      <Typography.LARGE className="text-red-600">{testText}</Typography.LARGE>
      <Typography.H1>{testText}</Typography.H1>
      <Typography.H2>{testText}</Typography.H2>
      <Typography.H3>{testText}</Typography.H3>
      <Typography.REGULAR16>{testText}</Typography.REGULAR16>
      <Typography.BOLD16>{testText}</Typography.BOLD16>
      <Typography.REGULAR14>{testText}</Typography.REGULAR14>
      <Typography.MEDIUM14>{testText}</Typography.MEDIUM14>
      <Typography.BOLD14>{testText}</Typography.BOLD14>
      <Typography.SMALL>{testText}</Typography.SMALL>
      <Typography.SEMIBOLDSMALL>{testText}</Typography.SEMIBOLDSMALL>
      <Typography.REGULARLINK>{testText}</Typography.REGULARLINK>
      <Typography.SMALLLINK>{testText}</Typography.SMALLLINK>
    </div>
  ),
};

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
          className="mb-5 rounded bg-slate-100 p-2"
        >
          Press Button
        </Typography.H1>
        <Typography.LARGE style={{ color: "white" }}>{value}</Typography.LARGE>
      </>
    );
  },
};
