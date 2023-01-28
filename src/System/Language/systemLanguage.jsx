import React from "react";

export function useLanguage(defaultLangObject, settingLang) {

  const _defaultLang = React.useRef();
  _defaultLang.current = null;
  
  const [langList] = React.useState([]);
  const [lang, setLangData] = React.useState({ ...defaultLangObject });

  const setLang = React.useCallback((_lang) => {
    var newLang = langList.find(item => item.lang === _lang)
    if (!newLang) newLang = langList.find(item => item.lang === _defaultLang.current)
    console.log(_lang);
    setLangData(newLang)
  }, [setLangData, langList])

  /**
   * หาตำแหน่งของข้อมูลภาษา
   * @param {string} name ชื่อภาษาที่จะหา
   * @returns ตำแหน่งในอาร์เรย์ของภาษาที่หา
   */
  const findIndexThemeByName = React.useCallback((lang) => {
    return (langList.findIndex(item => item.lang === lang) > -1)
  }, [langList])
  // const findIndexThemeByName = (lang) => (langList.findIndex(item => item.lang === lang) > -1)

  const regisLang = React.useCallback((langObject) => {
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
    _defaultLang.current = langList[0].lang

    // เพิ่มภาษาสำเร็จ ส่งค่า success กลับไป
    return "success"
  }, [findIndexThemeByName, langList])

  const init = React.useCallback(() => {
    regisLang(defaultLangObject)
    setLangData(defaultLangObject)
  }, [defaultLangObject, regisLang])

  React.useEffect(() => {
    init()
    return () => {

    }
  }, [init])

  React.useEffect(() => {
    // console.log("set to:", settingLang);
    setLang(settingLang)
    return () => {

    }
  }, [setLang, settingLang])

  function getStringObject() {
    return langList
  }

  function getString(id) {
    var string = lang.strings.find(item => item.id === id).value

    if (!string) string = id

    return string
  }

  React.useEffect(() => {
    console.log(lang);
    return () => {

    }
  }, [lang])

  // return [lang, setLang, regisLang]
  return { regisLang, lang, setLang, getStringObject, getString }
}

