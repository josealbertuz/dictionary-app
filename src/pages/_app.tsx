import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter, Inconsolata, Lora } from "next/font/google";
import { darkTheme, generateGlobalStyles, globalCss } from "stitches.config";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--inter-font",
});

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--inconsolata-font",
});

const lora = Lora({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--lora-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      {generateGlobalStyles({ lora, inter, inconsolata })}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
