import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";
import { RadioGroupItem } from "./index";

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
      description:
        "Отключает компонент, делая его недоступным для взаимодействия.",
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
      description:
        "Функция обратного вызова, вызываемая при изменении значения.",
    },
    className: {
      control: "text",
      description: "Дополнительный CSS-класс для настройки стилей компонента.",
    },
    id: {
      control: "text",
      description:
        "Уникальный идентификатор для связывания компонента с текстом в теге label.",
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
  render: (args) => {
    const [value, setValue] = useState<string>("");

    console.log("Selected value:", value);
    return (
      <>
        <RadioGroup
          value={value}
          disabled={args.disabled}
          orientation={args.orientation}
          onValueChange={(newValue) => setValue(newValue)}
        >
          {valueExamples.map((option) => (
            <div key={option.value}>
              <RadioGroupItem
                disabled={args?.disabled}
                labelText={option.label}
                value={option.value}
                id={option.value}
              />
            </div>
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
