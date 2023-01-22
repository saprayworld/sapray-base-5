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
          <Loading message={"กำลังเริ่มต้นระบบ กรุณารอสักครู่..."} />
        </>
        : <BrowserRouter >
          <Suspense fallback={<Loading message={"กำลังตรวจสอบเส้นทาง..."} />}>
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
