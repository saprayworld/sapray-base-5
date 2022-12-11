import { japaneseThemeDark } from "./Japanese";
import { saprayThemeDark, saprayThemeLight } from "./Sapray"

export const switchTheme = (mode, name = "sapray") => {

  switch (name) {
    case "sapray":
      return mode === "light" ? saprayThemeLight : saprayThemeDark
  
    case "japanese":
      return japaneseThemeDark
  
    default:
      return {}
  }
}
