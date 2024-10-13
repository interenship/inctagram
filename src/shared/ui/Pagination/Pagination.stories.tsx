import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Pagination as PaginationComponent } from "@/shared/ui/Pagination";

const meta = {
  args: {
    onPageChange: () => {},
    totalCount: 150,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
  },
  component: PaginationComponent,
  tags: ["autodocs"],
  title: "Ui/Pagination",
} satisfies Meta<typeof PaginationComponent>;

export default meta;

type Story = StoryObj<typeof PaginationComponent>;

export const Pagination: Story = {
  render: ({ currentPage, onPageChange, ...args }) => {
    const [state, setState] = useState(currentPage);

    const handlePage = (value: number) => {
      setState(value);
    };

    return <PaginationComponent currentPage={state} onPageChange={handlePage} {...args} />;
  },
};
