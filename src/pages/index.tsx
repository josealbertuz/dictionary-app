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
      <button onClick={onChangeTheme}>{resolvedTheme}</button>
      <Text>Hello world!</Text>
    </>
  );
}
