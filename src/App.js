import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import { switchTheme, ColorModeContext } from './Themes';

import routes from './routes';
import Loading from './Components/Loading';

const LayoutSwitch = React.lazy(() => import('./Layouts/LayoutSwitch'));

export default function App() {

  const [ready, setReady] = React.useState(false);
  // const colorMode = React.useContext(ColorModeContext);

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

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

  return <ColorModeContext.Provider value={colorMode}>
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
  </ColorModeContext.Provider>
}
