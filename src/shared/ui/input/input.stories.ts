import {Meta, StoryObj} from "@storybook/react";
import {Input} from "@/shared/ui/input/input";

const meta = {
    component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const TextInput: Story = {
    args: {
        errorText: "Error"
    }
}

export const PasswordInput: Story = {
    args: {
        type: "password",
        eyeIcon: true
    }
}

export const SearchInput: Story = {
    args: {
        searchIcon: true,
    }
}
