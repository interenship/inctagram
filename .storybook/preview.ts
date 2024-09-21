import type { Preview } from "@storybook/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "../src/app/styles/globals.css";

const preview: Preview = {
  parameters: {
    brandTitle: 'Inctagram',
    backgrounds: {
      default: "dark",
      values: [
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
    options: {
      storySort: {
        order: ['Getting started', 'Design System'],
      },

    }
  },
};

export default preview;
