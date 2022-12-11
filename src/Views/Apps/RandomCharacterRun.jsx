import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Fade } from '@mui/material';
import { Container } from '@mui/system';

import RandomCharacter from '../../Components/RandomCharacter';

export default function RandomCharacterRun(props) {
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
        <RandomCharacter
          charType={location.state?.charType || null}
          charData={location.state?.characterList || null}
          title={routeName}
        />
      </Container>
    </Fade>
  )
}

RandomCharacterRun.propTypes = {
  routeName: PropTypes.string,
}

RandomCharacterRun.defaultProps = {
  routeName: "",
}