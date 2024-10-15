import type { Meta, StoryObj } from "@storybook/react";

import type { TypographyVariant } from "./Typography";
import { Typography as TypographyComponent } from "./Typography";

const mockText = "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH";

const meta = {
  argTypes: {
    as: { control: { type: "text" } },
    variant: {
      control: {
        options: [
          "large",
          "h1",
          "h2",
          "h3",
          "regular14",
          "regular16",
          "bold14",
          "bold16",
          "medium14",
          "small",
          "boldSmall",
          "link",
          "linkSmall",
          "error",
        ],
        type: "select",
      },
    },
  },
  component: TypographyComponent,
  tags: ["autodocs"],
  title: "Ui/Typography",
} satisfies Meta<typeof TypographyComponent>;

type Story = StoryObj<typeof meta>;
export default meta;

const container = "flex flex-col gap-6";
const item = "flex items-center gap-10";

export const Typography: Story = {
  render: (args: { variant?: TypographyVariant; gray?: boolean }) => (
    <div className={container}>
      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Large:
        </TypographyComponent>
        <TypographyComponent as={"h1"} variant="large">
          {mockText}
        </TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          H1:
        </TypographyComponent>
        <TypographyComponent as={"h1"} variant="h1">
          {mockText}
        </TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          H2:
        </TypographyComponent>
        <TypographyComponent as={"h2"} variant="h2">
          {mockText}
        </TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          H3:
        </TypographyComponent>
        <TypographyComponent as={"h3"} variant="h3">
          {mockText}
        </TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Regular-14:
        </TypographyComponent>
        <TypographyComponent variant="regular14">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Regular-16:
        </TypographyComponent>
        <TypographyComponent variant="regular16">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Bold-14:
        </TypographyComponent>
        <TypographyComponent variant="bold14">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Bold-16:
        </TypographyComponent>
        <TypographyComponent variant="bold16">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Medium-14:
        </TypographyComponent>
        <TypographyComponent variant="medium14">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Small:
        </TypographyComponent>
        <TypographyComponent variant="small">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Bold-Small:
        </TypographyComponent>
        <TypographyComponent variant="boldSmall">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Link:
        </TypographyComponent>
        <TypographyComponent variant="link">
          <a href="https://google.com">Link</a>
        </TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Link-Small:
        </TypographyComponent>
        <TypographyComponent variant="linkSmall">
          <a href="https://facebook.com">Link-Small</a>
        </TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Error:
        </TypographyComponent>
        <TypographyComponent variant="error">{mockText}</TypographyComponent>
      </div>

      <div className={item}>
        <TypographyComponent className="w-[100px]" variant="regular14">
          Gray:
        </TypographyComponent>
        <TypographyComponent variant="regular14" gray>
          {mockText}
        </TypographyComponent>
      </div>
    </div>
  ),
};
