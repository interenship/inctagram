import type { Meta, StoryObj } from "@storybook/react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

import { Select } from "./select";
import FlagRussia from "../../../../public/icons/Flag-Russia";
import FlagUnitedKingdom from "../../../../public/icons/FlagUnitedKingdom";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box<">Select-box</SelectItem>
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
          <SelectItem value="Select-box<">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};

export const WithIRuIcon: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]" IconComponent={FlagRussia}>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box<">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};

export const WithUkIcon: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]" IconComponent={FlagUnitedKingdom}>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box<">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </>
    ),
  },
};
