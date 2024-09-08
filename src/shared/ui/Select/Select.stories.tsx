import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./index";
import FlagRussia from "../../../../public/icons/Flag-Russia";
import FlagUnitedKingdom from "../../../../public/icons/FlagUnitedKingdom";

const meta: Meta<typeof Select> = {
  component: Select,
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
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Test" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Select-box">Select-box</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="def">Def</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select-box" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Select-box">Select-box</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="def">Def</SelectItem>
      </SelectContent>
    </Select>
  ),
  args: {
    disabled: true,
  },
};

export const WithRussianFlagIcon: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]" IconComponent={FlagRussia}>
        <SelectValue placeholder="Select-box" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Select-box">Select-box</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="def">Def</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithUKFlagIcon: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]" IconComponent={FlagUnitedKingdom}>
        <SelectValue placeholder="Select-box" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Select-box">Select-box</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="def">Def</SelectItem>
      </SelectContent>
    </Select>
  ),
};
