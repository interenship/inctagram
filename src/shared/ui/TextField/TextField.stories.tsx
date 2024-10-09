import { Meta, StoryObj } from "@storybook/react";
import { TextField, TextFieldProps } from "@/shared/ui/TextField/TextField";
import { ChangeEvent, useState } from "react";
import { cn } from "@/features/utils/cn";
import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    id: "forInput",
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
  render: (args) => {
    return (
      <>
        <Label
          disabled={args.disabled}
          htmlFor={args.id}
          className={cn("text-white")}
        >
          <Typography.REGULAR16>Text input</Typography.REGULAR16>
        </Label>
        <TextFieldWrapper {...args} />
      </>
    );
  },
};

export const TextInputWithoutLabel: Story = {
  render: (args) => <TextFieldWrapper {...args} />,
};

export const TextInputError: Story = {
  args: {
    error: "Error",
  },

  render: (args) => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography.REGULAR16>Text input with error</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const TextInputDisabled: Story = {
  args: {
    disabled: true,
  },

  render: (args) => (
    <>
      <Label
        disabled={args.disabled}
        htmlFor={args.id}
        className={cn("text-white")}
      >
        <Typography.REGULAR16>Text input disabled</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputWithLabel: Story = {
  args: {
    type: "search",
  },

  render: (args) => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography.REGULAR16>Search</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputWithoutLabel: Story = {
  args: {
    type: "search",
  },

  render: (args) => <TextFieldWrapper {...args} />,
};

export const SearchInputError: Story = {
  args: {
    type: "search",
    error: "Error",
  },

  render: (args) => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography.REGULAR16>Search</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputDisabled: Story = {
  args: {
    type: "search",
    disabled: true,
  },

  render: (args) => (
    <>
      <Label
        disabled={args.disabled}
        htmlFor={args.id}
        className={cn("text-white")}
      >
        <Typography.REGULAR16>Search input disabled</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInputWithLabel: Story = {
  args: {
    type: "password",
  },

  render: (args) => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography.REGULAR16>Password</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInputWithoutLabel: Story = {
  args: {
    type: "password",
  },

  render: (args) => <TextFieldWrapper {...args} />,
};

export const PasswordInputError: Story = {
  args: {
    type: "password",
    error: "Error",
  },

  render: (args) => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography.REGULAR16>Password Error</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInputDisabled: Story = {
  args: {
    type: "password",
    disabled: true,
  },

  render: (args) => (
    <>
      <Label
        disabled={args.disabled}
        htmlFor="textfield"
        className={cn("text-white")}
      >
        <Typography.REGULAR16>Password input disabled</Typography.REGULAR16>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};
