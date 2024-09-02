import type { Preview } from "@storybook/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
