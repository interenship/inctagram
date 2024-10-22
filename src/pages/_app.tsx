import "@/app/styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
