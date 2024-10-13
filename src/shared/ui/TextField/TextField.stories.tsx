import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useState } from "react";

import { cn } from "@/features/utils/cn";
import { Label } from "@/shared/ui/Label";
import type { TextFieldProps } from "@/shared/ui/TextField/TextField";
import { TextField } from "@/shared/ui/TextField/TextField";
import { Typography } from "@/shared/ui/Typography";

const meta = {
  component: TextField,
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    id: "forInput",
  },
  tags: ["autodocs"],
  title: "Ui/TextField",
} satisfies Meta<typeof TextField>;

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

  return <TextField {...props} value={value} onClear={onClear} onChange={onChange} />;
};

export const TextInputWithLabel: Story = {
  render: args => {
    return (
      <>
        <Label disabled={args.disabled} htmlFor={args.id} className={cn("text-white")}>
          <Typography variant="regular16">Text input</Typography>
        </Label>
        <TextFieldWrapper {...args} />
      </>
    );
  },
};

export const TextInputWithoutLabel: Story = {
  render: args => <TextFieldWrapper {...args} />,
};

export const TextInputError: Story = {
  args: {
    error: "Error",
  },

  render: args => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Text input with error</Typography>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const TextInputDisabled: Story = {
  args: {
    disabled: true,
  },

  render: args => (
    <>
      <Label disabled={args.disabled} htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Text input disabled</Typography>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputWithLabel: Story = {
  args: {
    type: "search",
  },

  render: args => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Search</Typography>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputWithoutLabel: Story = {
  args: {
    type: "search",
  },

  render: args => <TextFieldWrapper {...args} />,
};

export const SearchInputError: Story = {
  args: {
    type: "search",
    error: "Error",
  },

  render: args => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Search</Typography>
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

  render: args => (
    <>
      <Label disabled={args.disabled} htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Search input disabled</Typography>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInputWithLabel: Story = {
  args: {
    type: "password",
  },

  render: args => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Password</Typography>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const PasswordInputWithoutLabel: Story = {
  args: {
    type: "password",
  },

  render: args => <TextFieldWrapper {...args} />,
};

export const PasswordInputError: Story = {
  args: {
    type: "password",
    error: "Error",
  },

  render: args => (
    <>
      <Label htmlFor={args.id} className={cn("text-white")}>
        <Typography variant="regular16">Password Error</Typography>
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

  render: args => (
    <>
      <Label disabled={args.disabled} htmlFor="textfield" className={cn("text-white")}>
        <Typography variant="regular16">Password input disabled</Typography>
      </Label>
      <TextFieldWrapper {...args} />
    </>
  ),
};
