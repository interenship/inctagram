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

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Отключает компонент, делая его недоступным для взаимодействия.",
    },
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      description: "Расположение элементов, горизонтально или вертикально.",
    },
    value: {
      control: "text",
      description: "Текущее выбранное значение в компоненте.",
    },
    onValueChange: {
      action: "changed",
      description: "Функция обратного вызова, вызываемая при изменении значения.",
    },
    className: {
      control: "text",
      description: "Дополнительный CSS-класс для настройки стилей компонента.",
    },
    id: {
      control: "text",
      description: "Уникальный идентификатор для связывания компонента с текстом в теге label.",
    },
  },
  args: {
    disabled: false,
    orientation: "horizontal",
    value: "",
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>("");

    console.log("Selected value:", value);
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
