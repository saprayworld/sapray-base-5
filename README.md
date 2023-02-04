# sapray-base-5
Project for using MUI version 5, with the ability to switch between dark and light theme and customize each section individually.

## Basic usage of the system.

### The main system.
The system consists of setting up the system, managing system settings, and responding to changes in settings such as theme, color mode, or language. This is a basic example of usage.

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

The operation means the website will function normally and use the default MUI theme, but the color mode will change based on the device's default setting.

### Changing Color Mode
To change the color mode, use the code as shown in this example.

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

An example usage of the system is to call the ```useBaseSetting``` from the main system to change the system settings and check the setting status. The color mode change will use the ```setColorMode``` command of the ```useBaseSetting```, which has the following possible values: ```onDevice``` (default), ```dark```, and ```light```. When the color mode button is clicked, the website's color mode will change according to the set value.

### The theme change.  
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

Example creating buttons based on the number of themes set in the system, called from the ```getCurrentThemeList``` of ```systemTheme```. When clicked, the ```setTheme``` function of ```useBaseSetting``` will be invoked to change the theme settings and the web page will change according to the set value.

### Custom theme setting.
In this system, we can create our own custom theme for use in our website. For example, we will use the code in the ```Theme/Custom``` of this project, which is an example of creating a custom theme. And we can create a new one using this code as a reference.  

``` jsx
// import custom theme
import { customThemeLight } from 'Theme/Custom';

// Add custom theme to system
systemTheme.regisTheme({ name: "custom", light: customThemeLight })
```

All code.
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

In the section of buttons created according to the number of themes set in the system, there will also be a theme named "custom" displayed. This is the theme we created ourselves and added to the system. And when we click that button, the web page will change according to the theme settings.  
In this example, the theme is set to only have the ```Light mode``` , even though the color mode is set to another mode, the system still uses the Light mode. Similarly, if only ```Dark mode``` is set, the same thing would happen. But if you want to have both, use the code from this example.

``` jsx
// import custom theme with light and dark
import { customThemeLight, customThemeDark } from 'Theme/Custom';

// Add custom theme to system
systemTheme.regisTheme(
  { name: "custom", light: customThemeLight dark: customThemeDark }
)
```

both Dark mode and Light mode will be available for use.

### Languages
We can make our website system have multiple languages.
``` jsx
import * as React from 'react';
import {
  BaseSettingProvider,
  useBaseSetting
} from 'System/BaseSetting';
import { useLanguage } from 'System/Language/systemLanguage';

const appThaiLang = {
  lang: "th-TH", name: "ไทย", strings: [
    { id: "app_init", value: "กำลังเริ่มต้นระบบ กรุณารอสักครู่..." },
  ]
}

const appEngLang = {
  lang: "en-US", name: "english", strings: [
    { id: "app_init", value: "initializing..." },
  ]
}

export default function App() {

  const selectLangBySetting = React.useCallback((lang) => {
    switch (lang) {
      case "en-US":
        return appEngLang
      case "th-TH":
        return appThaiLang

      default:
        return appEngLang
    }
  }, [])
  const baseSetting = useBaseSetting()
  const { lang } = baseSetting.getBaseSetting
  const language = useLanguage(selectLangBySetting(lang), lang);
  const { regisLang } = language

  React.useMemo(() => {
    console.log(regisLang(appThaiLang));
    console.log(regisLang(appEngLang));
    return true
  }, [regisLang])

  return <BaseSettingProvider>
    <p>{`${language.getString("app_init")}`}</p>
  </BaseSettingProvider>
}
```

This code allows you to have a website with multiple languages. The ```useLanguage``` function must be passed the initial language value with ```selectLangBySetting(lang)``` and the language setting ```lang```. When the lang setting changes, the language variable is updated. The value returned from ```getString``` will change according to the language you set. The ```regisLang``` function is used to add languages to the system.
