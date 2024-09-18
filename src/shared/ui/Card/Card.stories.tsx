import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./index";
import { Typography } from "@/shared/ui/Typography";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/shared/ui/Select";
import { SelectItem } from "@/shared/ui/Select";
import { Button } from "@/shared/ui/Button";

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
        <CardTitle className={"mx-auto"}>
          <Typography.H1>Sign In</Typography.H1>
        </CardTitle>
        <CardDescription className={"mx-auto"}>
          Card Description
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework">Framework</label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className={"w-full bg-gray-500"}
                >
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={"flex-col"}>
        <p>Card Footer</p>
        <div className={"w-full flex justify-between"}>
          <Button>Cancel</Button>
          <Button>Deploy</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};
