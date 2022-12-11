import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Fade } from '@mui/material';
import { Container } from '@mui/system';

import RandomNumber from 'Components/RandomNumber';

export default function RandomNumberRun(props) {
  const location = useLocation();
  const {
    routeName,
  } = props;

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [])

  return (
    <Fade in={ready} >
      <Container maxWidth="lg">
        <RandomNumber
          timeDelay={location.state?.timeDelay || null}
          charData={location.state?.characterList || null}
          title={routeName}
        />
      </Container>
    </Fade>
  )
}

RandomNumberRun.propTypes = {
  routeName: PropTypes.string,
}

RandomNumberRun.defaultProps = {
  routeName: "",
}