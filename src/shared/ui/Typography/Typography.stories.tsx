import type { Meta, StoryObj } from "@storybook/react";

import { Typography as TypographyComponent, TypographyVariant } from "./Typography";
import Link from "next/link";

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

export const Typography: Story = {
  render: (args: { variant?: TypographyVariant; gray?: boolean }) => (
    <div className={container}>
      <TypographyComponent variant="large">Large: {mockText}</TypographyComponent>
      <TypographyComponent variant="h1">H1: {mockText}</TypographyComponent>
      <TypographyComponent variant="h2">H2: {mockText}</TypographyComponent>
      <TypographyComponent variant="h3">H3: {mockText}</TypographyComponent>
      <TypographyComponent>Regular-14: {mockText}</TypographyComponent>
      <TypographyComponent variant="regular16">Regular-16: {mockText}</TypographyComponent>
      <TypographyComponent variant="bold14">Bold-14: {mockText}</TypographyComponent>
      <TypographyComponent variant="bold16">Bold-16: {mockText}</TypographyComponent>
      <TypographyComponent variant="medium14">Medium-14: {mockText}</TypographyComponent>
      <TypographyComponent variant="small">Small: {mockText}</TypographyComponent>
      <TypographyComponent variant="boldSmall">Bold-Small: {mockText}</TypographyComponent>
      <TypographyComponent as={Link} variant="link" href={"https://www.facebook.com"}>
        Link: {mockText}
      </TypographyComponent>
      <TypographyComponent as={Link} href={"https://www.google.com/"} variant="linkSmall">
        Link-Small: {mockText}
      </TypographyComponent>
      <TypographyComponent as={"span"} variant="error">
        Error: {mockText}
      </TypographyComponent>
      <TypographyComponent gray>Gray: {mockText}</TypographyComponent>
    </div>
  ),
};
