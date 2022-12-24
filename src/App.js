import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import { switchTheme } from './Themes';

import routes from './routes';
import Loading from './Components/Loading';

import {
  BaseSettingProvider,
  defaultBaseSetting,
  getColorModeByType,
  localSetting,
  useColorModeInit,
} from 'System/BaseSetting';

const LayoutSwitch = React.lazy(() => import('./Layouts/LayoutSwitch'));

export default function App() {
  // console.log(useColorModeInit);
  const [ready, setReady] = React.useState(false);

  const [mode, setMode] = React.useState(useColorModeInit);

  const baseSettingData = React.useMemo(
    () => ({
      ...defaultBaseSetting,
      currentColorMode: mode,
      setColorMode: (_mode) => {
        localSetting.set({ themeType: _mode })
        setMode(getColorModeByType(_mode))
      }
    }),
    [mode],
  );
  
  window.onstorage = (data) => {
    if (data.key === 'saprayworld_manager') {
      const newSetting = JSON.parse(data.newValue)
      setMode(getColorModeByType(newSetting.themeType))
    }
  };

  const theme = React.useMemo(
    () =>
      createTheme(switchTheme(mode)),
    [mode],
  );

  React.useEffect(() => {
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [])

  return <BaseSettingProvider value={baseSettingData}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  </BaseSettingProvider>
}
