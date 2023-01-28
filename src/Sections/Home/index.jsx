import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, Button, Container, IconButton, TextField, Typography, useScrollTrigger, useTheme } from '@mui/material';
import ElevateAppBar from './Components/Appbar/ElevateAppBar';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useBaseSetting } from 'System/BaseSetting';
import DemoPage from './Components/DemoPage';
import { systemTheme } from 'System/Themes';


export default function Home(props) {
  // const {
  //   // message,
  // } = props;

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
    addThemeToList()
    return () => {

    }
  }, [])

  // console.log(baseSetting);

  return (
    <>
      <ElevateAppBar
        menu={<>
          <div>{baseSetting.currentColorMode}</div>
          <Button sx={{ ml: 1 }} onClick={() => console.log(baseSetting.getBaseSetting)} color="inherit">
            ข้อมูลตั้งค่าโหมดสี
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("onDevice")} color="inherit">
            อุปกรณ์
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("dark")} color="inherit">
            มืด
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("light")} color="inherit">
            สว่าง
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setTheme({ themeName: "japanese" })} color="inherit">
            japanese
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setTheme({ themeName: "sapray" })} color="inherit">
            sapray
          </Button>

          <IconButton sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("light")} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("dark")} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
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
        <Button sx={{ ml: 1 }} onClick={() => console.log(systemTheme.getCurrentThemeList({ withMode: true }))} color="inherit">
          ข้อมูลรายการธีม
        </Button>
        <hr />
        <DemoPage />
        <br />
        <br />
        <br />
        <br />
        {[...new Array(30)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
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