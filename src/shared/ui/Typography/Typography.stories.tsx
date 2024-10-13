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

const typographyVariants: { variant: TypographyVariant; label: string; href?: string }[] = [
  { variant: "large", label: "Large" },
  { variant: "h1", label: "H1" },
  { variant: "h2", label: "H2" },
  { variant: "h3", label: "H3" },
  { variant: "regular14", label: "Regular-14" },
  { variant: "regular16", label: "Regular-16" },
  { variant: "bold14", label: "Bold-14" },
  { variant: "bold16", label: "Bold-16" },
  { variant: "medium14", label: "Medium-14" },
  { variant: "small", label: "Small" },
  { variant: "boldSmall", label: "Bold-Small" },
  { variant: "link", label: "Link", href: "https://google.com" },
  { variant: "linkSmall", label: "Link-Small", href: "https://facebook.com" },
  { variant: "error", label: "Error" },
];

export const Typography: Story = {
  render: (args: { variant?: TypographyVariant; gray?: boolean }) => (
    <div className="flex flex-col gap-6">
      {typographyVariants.map(({ variant, label, href }) => (
        <div key={variant} className="flex items-center gap-10">
          <TypographyComponent className="w-[100px]" {...args} variant="regular14">
            {label}:
          </TypographyComponent>
          {variant.startsWith("link") ? (
            <TypographyComponent {...args} variant={variant}>
              <a href={href}>{label}</a>
            </TypographyComponent>
          ) : (
            <TypographyComponent {...args} variant={variant}>
              {mockText}
            </TypographyComponent>
          )}
        </div>
      ))}
      <div className="flex items-center gap-10">
        <TypographyComponent className="w-[100px]" {...args} variant="regular14" gray>
          Gray:
        </TypographyComponent>
        <TypographyComponent {...args} variant="regular14" gray>
          {mockText}
        </TypographyComponent>
      </div>
    </div>
  ),
};
