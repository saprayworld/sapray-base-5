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
          <Loading message="กำลังเริ่มต้นระบบ กรุณารอสักครู่..." />
        </>
        : <BrowserRouter >
          <Suspense fallback={<Loading message="กำลังตรวจสอบเส้นทาง..." />}>
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
