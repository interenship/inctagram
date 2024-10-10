import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";
import { Typography } from "@/shared/ui/Typography";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./index";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle className="mx-auto">
          <Typography.H1>Card Tittle</Typography.H1>
        </CardTitle>

        <CardDescription className="mx-auto">
          <Typography.BOLD14>Card Description</Typography.BOLD14>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Typography.H2>Card Content</Typography.H2>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Typography.H3>Framework</Typography.H3>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper" className="w-full bg-gray-500">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p>Card Footer</p>
        <div className="flex w-full justify-between">
          <Button>Cancel</Button>
          <Button>Deploy</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};
