import { Meta, StoryObj } from "@storybook/react";
import { TextField, TextFieldProps } from "@/shared/ui/TextField/TextField";
import { ChangeEvent, useState } from "react";
import { cn } from "@/features/utils/cn";

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
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

export const SearchInputWrapperWithLabel: Story = {
  args: {
    type: "search",
    disabled: false,
  },

  render: (args) => (
    <>
      <label htmlFor="textfield" className={cn("text-white")}>
        Label
      </label>
      Label
      <TextFieldWrapper {...args} />
    </>
  ),
};

export const SearchInputWithLabel: Story = {
  args: {
    type: "search",
    disabled: false,
  },

  render: (args) => {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <>
        <label htmlFor="textfield" className={cn("text-white")}>
          Label
        </label>
        <TextField
          {...args}
          value={value}
          onClear={onClear}
          onChange={onChange}
        />
      </>
    );
  },
};

export const SearchInputWithoutLabel: Story = {
  args: {
    type: "search",
    disabled: false,
  },

  render: (args) => {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <>
        <TextField
          {...args}
          value={value}
          onClear={onClear}
          onChange={onChange}
        />
      </>
    );
  },
};

export const PasswordInputWithLabel: Story = {
  args: {
    type: "password",
    disabled: false,
  },

  render: (args) => {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <>
        <label htmlFor="textfield" className={cn("text-white")}>
          Label
        </label>
        <TextField
          {...args}
          value={value}
          onClear={onClear}
          onChange={onChange}
        />
      </>
    );
  },
};

export const TextInputWithoutLabel: Story = {
  args: {
    type: "text",
    disabled: false,
  },

  render: (args) => {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <>
        <TextField
          {...args}
          value={value}
          onClear={onClear}
          onChange={onChange}
        />
      </>
    );
  },
};

export const TextInputWithLabel: Story = {
  args: {
    type: "text",
    disabled: false,
  },

  render: (args) => {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <>
        <label htmlFor="textfield" className={cn("text-white")}>
          Label
        </label>
        <TextField
          {...args}
          value={value}
          onClear={onClear}
          onChange={onChange}
        />
      </>
    );
  },
};
