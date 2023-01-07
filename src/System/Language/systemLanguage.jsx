
// class systemLanguage { }

var _defaultLang = null
const _useLang = "en-US"

const langList = [];

// const a = {
//   lang: "th-TH", name: "ไทย", strings: [
//     { id: "app_name", value: "Sapray App" },
//     { id: "welcome_text", value: "ยินดีต้อนรับ" },
//   ]
// }

function regisLang(langObject) {
  // ถ้าไม่มีข้อมูลพารามิเตอร์ใดส่งเข้ามาเลย
  if (!langObject?.lang || !langObject?.name || !langObject?.strings) {
    if (!langObject?.lang && !langObject?.name && !langObject?.strings) return "no-lang-data"
    else if (!langObject?.lang) return "no-lang"
    else if (!langObject?.name) return "no-name"
    else if (!langObject?.strings) return "no-string-array"
    else return "unknow-error"
  }

  // ถ้ามีชื่ออยู่แล้ว จะส่งค่า name-has-existed กลับไปเลย
  if (findIndexThemeByName(langObject?.lang)) return "lang-has-existed"

  // เพิ่มภาษาไปยัง Lang list
  langList.push(langObject)

  // ตั้งค่าภาษาเริ่มต้น
  _defaultLang = langList[0].lang

  // เพิ่มภาษาสำเร็จ ส่งค่า success กลับไป
  return "success"
}

/**
 * หาตำแหน่งของข้อมูลภาษา
 * @param {string} name ชื่อภาษาที่จะหา
 * @returns ตำแหน่งในอาร์เรย์ของภาษาที่หา
 */
const findIndexThemeByName = (lang) => (langList.findIndex(item => item.lang === lang) > -1)

function getCurrentLangList() {
  let _lang = [];
  langList.forEach((item) => {
    let _item = { ...item }
    _lang.push({ name: _item.name })
  })
  return _lang
}

function getString(id) {
  var lang = langList.find(item => item.lang === _useLang)

  if (!lang) lang = langList.find(item => item.lang === _defaultLang)

  console.log(lang.strings);

  var string = lang.strings.find(item => item.id === id).value

  if (!string) string = id

  return string
}

function getStringObject() {
  var langUse = langList.find(item => item.lang === _useLang)
  var langDefault = langList.find(item => item.lang === _defaultLang)

  return { langUse: langUse, langDefault: langDefault }
}

export class SystemLanguage {
  prop1 = "prop1";

  constructor() {
    console.log("Constructor");
  }

  setProp1(string) {
    this.prop1 = string
  }
}

export const systemLanguage = {
  regisLang,
  getCurrentLangList,
  getString,
  getStringObject,
}

