import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";

import { RadioGroupItem } from "./index";
import { RadioGroup } from "./RadioGroup";

const valueExamples: { label: string; value: string }[] = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const meta = {
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
    },
    value: {
      control: "text",
    },
    onValueChange: {
      action: "changed",
    },
    className: {
      control: "text",
    },
    id: {
      control: "text",
    },
  },
  args: {
    disabled: false,
    orientation: "horizontal",
    value: "",
  },
  tags: ["autodocs"],
  title: "Ui/RadioGroup",
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>("");

    return (
      <>
        <RadioGroup
          value={value}
          disabled={args.disabled}
          orientation={args.orientation}
          onValueChange={newValue => setValue(newValue)}
        >
          {valueExamples.map(option => (
            <div key={option.value} className="flex items-center justify-center">
              <RadioGroupItem disabled={args.disabled} value={option.value} id={option.value} />
              <Label htmlFor={option.value} disabled={args.disabled}>
                {option.label && (
                  <Typography variant="regular14" className="ml-2 text-light-100">
                    {option.label}
                  </Typography>
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className="mt-5 w-full text-white">Selected value: {value || "----"}</div>
      </>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const VerticalDefault: Story = {
  ...Default,
  args: {
    ...Default.args,
    orientation: "vertical",
  },
};
