import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupItem } from "@/shared/ui/RadioGroup/RadioGroupItem";
import { useState } from "react";
import { Typography } from "@/shared/ui/Typography";

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
    name: {
      control: "text",
      description: "Имя группы компонента, используется при отправке формы.",
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
        <label htmlFor={args.name} className={"mb-5 text-white"}>
          <Typography.H1>Choose a color</Typography.H1>
          <RadioGroup
            value={value}
            disabled={args.disabled}
            orientation={args.orientation}
            onValueChange={(value) => setValue(value)}
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
        </label>
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
