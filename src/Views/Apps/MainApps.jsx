import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { styled } from '@mui/material';
import { Container } from '@mui/system';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

const ButtonPills = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& > *': {
    margin: "3px",
  }
}));

const appList = [
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "Main View" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางawdานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรawdาง wdawานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางawdานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางาawdนะ" },
  { to: `${process.env.PUBLIC_URL}/apps/main-view`, icon: "あ", name: "สุ่มฮิรางawdานะ" },
]

export default function MainApps(props) {

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [])

  return (
    <Fade in={ready}>
      <Container>
        <ButtonPills>
          {
            appList.map((app, index) =>
              <Link key={index} to={app.to}>
                <Button variant="contained" custom="pill" ><i>{app.icon}</i>{app.name}</Button>
              </Link>
            )
          }
        </ButtonPills>
      </Container>
    </Fade>
  )
}

MainApps.propTypes = {

}

MainApps.defaultProps = {

}