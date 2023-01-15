import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, Button, Container, IconButton, TextField, Typography, useScrollTrigger, useTheme } from '@mui/material';
import ElevateAppBar from './Components/Appbar/ElevateAppBar';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useBaseSetting } from 'System/BaseSetting';
import DemoPage from './Components/DemoPage';
import { systemTheme } from 'System/Themes';
import { systemLanguage, useLanguage } from 'System/Language/systemLanguage';

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

systemLanguage.regisLang(appThaiLang);
systemLanguage.regisLang(appEngLang);

export default function Home(props) {
  // const {
  //   // message,
  // } = props;

  const [lang, getLang] = useLanguage();

  const theme = useTheme();
  const baseSetting = useBaseSetting()

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

  React.useEffect(() => {
    console.log(lang);
    console.log(getLang("123"));
    addThemeToList()
    return () => {

    }
  }, [])

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

        <Typography>ภาษาที่กำลังใช้</Typography>
        <Typography>ภาษา: ไม่ระบุ</Typography>
        {/* <Typography>testLang: {`${systemLanguage.getString("home_test_lang_message")}`}</Typography> */}
        <br />
        <Button sx={{ ml: 1 }} onClick={() => console.log(systemTheme.getCurrentThemeList({ withMode: true }))} color="inherit">
          ข้อมูลรายการธีม
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(baseSetting.getBaseSetting)} color="inherit">
          ข้อมูลการตั้งค่า
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(systemLanguage.getCurrentLangList())} color="inherit">
          ข้อมูลรายการภาษา
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => console.log(systemLanguage.getStringObject())} color="inherit">
          ข้อมูลภาษา
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