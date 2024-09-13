import type {Meta, StoryObj} from "@storybook/react";
import {RadioGroup} from "./RadioGroup";
import {RadioGroupItem} from "@/shared/ui/RadioGroup/RadioGroupItem";

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
      <RadioGroupItem
        value="option-one"
        id="option-one"
        labelText="RadioGroup"
      />
      <RadioGroupItem
        value="option-two"
        id="option-two"
        labelText="RadioGroup"
      />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem
        value="option-one"
        id="option-one"
        labelText="RadioGroup"
      />
      <RadioGroupItem
        value="option-two"
        id="option-two"
        labelText="RadioGroup"
      />
    </RadioGroup>
  ),
};
