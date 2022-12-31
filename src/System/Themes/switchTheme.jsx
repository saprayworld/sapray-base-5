import { japaneseThemeDark } from "./Japanese";
import { saprayThemeDark, saprayThemeLight } from "./Sapray"

const defaultTheme = "sapray"

export const switchTheme = (mode, name = "sapray") => {
  console.log("สลับธีม:", name, mode);
  switch (name) {
    case "default":
      return switchTheme(mode, defaultTheme)

    case "sapray":
      return mode === "light" ? saprayThemeLight : saprayThemeDark

    case "japanese":
      return japaneseThemeDark

    default:
      return switchTheme(mode, defaultTheme)
      // return mode === "light" ? saprayThemeLight : saprayThemeDark
  }
}
