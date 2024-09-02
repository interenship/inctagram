import type { Preview } from "@storybook/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "../src/app/styles/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "twitter",
      values: [
        {
          name: "white",
          value: "#FFF",
        },
        {
          name: "dark",
          value: "#000",
        },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
