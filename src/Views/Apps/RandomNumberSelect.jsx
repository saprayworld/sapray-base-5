import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container } from '@mui/system';
import { Fade } from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import TitleNavBar from '../../Components/TitleNavBar';
import SaprayIconButton from '../../Components/Button/SaprayButton';
import NumberSelect from 'Components/RandomNumber/Select';

export default function RandomNumberSelect(props) {
  const navigate = useNavigate();
  const {
    routeName,
  } = props;

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  function onSubmitNumber(selectedNumber) {
    // console.log(selectedNumber)

    // console.log(new Array(20));
    navigate(`${process.env.PUBLIC_URL}/apps/random-number/run`, {
      state: {
        ...selectedNumber
      }
    });
  }

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  function goBackToHome() {
    // console.log(window.history.length)
    if (window.history.length <= 2) navigate(`${process.env.PUBLIC_URL}/apps/home`);
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
          title={`${routeName && `${routeName} - `}กำหนดค่า`}
          leftSection={
            <SaprayIconButton
              variant="contained"
              color="primary"
              centerRipple
              onClick={() => goBackToHome()}
            >
              <ArrowBackIosNewIcon />
            </SaprayIconButton>
          }
        />
        <NumberSelect
          onSubmitNumber={onSubmitNumber}
        />
      </Container>
    </Fade>
  )
}

RandomNumberSelect.propTypes = {
  routeName: PropTypes.string,
}

RandomNumberSelect.defaultProps = {
  routeName: null,
}