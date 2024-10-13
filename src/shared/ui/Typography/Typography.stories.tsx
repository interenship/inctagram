import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import React from "react";

const meta = {
  args: {
    previewText: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
  },

  tags: ["autodocs"],
  title: "Ui/Typography",
  component: Typography.H1,
} satisfies Meta<typeof Typography.H1>;

export default meta;

type Story = StoryObj<typeof meta>;

const typographyVariants = [
  { label: "LARGE", component: Typography.LARGE },
  { label: "H1", component: Typography.H1 },
  { label: "H2", component: Typography.H2 },
  { label: "H3", component: Typography.H3 },
  { label: "REGULAR16", component: Typography.REGULAR16 },
  { label: "BOLD16", component: Typography.BOLD16 },
  { label: "REGULAR14", component: Typography.REGULAR14 },
  { label: "MEDIUM14", component: Typography.MEDIUM14 },
  { label: "BOLD14", component: Typography.BOLD14 },
  { label: "SMALL", component: Typography.SMALL },
  { label: "SEMIBOLDSMALL", component: Typography.SEMIBOLDSMALL },
  { label: "REGULARLINK", component: Typography.REGULARLINK },
  { label: "SMALLLINK", component: Typography.SMALLLINK },
];

const container = "flex flex-col gap-6";
const sign = "w-[15%] text-gray-500";
const item = "flex gap-10 items-center";
const font = "flex-1";

const renderTypography = (args: any) =>
  typographyVariants.map(({ label, component: Component }) => (
    <div key={label} className={item}>
      <Typography.REGULAR14 className={sign}>{label}</Typography.REGULAR14>
      <Component className={font}>{args.previewText}</Component>
    </div>
  ));

export const AllTypography = {
  render: (args: any) => <div className={container}>{renderTypography(args)}</div>,
};
