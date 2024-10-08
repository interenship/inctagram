import { Pagination } from "@/shared/ui/Pagination";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    onPageChange: () => {},
    totalCount: 150,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
  },
};

export const Primary: Story = {
  args: {
    onPageChange: () => {},
    totalCount: 150,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
  },
  render: ({ currentPage, onPageChange, ...args }) => {
    const [state, setState] = useState(currentPage);

    const handlePage = (value: number) => {
      setState(value);
    };

    return <Pagination currentPage={state} onPageChange={handlePage} {...args} />;
  },
};
