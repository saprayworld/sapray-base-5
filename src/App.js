import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import routes from './routes';
import Loading from './Components/Loading';

import {
  BaseSettingProvider,
} from 'System/BaseSetting';
import { systemTheme } from 'System/Themes';
import { customThemeLight } from 'Theme/Custom';
import { systemLanguage } from 'System/Language/systemLanguage';

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

systemLanguage.regisLang(appThaiLang)
systemLanguage.regisLang(appEngLang)

export default function App() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // console.log(systemTheme.getCurrentThemeList({}));
    setReady(true)
    return () => {

    }
  }, [])

  return <BaseSettingProvider>
    {
      !ready
        ? <>
          <Loading message={systemLanguage.getString("app_init")} />
        </>
        : <BrowserRouter >
          <Suspense fallback={<Loading message={systemLanguage.getString("app_route_checking")} />}>
            <Routes>
              <Route
                path={`*`}
                element={<LayoutSwitch rnData={{ routes: routes }} />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
    }
  </BaseSettingProvider >
}
