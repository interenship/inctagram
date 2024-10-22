import type { Meta, StoryObj } from "@storybook/react";

import { ScrollBar } from "@/shared/ui/Scrollbar/Scrollbar";

const meta: Meta<typeof ScrollBar> = {
  component: ScrollBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScrollBar>;

export const VerticalScroll: Story = {
  render: () => (
    <div className="h-[200px] w-[400px] rounded border-2 bg-light-300 p-[5px] text-black">
      <ScrollBar>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque et, eveniet
          facilis impedit inventore iste, itaque molestias qui quibusdam repellendus sequi sunt.
          Aut, cum, temporibus? Amet eos et quidem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Facere provident quidem unde veritatis? Autem consectetur, debitis
          distinctio dolore eos illum magni necessitatibus nemo nobis numquam provident sequi
          temporibus ullam, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores debitis dolorem, facere illum incidunt molestias natus neque optio quaerat quos
          sequi similique sit temporibus ut velit voluptas voluptatibus. Fugit, vel? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Cupiditate expedita iure laboriosam,
          molestias quae quis vero voluptatum? Asperiores, pariatur, temporibus. Dignissimos dolores
          ducimus libero numquam qui quos tenetur, vel voluptate?
        </div>
      </ScrollBar>
    </div>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <div className="w-[200px] rounded border-2 bg-light-300 p-[5px] text-black">
      <ScrollBar>
        <div className="w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque et, eveniet
          facilis impedit inventore iste, itaque molestias qui quibusdam repellendus sequi sunt.
          Aut, cum, temporibus? Amet eos et quidem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Facere provident quidem unde veritatis? Autem consectetur, debitis
          distinctio dolore eos illum magni necessitatibus nemo nobis numquam provident sequi
          temporibus ullam, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores debitis dolorem, facere illum incidunt molestias natus neque optio quaerat quos
          sequi similique sit temporibus ut velit voluptas voluptatibus. Fugit, vel? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Cupiditate expedita iure laboriosam,
          molestias quae quis vero voluptatum? Asperiores, pariatur, temporibus. Dignissimos dolores
          ducimus libero numquam qui quos tenetur, vel voluptate?
        </div>
      </ScrollBar>
    </div>
  ),
};
