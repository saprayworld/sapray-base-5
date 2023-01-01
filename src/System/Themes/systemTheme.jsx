import { japaneseThemeDark } from "./Japanese";
import { saprayThemeDark, saprayThemeLight } from "./Sapray"

const defaultTheme = "sapray"

const themeList = [
  { name: "sapray", dark: saprayThemeDark, light: saprayThemeLight },
  { name: "japanese", dark: japaneseThemeDark },
]

/**
 * เพิ่มธีมที่กำหนดเองไปยังระบบ
 * @param {object} themeObject ข้อมูลธีมที่จะเพิ่มในระบบ
 * @param {string} themeObject.name ชื่อของธีม
 * @param {object} themeObject.dark ธีมในโหมดสีมืด
 * @param {object} themeObject.light ธีมในโหมดสีสว่าง
 * @returns สถานะที่บอกว่าเพิ่มได้ไหม
 */
function regisTheme(themeObject) {
  if (themeObject) {
    // ถ้าธีมที่ส่งมาไม่มีโหมดสีใดเลย จะส่งค่า false กลับไป
    if (!themeObject?.dark && !themeObject?.light) return "no-any-color-mode"
    
    // ถ้ามีชื่ออยู่แล้ว จะส่งค่า false กลับไปเลย
    if (findIndexThemeByName(themeObject.name)) return "name-has-existed"

    // เพิ่มธีมไปยัง Theme list
    themeList.push(themeObject)

    // เพิ่มธีมสำเร็จ ส่งค่า true กลับไป
    return "success"
  } else {
    // ไม่มีธีมที่ส่งมา ส่งค่า false กลับไป
    return "no-theme-data"
  }
}

/**
 * หาตำแหน่งของธีมโดยใช้ชื่อธีม
 * @param {string} name ชื่อธีมที่จะหา
 * @returns ตำแหน่งในอาร์เรย์ของธีมที่หา
 */
const findIndexThemeByName = (name) => (themeList.findIndex(item => item.name === name) > -1)

/**
 * ดึงข้อมูลรายการของธีมทั้งหมดที่มีในปัจจุบัน
 * @param {object} optional ตัวเลือกเสริม
 * @param {boolean} optional.withMode แยกตามโหมดสีในแต่ละธีมด้วย
 * @returns รายการทั้งหมดของธีม
 */
function getCurrentThemeList({ withMode = false }) {
  let theme = [];
  themeList.forEach((item) => {
    let _item = { ...item }
    if (withMode) {
      if (_item?.light) theme.push({ name: _item.name, mode: "light" })
      if (_item?.dark) theme.push({ name: _item.name, mode: "dark" })
    } else {
      theme.push({ name: _item.name })
    }
  })
  return theme
}

/**
 * สลับไปยังธีมที่สอดคล้องกับข้อมูลที่ส่งมา หากไม่ตรงกับเงื่อนไขใดๆ จะส่งรูปแบบเริ่มต้นกลับไป
 * @param {('dark' | 'light')} mode โหมดของสีที่ต้องการ
 * @param {string} name ชื่อของธีมที่ต้องการ
 * @returns รูปแบบของธีมที่ตรงเงื่อนไข
 */
const switchTheme = (mode, name = "sapray") => {
  const theme = themeList.find(item => item.name === name)

  if (theme) {
    if (theme[mode]) return theme[mode]
    else return (mode === "light") ? theme.dark : theme.light
  } else {
    return switchTheme(mode, defaultTheme)
  }
}

export const systemTheme = {
  switchTheme,
  getCurrentThemeList,
  regisTheme,
}
