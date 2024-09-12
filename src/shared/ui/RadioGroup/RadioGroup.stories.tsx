import type {Meta, StoryObj} from "@storybook/react";
import {RadioGroup, RadioGroupItem} from "./RadioGroup";
import {Typography} from "../Typography";
import {cn} from "@/features/utils/cn";

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
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one"/>
        <Typography.REGULAR14 as="label"
                              htmlFor="option-one"
                              className={cn(args.disabled ? "text-light-900 cursor-not-allowed" : "text-light-100")}
        >
          RadioGroup
        </Typography.REGULAR14>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two"/>
        <Typography.REGULAR14
          as="label"
          htmlFor="option-two"
          className={cn(args.disabled ? "text-light-900" : "text-light-100")}
        >
          RadioGroup
        </Typography.REGULAR14>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one"/>
        <Typography.REGULAR14 as="label"
                              htmlFor="option-one"
                              className={cn(args.disabled ? "text-light-900" : "text-light-100")}
        >
          RadioGroup
        </Typography.REGULAR14>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two"/>
        <Typography.REGULAR14
          as="label"
          htmlFor="option-two"
          className={cn(args.disabled ? "text-light-900" : "text-light-100")}
        >
          RadioGroup
        </Typography.REGULAR14>
      </div>
    </RadioGroup>
  ),
  args: {
    disabled: true,
  },
};
