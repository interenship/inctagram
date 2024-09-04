import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectTrigger, SelectValue, SelectContent } from "./index";
import FlagRussia from "../../../../public/icons/Flag-Russia";
import FlagUnitedKingdom from "../../../../public/icons/FlagUnitedKingdom";
import SelectItem from "@/shared/ui/Select/SelectItem";

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
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};

export const WithRussianFlagIcon: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]" IconComponent={FlagRussia}>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};

export const WithUKFlagIcon: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]" IconComponent={FlagUnitedKingdom}>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};
