import React, { Suspense } from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import PageBackground from '../../Components/PageBackground';
import ElevateAppBar from '../../Components/AppBar';
import Loading from '../../Components/Loading';

export default function Sapray(props) {
  const { rnData } = props;
  const { routes } = rnData;

  return (
    <>
      <PageBackground />
      <ElevateAppBar title="Sapray" />
      <Suspense fallback={<Loading message="กำลังโหลดหน้า..." />}>
        <Routes>
          {
            routes.map((prop, key) => {
              if (prop.layout === "Sapray") {
                return (
                  <Route
                    key={key}
                    exact={prop.exact}
                    path={`${process.env.PUBLIC_URL}${prop.path}`}
                    element={<prop.component />}
                  />
                );
              } else {
                return null;
              }
            })
          }
        </Routes>
      </Suspense>
    </>
  )
}

Sapray.propTypes = {

}

Sapray.defaultProps = {

}