import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, Button, Container, IconButton, TextField, Typography, useScrollTrigger, useTheme } from '@mui/material';
import ElevateAppBar from './Components/Appbar/ElevateAppBar';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useBaseSetting } from 'System/BaseSetting';
import DemoPage from './Components/DemoPage';
import { systemTheme } from 'System/Themes';
import { useLanguage } from 'System/Language/systemLanguage';

const appThaiLang = {
  lang: "th-TH",
  name: "ไทย",
  strings: [
    { id: "home_current_theme_using", value: "รูปแบบธีมที่กำลังใช้" },
    { id: "home_theme_name", value: "ชื่อธีม:" },
    { id: "home_color_mode", value: "โหมดสี:" },
    { id: "home_theme_list_detail", value: "ข้อมูลรายการธีม" },
    { id: "home_setting_detail", value: "ข้อมูลการตั้งค่า" },
    { id: "home_test_lang_message", value: "นี้คือข้อความทดสอบ" },
  ]
}

const appEngLang = {
  lang: "en-US",
  name: "english",
  strings: [
    { id: "home_current_theme_using", value: "Current theme is using" },
    { id: "home_theme_name", value: "Theme name:" },
    { id: "home_color_mode", value: "Color mode:" },
    { id: "home_theme_list_detail", value: "Theme list detail" },
    { id: "home_setting_detail", value: "Setting detail" },
    { id: "home_test_lang_message", value: "This is a test message" },
  ]
}

export default function Home(props) {
  // const {
  //   // message,
  // } = props;
  const baseSetting = useBaseSetting()
  const language = useLanguage(appEngLang, baseSetting.getBaseSetting.lang);
  // const [lang, setLang, regisLang, getStringObject, getString] = useLanguage(appEngLang);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  const colorModeList = [
    { labal: 'ตามอุปกรณ์', value: "onDevice" },
    { labal: 'มืด', value: "dark" },
    { labal: 'สว่าง', value: "light" },
  ]

  const [themeList, setThemeList] = React.useState([]);

  function addThemeToList() {
    let theme = []
    systemTheme.getCurrentThemeList({}).forEach((item) => {
      theme.push({ labal: item.name, value: item.name })
    })
    setThemeList(theme)
  }

  const langList = [
    { labal: 'ไทย', value: "th-TH" },
    { labal: 'english', value: "en-US" },
  ]

  // const [langList, setLangList] = React.useState([]);

  // function addLangToList() {
  //   // let _lang = []
  //   // language.getCurrentLangList({}).forEach((item) => {
  //   //   _lang.push({ labal: item.name, value: item.lang })
  //   // })
  //   // setLangList(_lang)
  // }

  React.useEffect(() => {
    // console.log("เพิ่มภาษา");
    console.log(language.regisLang(appThaiLang));
    console.log(language.getStringObject());
    // console.log(language.lang);
    // console.log(language.getString("home_test_lang_message"));
    // console.log("เปลี่ยนภาษาเป็นไทย");
    language.setLang("th-TH")
    console.log(language.getStringObject());
    // console.log(language.lang);
    // console.log(language.getString("home_test_lang_message"));
    // console.log(language.getLang("123"));
    addThemeToList()
    return () => {

    }
  }, [])

  // React.useEffect(() => {
  //   console.log(language.getStringObject());
  //   language.setLang("th-TH")
  //   return () => {
      
  //   }
  // }, [baseSetting])

  // console.log(language);

  // console.log(baseSetting);

  return (
    <>
      <ElevateAppBar
        menu={<>
          <div>sapray-base-5</div>
        </>
        }
      />
      <Container>
        <p>EventTriggerScroll By Function: {trigger ? "True" : "False"}</p>
        {/* <Typography>เลือกธีม</Typography> */}
        <Autocomplete
          disableClearable
          disablePortal
          value={themeList.find((item) => baseSetting.currentThemeName === item.value) || null}
          options={themeList}
          // loading={themeList.length < 1}
          getOptionLabel={(item) => `${item.labal}`}
          onChange={(e, item) => baseSetting.setTheme({ themeName: item.value })}
          isOptionEqualToValue={(list, currentValue) => list.value === currentValue.value}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="เลือกธีม" />}
        />
        <br />
        <Autocomplete
          disableClearable
          disablePortal
          value={colorModeList.find((item) => baseSetting.getBaseSetting.themeType === item.value)}
          options={colorModeList}
          getOptionLabel={(item) => `${item.labal}`}
          onChange={(e, item) => baseSetting.setColorMode(item.value)}
          isOptionEqualToValue={(list, currentValue) => list.value === currentValue.value}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="เลือกโหมดสี" />}
        />
        <br />
        <Typography>รูปแบบธีมที่กำลังใช้</Typography>
        <Typography>ชื่อธีม: {baseSetting.currentThemeName}</Typography>
        <Typography>โหมดสี: {baseSetting.currentColorMode}</Typography>
        <br />

        <Autocomplete
          disableClearable
          disablePortal
          value={langList.find((item) => baseSetting.getBaseSetting.lang === item.value)}
          options={langList}
          getOptionLabel={(item) => `${item.labal}`}
          onChange={(e, item) => baseSetting.setLang({ lang: item.value })}
          isOptionEqualToValue={(list, currentValue) => list.value === currentValue.value}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="เลือกภาษา" />}
        />
        <br />

        <Typography>ภาษาที่กำลังใช้</Typography>
        <Typography>ภาษา: {baseSetting.getBaseSetting.lang}</Typography>
        <Typography>testLang: {`${language.getString("home_test_lang_message")}`}</Typography>
        <br />
        <Button sx={{ ml: 1 }} onClick={() => console.log(systemTheme.getCurrentThemeList({ withMode: true }))} color="inherit">
          ข้อมูลรายการธีม
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(baseSetting.getBaseSetting)} color="inherit">
          ข้อมูลการตั้งค่า
        </Button>
        {/* <Button sx={{ ml: 1 }} onClick={() => console.log(systemLanguage.getCurrentLangList())} color="inherit">
          ข้อมูลรายการภาษา
        </Button> */}
        <Button sx={{ ml: 1 }} onClick={() => console.log(language.getStringObject())} color="inherit">
          ข้อมูลภาษา
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(language.regisLang(appThaiLang))} color="inherit">
          SET
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(language.lang)} color="inherit">
          INFO
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(language.setLang("th-TH"))} color="inherit">
          TH
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(language.setLang("en-US"))} color="inherit">
          EN
        </Button>
        <hr />
        <DemoPage />
        <br />
        <br />
        {/* <br />
        <br />
        {[...new Array(30)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')} */}
      </Container>
    </>
  )
}

Home.propTypes = {
  message: PropTypes.string,
}

Home.defaultProps = {
  message: 'Hello World!!!',
}