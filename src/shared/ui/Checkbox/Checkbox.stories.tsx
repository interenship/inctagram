import { cn } from "@/features/utils/cn";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";
import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

const idForCheckbox = "checkbox";

const labelText = "Check-box";

export default meta;

type Story = StoryObj<typeof meta>;

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
  render: () => {
    const [checkedValue, setCheckedValue] = useState(false);

    const getCheckedValue = (value: boolean) => {
      setCheckedValue(value);
    };

    return (
      <div className={cn("flex items-center gap-2 max-w-max")}>
        <Checkbox id={idForCheckbox} checked={checkedValue} onCheckedChange={getCheckedValue} />
        <Label htmlFor={idForCheckbox}>
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
        <Label htmlFor={idForCheckbox} disabled>
          <Typography.REGULAR14 className={"text-light-100"}>{labelText}</Typography.REGULAR14>
        </Label>
      </div>
    );
  },
};
