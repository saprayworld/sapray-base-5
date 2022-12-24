import { japaneseThemeDark } from "./Japanese";
import { saprayThemeDark, saprayThemeLight } from "./Sapray"

export const switchTheme = (mode, name = "sapray") => {
  // console.log("สลับธีม:", name, mode);
  switch (name) {
    case "sapray":
      return mode === "light" ? saprayThemeLight : saprayThemeDark
  
    case "japanese":
      return japaneseThemeDark
  
    default:
      return mode === "light" ? saprayThemeLight : saprayThemeDark
  }
}
