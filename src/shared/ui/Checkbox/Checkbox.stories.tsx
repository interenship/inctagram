import { cn } from "@/features/utils/cn";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Typography } from "@/shared/ui/Typography";
import { Label } from "@radix-ui/react-select";
import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Переводит состояние чекбокса в выбран или не выбран",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Отключает компонент, делая его недоступным для взаимодействия.",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const idForCheckbox = "checkbox";

const labelText = "Check-box";

export const Default: Story = {
  render: () => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return (
      <div className={cn("flex flex-col gap-2")}>
        <Checkbox checked={checkedValue} onCheckedChange={getCheckedValue} />
        <Typography.MEDIUM14 className={"text-light-100"}>
          Checked: {checkedValue ? "true" : "false"}
        </Typography.MEDIUM14>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    disabled: true,
  },
  render: ({ disabled }) => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return (
      <div className={cn("flex items-center gap-2 max-w-max")}>
        <Checkbox id={idForCheckbox} checked={checkedValue} onCheckedChange={getCheckedValue} />
        <Label id={idForCheckbox}>
          <Typography.REGULAR14 className={"text-light-100"}>{labelText}</Typography.REGULAR14>
        </Label>
      </div>
    );
  },
};

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
  },
  render: ({ disabled }) => {
    return (
      <div className={cn("flex items-center gap-2 max-w-max")}>
        <Checkbox disabled={disabled} id={idForCheckbox} />
        <Typography.REGULAR14 disabled as={"label"} htmlFor={idForCheckbox} className={cn("text-light-100")}>
          {labelText}
        </Typography.REGULAR14>
        <Typography.LARGE disabled className={"text-lime-300"}>
          text
        </Typography.LARGE>
      </div>
    );
  },
};

export const DisabledCheckedWithLabel: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
