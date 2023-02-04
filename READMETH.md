# sapray-base-5
โครงโปรเจคสำหรับใช้งาน MUI เวอร์ชั่น 5 โดยสามารถ สลับธีม โหมดสีมืดหรือสว่างได้ และสามารถกำหนดแยกในแต่ละส่วนได้ด้วย 

## การใช้งานระบบเบื้องต้น

### ระบบหลัก
ระบบหลักประกอบไปด้วย การตั้งค่าของระบบ ทำหน้าที่จัดการการตั้งค่าของระบบ และตอบสนองเมื่อการตั้งค่าเหล่านั้นมีการเปลี่ยนแปลง เช่น ธีม โหมดสี หรือภาษา และนี่คือตัวอย่างการใช้งานเบื้องต้น

``` jsx
import * as React from 'react';
import {
  BaseSettingProvider
} from 'System/BaseSetting';
import Button from '@mui/material/Button';

function App() {
  return <BaseSettingProvider>
    <Button variant="contained">Hello World</Button>
  </BaseSettingProvider>
}
```

การทำงานคือ หน้าเว็บจะทำงานตามปกติเลย พร้อมกับใช้ธีมเริ่มต้นของ MUI แต่จะมีการเปลี่ยนโหมดสี ตามค่าเริ่มต้นของอุปกรณ์

### การเปลี่ยนโหมดสี
หากต้องการเปลี่ยนโหมดสี ให้ใช้โค้ดตามตัวอย่างนี้

``` jsx
import * as React from 'react';
import {
  BaseSettingProvider,
  useBaseSetting
} from 'System/BaseSetting';
import Button from '@mui/material/Button';
function App() {
  const baseSetting = useBaseSetting()

  return <BaseSettingProvider>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("dark") }}
    >Dark</Button>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("light") }}
    >Light</Button>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("onDevice") }}
    >On Device</Button>
  </BaseSettingProvider>
}
```

ตามตัวอย่างคือ จะมีการเรียกใช้ ```useBaseSetting``` จากระบบหลัก เพื่อทำการเปลี่ยนแปลงการตั้งค่าของระบบ และตรวจสอบสถานะการตั้งค่าได้ด้วย โดยการเปลี่ยนโหมดสีนั้น จะใช้คำสั่ง ```setColorMode``` ของตัว ```useBaseSetting``` จะมีค่าที่ใช้ได้คือ ```onDevice``` (ค่าเริ่มต้น), ```dark```, ```light``` เมื่อทำการคลิกที่ปุ่ม โหมดสีของหน้าเว็บจะเปลี่ยนไปตามค่าที่ถูกตั้งไว้

### การเปลี่ยนธีม  
``` jsx
import * as React from 'react';
import {
  BaseSettingProvider,
  useBaseSetting
} from 'System/BaseSetting';
import { systemTheme } from 'System/Themes';
import Button from '@mui/material/Button';
function App() {
  const baseSetting = useBaseSetting()

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
  }, [])

  return <BaseSettingProvider>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("dark") }}
    >Dark</Button>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("light") }}
    >Light</Button>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("onDevice") }}
    >On Device</Button>
    <br /><br />
    {
      themeList.map((item, inx) =>
        <Button key={inx} sx={{ ml: 1 }} color="inherit"
          onClick={() => baseSetting.setTheme({ themeName: item.value })}
        >
          {item.value}
        </Button>
      )
    }
  </BaseSettingProvider>
}
```

ตามตัวอย่าง จะทำการสร้าง Button ตามจำนวนธีมที่ถูกตั้งค่าไว้ในระบบ โดยจะถูกเรียกจาก ```getCurrentThemeList``` ของ ```systemTheme``` และเมื่อมีการคลิกที่ปุ่ม ก็จะเรียกใช้ฟังก์ชั่น ```setTheme``` ของ ```useBaseSetting``` เพื่อเปลี่ยนการตั้งค่าของธีม และหน้าเว็บจะเปลี่ยนไปตามค่าที่ถูกตั้งไว้นั้นเอง

### การกำหนดธีมเอง
ในระบบนี้ เราสามารถสร้างธีมที่กำหนดเองได้ เพื่อนำไปใช้กับระบบเว็บของเรา ตามตัวอย่าง เราจะใช้โค้ดใน ```Theme/Custom``` ของโปรเจคนี้ ซึ่งเป็นตัวอย่างการสร้างธีมเองขึ้นมา และเราสามารถสร้างใหม่โดยใช้โค้ดที่ว่านี้เป็นตัวอ้างอิง

``` jsx
// import custom theme
import { customThemeLight } from 'Theme/Custom';

// Add custom theme to system
systemTheme.regisTheme({ name: "custom", light: customThemeLight })
```

โค้ดทั้งหมด
``` jsx
import * as React from 'react';
import Button from '@mui/material/Button';
import {
  BaseSettingProvider,
  useBaseSetting
} from 'System/BaseSetting';
import { systemTheme } from 'System/Themes';
import { customThemeLight } from 'Theme/Custom';

// Add custom theme to system
systemTheme.regisTheme({ name: "custom", light: customThemeLight })

function App() {
  const baseSetting = useBaseSetting()

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
  }, [])

  return <BaseSettingProvider>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("dark") }}
    >Dark</Button>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("light") }}
    >Light</Button>
    <Button 
      variant="contained"
      onClick={() => { baseSetting.setColorMode("onDevice") }}
    >On Device</Button>
    <br /><br />
    {
      themeList.map((item, inx) =>
        <Button key={inx} sx={{ ml: 1 }} color="inherit"
          onClick={() => baseSetting.setTheme({ themeName: item.value })}
        >
          {item.value}
        </Button>
      )
    }
  </BaseSettingProvider>
}
```

ในส่วนของ Button ที่ถูกสร้างตามจำนวนธีมที่ถูกตั้งค่าไว้ในระบบ ก็จะมีธีมที่ชื่อว่า custom แสดงขึ้นมาด้วย นั้นคือธีมที่เราสร้างขึ้นมาเองที่ถูกเพิ่มเข้าไปในระบบ และเมื่อเราคลิกปุ่มนั้น หน้าเว็บจะเปลี่ยนไปตามค่าธีมที่ถูกตั้งไว้  
ในตัวอย่างนี้ ธีมจะถูกกำหนดให้มีเฉพาะ ```Light mode``` แม้ว่าโหมดสีจะถูกตั้งเป็นโหมดอื่น ตัวระบบก็จะยังใช้งาน Light mode อยู่ดี เช่นเดียวกับการตั้งเฉพาะ ```Dark mode``` ด้วยเช่นกัน แต่ถ้าหากจะให้มีทั้งสองแบบเลย ให้ใช้โค้ดตามตัวอย่างนี้

``` jsx
// import custom theme with light and dark
import { customThemeLight, customThemeDark } from 'Theme/Custom';

// Add custom theme to system
systemTheme.regisTheme(
  { name: "custom", light: customThemeLight dark: customThemeDark }
)
```

ก็จะสามารถใช้ได้ทั้ง Dark mode และ Light mode ได้แล้ว

