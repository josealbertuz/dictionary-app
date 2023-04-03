import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter, Inconsolata, Lora } from "next/font/google";
import { darkTheme, globalCss } from "stitches.config";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: '--inter-font'
});

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: '--inconsolata-font'
});

const lora = Lora({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ['latin'],
  variable: '--lora-font'
});

const globalStyles = globalCss({
  ':root': {
    '--inter-font': `${inter.style.fontFamily}`,
    '--inconsolata-font': `${inconsolata.style.fontFamily}`,
    '--lora-font': `${lora.style.fontFamily}`
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: 'light'
      }}
    >
      {
        globalStyles()
      }
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
