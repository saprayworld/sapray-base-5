import React, { Suspense } from 'react';
import {
  // useLocation,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Home from 'Sections/Home';
// import PropTypes from 'prop-types';
// import SaprayJapanese from './SaprayJapanese';
// import Sapray from './Sapray';
import Loading from '../Components/Loading';

const SaprayJapanese = React.lazy(() => import('./SaprayJapanese'));
// const Sapray = React.lazy(() => import('./Sapray'));

export default function LayoutSwitch(props) {
  const { rnData } = props;
  const { routes } = rnData;

  // const location = useLocation();

  React.useEffect(() => {
    // console.log("location", location.pathname)
    // console.log("PUBLIC_URL", `${process.env.PUBLIC_URL}`)
    return () => {

    }
  }, [])

  return (
    <Suspense fallback={<Loading message="กำลังโหลดโครงสร้าง..." />}>
      <Routes>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/sapray/home`}
          element={<>Section: /sapray/home</>}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        />
        {
          routes.map((prop, key) => {
            // console.log("prop.path", prop.path)
            return (
              <Route
                key={key}
                // exact={true}
                path={`${process.env.PUBLIC_URL}/apps/*`}
                element={<SaprayJapanese {...props} />}
              // element={
              //   prop.layout === "SaprayJapanese"
              //     ? <SaprayJapanese {...props} />
              //     : <Sapray {...props} />
              // }
              />
            );
          })
        }
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/apps`}
          element={<Navigate to={`${process.env.PUBLIC_URL}/apps/home`} replace />}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          element={<Navigate to={`${process.env.PUBLIC_URL}/apps/home`} replace />}
        />
        {/* <Route
          exact
          path={`*`}
          element={<Navigate to={`${process.env.PUBLIC_URL}/apps/home`} replace />}
        /> */}
      </Routes>
    </Suspense >
  )
}

LayoutSwitch.propTypes = {

}

LayoutSwitch.defaultProps = {

}