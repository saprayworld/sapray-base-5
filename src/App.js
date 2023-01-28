import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import routes from './routes';
import Loading from './Components/Loading';

import {
  BaseSettingProvider, useBaseSetting,
} from 'System/BaseSetting';
import { systemTheme } from 'System/Themes';
import { customThemeLight } from 'Theme/Custom';
import { useLanguage } from 'System/Language/systemLanguage';
const LayoutSwitch = React.lazy(() => import('./Layouts/LayoutSwitch'));
systemTheme.regisTheme({ name: "custom", light: customThemeLight })

const appThaiLang = {
  lang: "th-TH", name: "ไทย", strings: [
    { id: "app_init", value: "กำลังเริ่มต้นระบบ กรุณารอสักครู่..." },
    { id: "app_route_checking", value: "กำลังตรวจสอบเส้นทาง..." },
  ]
}

const appEngLang = {
  lang: "en-US", name: "english", strings: [
    { id: "app_init", value: "initializing..." },
    { id: "app_route_checking", value: "Checking route..." },
  ]
}

export default function App() {
  const [ready, setReady] = React.useState(false);

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
    console.log("Memo");
    console.log(regisLang(appThaiLang));
    console.log(regisLang(appEngLang));
    return true
  }, [regisLang])

  React.useEffect(() => {
    console.log("Effect");
    setReady(true)
    return () => {
      console.log("Unmounted");
    }
  }, [])

  return <BaseSettingProvider>
    {
      !ready
        ? <>
          <Loading message={`${language.getString("app_init")}`} />
          {/* <Loading message={"กำลังเริ่มต้นระบบ กรุณารอสักครู่..."} /> */}
        </>
        : <BrowserRouter >
          <Suspense fallback={<Loading message={`${language.getString("app_route_checking")}`} />}>
            {/* <Suspense fallback={<Loading message={"กำลังตรวจสอบเส้นทาง..."} />}> */}
            <Routes>
              <Route
                path={`*`}
                element={<LayoutSwitch rnData={{ routes: routes }} />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
    }
  </BaseSettingProvider>
}
