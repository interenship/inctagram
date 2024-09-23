import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupItem } from "@/shared/ui/RadioGroup/RadioGroupItem";
import { useState } from "react";
import { Typography } from "../Typography/Typography";

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
];

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description:
        "Отключает компонент, делая его недоступным для взаимодействия.",
      orientation: "Расположение элементов, горизонтально или вертикально.",
    },
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      description: "Расположение элементов, горизонтально или вертикально.",
    },
    onValueChange: {
      action: "changed",
      description:
        "Функция обратного вызова, вызываемая при изменении значения.",
    },
    value: {
      control: "text",
      description: "Текущее значение радиогруппы.",
    },
    name: {
      control: "text",
      description: "Имя, используемое при работе с компонентом внутри формы.",
    },
  },
  args: {
    disabled: false,
    orientation: "horizontal",
    value: "",
    name: "color",
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("");

    console.log("Selected value:", value);
    return (
      <>
        <Label htmlFor={args.name} className={"mb-5"}>
          <Typography.H1>Choose a color</Typography.H1>
        </Label>
        <RadioGroup
          value={value}
          onValueChange={(value) => setValue(value)}
          disabled={args.disabled}
          orientation={args.orientation}
          name={args.name}
        >
          {valueExamples.map((option) => (
            <RadioGroupItem
              key={option.value}
              disabled={args?.disabled}
              labelText={option.label}
              value={option.value}
            />
          ))}
        </RadioGroup>
        <div className={"mt-5 text-white w-full"}>
          Selected value: {value ? value : "----"}
        </div>
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
