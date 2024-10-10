import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./index";
import FlagRussia from "@/shared/assets/icons/components/FlagRussia";
import FlagUnitedKingdom from "@/shared/assets/icons/components/FlagUnitedKingdom";

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

export const Small: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger size="small">
        <SelectValue placeholder="100" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
        <SelectItem value="40">40</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SmallBorderColor: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger size="small">
        <SelectValue placeholder="100" />
      </SelectTrigger>
      <SelectContent className="border-dark-300 text-red-500">
        <SelectItem className="data-[highlighted]:text-light-100" value="10">
          10
        </SelectItem>
        <SelectItem className="data-[highlighted]:text-light-100" value="20">
          20
        </SelectItem>
        <SelectItem className="data-[highlighted]:text-light-100" value="30">
          30
        </SelectItem>
        <SelectItem className="data-[highlighted]:text-light-100" value="40">
          40
        </SelectItem>
        <SelectItem className="data-[highlighted]:text-light-100" value="50">
          50
        </SelectItem>
        <SelectItem className="data-[highlighted]:text-light-100" value="100">
          100
        </SelectItem>
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
