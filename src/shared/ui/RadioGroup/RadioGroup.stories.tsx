import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupItem } from "@/shared/ui/RadioGroup/RadioGroupItem";

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
      directionColumn: "Расположение элементов, горизонтально или вертикально.",
    },
  },
  args: {
    disabled: false,
    directionColumn: false,
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
export const DirectionColumn: Story = {
  args: {
    disabled: false,
    directionColumn: true,
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
      <RadioGroupItem
        value="option-three"
        id="option-three"
        labelText="RadioGroup"
      />
    </RadioGroup>
  ),
};
