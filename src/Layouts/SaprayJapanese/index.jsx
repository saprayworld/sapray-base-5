import React, { Suspense } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { ThemeProvider, createTheme } from "@mui/material/styles";
// import PropTypes from 'prop-types';
import PageBackground from '../../Components/PageBackground';
import ElevateAppBar from '../../Components/AppBar';
import Loading from '../../Components/Loading';
import { switchTheme } from 'Themes';
import { CssBaseline } from '@mui/material';

export default function SaprayJapanese(props) {
  const location = useLocation();
  const { rnData } = props;
  const { routes } = rnData;

  const theme = createTheme(switchTheme("dark", "japanese"));

  function setTitle(propsLocationPathname) {
    var webName = "Sapray Japanese"
    const getDataFormRoutes = routes.find((val) => {
      return `${val.path}` === propsLocationPathname
    })
    if (getDataFormRoutes) {
      document.title = getDataFormRoutes.name + " - " + webName; // เซ็ต Title
    } else {
      document.title = webName; // เซ็ต Title
    }
  }

  function cutBasePath(_path) {
    let res = _path.replace(`${process.env.PUBLIC_URL}/apps/`, "")
    // console.log(res)
    return res
  }

  React.useEffect(() => {
    // console.log(cutBasePath(`${process.env.PUBLIC_URL}/apps/home`))
    setTitle(location.pathname);
    return () => {

    }
    // eslint-disable-next-line
  }, [location])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageBackground />
      <ElevateAppBar title="Sapray Japanese" />
      <Suspense fallback={<Loading message="กำลังโหลดหน้า..." />}>
        <Routes>
          {
            routes.map((prop, key) => {
              // console.log(`${process.env.PUBLIC_URL}` + prop.path)
              if (prop.layout === "SaprayJapanese") {
                return (
                  <Route
                    key={key}
                    exact={prop.exact}
                    path={cutBasePath(prop.path)}
                    element={<prop.component {...prop?.props} routeName={prop.name} />}
                  />
                );
              } else {
                return null;
              }
            })
          }
          <Route
            exact
            path={`*`}
            element={<Navigate to={`${process.env.PUBLIC_URL}/apps/home`} replace />}
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

SaprayJapanese.propTypes = {

}

SaprayJapanese.defaultProps = {

}