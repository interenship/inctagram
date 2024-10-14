import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  component: Typography.H1,
  tags: ["autodocs"],
  title: "Ui/Typography",
  args: {
    previewText: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
  },
} satisfies Meta<typeof Typography.H1>;

export default meta;

type Story = StoryObj<typeof meta>;

const container = "flex flex-col gap-6";
const sign = "w-[15%] text-gray-400 leading-4 align-top";
const item = "flex gap-8 align-top";
const font = "flex-1";

export const AllTypography = {
  render: (args: any) => (
    <div>
      <div className={container}>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            LARGE <br /> 26px
          </Typography.REGULAR14>
          <Typography.LARGE className={font}>{args.previewText}</Typography.LARGE>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            H1 <br /> 20px
          </Typography.REGULAR14>
          <Typography.H1 className={font}>{args.previewText}</Typography.H1>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            H2 <br /> 18px
          </Typography.REGULAR14>
          <Typography.H2 className={font}>{args.previewText}</Typography.H2>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            H3 <br /> 16px
          </Typography.REGULAR14>
          <Typography.H3 className={font}>{args.previewText}</Typography.H3>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            REGULAR16 <br /> 16px
          </Typography.REGULAR14>
          <Typography.REGULAR16 className={font}>{args.previewText}</Typography.REGULAR16>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            BOLD16 <br /> 16px
          </Typography.REGULAR14>
          <Typography.BOLD16 className={font}>{args.previewText}</Typography.BOLD16>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            REGULAR14 <br /> 14px
          </Typography.REGULAR14>
          <Typography.REGULAR14 className={font}>{args.previewText}</Typography.REGULAR14>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            MEDIUM14 <br /> 14px
          </Typography.REGULAR14>
          <Typography.MEDIUM14 className={font}>{args.previewText}</Typography.MEDIUM14>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            BOLD14 <br /> 14px
          </Typography.REGULAR14>
          <Typography.BOLD14 className={font}>{args.previewText}</Typography.BOLD14>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            SMALL <br /> 12px
          </Typography.REGULAR14>
          <Typography.SMALL className={font}>{args.previewText}</Typography.SMALL>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            SEMIBOLDSMALL <br /> 12px
          </Typography.REGULAR14>
          <Typography.SEMIBOLDSMALL className={font}>{args.previewText}</Typography.SEMIBOLDSMALL>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            REGULARLINK <br /> 14px
          </Typography.REGULAR14>
          <Typography.REGULARLINK className={font}>{args.previewText}</Typography.REGULARLINK>
        </div>
        <div className={item}>
          <Typography.REGULAR14 className={sign}>
            SMALLLINK <br /> 12px
          </Typography.REGULAR14>
          <Typography.SMALLLINK className={font}>{args.previewText}</Typography.SMALLLINK>
        </div>
      </div>
    </div>
  ),
};
