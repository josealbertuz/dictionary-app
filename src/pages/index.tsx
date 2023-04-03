import { Switch } from "@components/Switch";
import { Text } from "@components/Text";
import { useTheme } from "next-themes";

export default function Home() {

  const {setTheme, resolvedTheme } = useTheme()

  const onChangeTheme = () => {
    const theme = resolvedTheme === 'light' ? 'dark' : 'light'

    setTheme(theme)
  }

  return (
    <>
      <Switch onClick={onChangeTheme} aria-label="change-theme" />
      <Text>Hello world!</Text>
    </>
  );
}
