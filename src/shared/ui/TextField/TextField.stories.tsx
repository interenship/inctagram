import { Meta, StoryObj } from "@storybook/react";
import { TextField, TextFieldProps } from "@/shared/ui/TextField/TextField";
import { ChangeEvent, useState } from "react";
import { cn } from "@/features/utils/cn";
import { Label } from "@/shared/ui/Label";

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

const TextFieldWrapper = (props: TextFieldProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <TextField {...props} value={value} onClear={onClear} onChange={onChange} />
  );
};

export const TextInputWithLabel: Story = {
  render: (args) => (
    <>
      <Label htmlFor="textfield" className={cn("text-white")}>
        Text input
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const TextInputWithoutLabel: Story = {
  render: (args) => (
    <>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const TextInputError: Story = {
  args: {
    error: "Error",
  },

  render: (args) => (
    <>
      <Label htmlFor="textfield" className={cn("text-white")}>
        Text input with error
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInput: Story = {
  args: {
    type: "search",
  },

  render: (args) => (
    <>
      <Label htmlFor="textfield" className={cn("text-white")}>
        Search
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputError: Story = {
  args: {
    type: "search",
    error: "Error",
  },

  render: (args) => (
    <>
      <Label htmlFor="textfield" className={cn("text-white")}>
        Search
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInput: Story = {
  args: {
    type: "password",
  },

  render: (args) => (
    <>
      <Label htmlFor="textfield" className={cn("text-white")}>
        Password
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInputError: Story = {
  args: {
    type: "password",
    error: "Error",
  },

  render: (args) => (
    <>
      <Label htmlFor="textfield" className={cn("text-white")}>
        Password
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};
