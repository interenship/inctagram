import { Pagination } from "@/shared/ui/Pagination";
import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

const meta = {
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    onPageChange: () => {},
    pageSize: 10,
    siblingCount: 1,
    totalCount: 50,
  },
};
