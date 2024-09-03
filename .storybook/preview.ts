import type { Preview } from "@storybook/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "../src/app/styles/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000",
        },
      ],
    },
<<<<<<< HEAD

=======
>>>>>>> dev
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
