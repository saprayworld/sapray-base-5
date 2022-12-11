import React from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import TitleNavBar from '../../Components/TitleNavBar';
import SaprayIconButton from '../../Components/Button/SaprayButton';
import { Fade } from '@mui/material';


export default function MainView(props) {
  const navigate = useNavigate();
  // console.log(props)
  const [sound, setSound] = React.useState(false);

  function goBackToHome() {
    if (window.history.length < 2) navigate(`${process.env.PUBLIC_URL}/apps/home`);
    else navigate(-1)
  }

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [])

  return (
    <Fade in={ready} >
      <Container>
        <TitleNavBar
          title="เลือกวรรค"
          leftSection={
            <SaprayIconButton variant="contained" color="primary" centerRipple onClick={() => goBackToHome()}>
              <ArrowBackIosNewIcon />
            </SaprayIconButton>
          }
          rightSection={
            <SaprayIconButton
              variant="contained"
              color={sound ? "success" : "error"}
              onClick={() => setSound(!sound)}
            >
              {sound ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </SaprayIconButton>
          }
        />
        <Card variant="sapray">
          <CardContent>
            {/* {[...new Array(30)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')} */}
          </CardContent>
        </Card>
      </Container>
    </Fade>
  )
}

MainView.propTypes = {

}

MainView.defaultProps = {

}