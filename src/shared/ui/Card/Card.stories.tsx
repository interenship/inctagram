import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/shared/ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/Select";
import { Typography } from "@/shared/ui/Typography";

import {
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";

const meta = {
  component: CardComponent,
  tags: ["autodocs"],
  title: "Ui/Card",
} satisfies Meta<typeof CardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => (
    <CardComponent>
      <CardHeader>
        <CardTitle className="mx-auto">
          <Typography as={"h1"} variant="h1">
            Card Tittle
          </Typography>
        </CardTitle>

        <CardDescription className="mx-auto">
          <Typography variant="bold14">Card Description</Typography>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Typography variant="h2">Card Content</Typography>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Typography variant="h3">Framework</Typography>
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
    </CardComponent>
  ),
};
