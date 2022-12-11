import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container } from '@mui/system';
import { Fade } from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import TitleNavBar from '../../Components/TitleNavBar';
import SaprayIconButton from '../../Components/Button/SaprayButton';
import CharacterSelect from 'Components/CharacterSelect';

export default function RandomCharacterSelect(props) {
  const navigate = useNavigate();
  const {
    charType,
    charDisplay,
    routeName,
  } = props;

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  function onSubmitCharacter(selectedCharSet) {
    navigate(`${process.env.PUBLIC_URL}/apps/random-${charType}/run`, {
      state: {
        ...selectedCharSet
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
          title={`${routeName && `${routeName} - `}เลือกวรรค`}
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
        <CharacterSelect
          charType={charType}
          charDisplay={charDisplay}
          onSubmitCharacter={onSubmitCharacter}
        />
      </Container>
    </Fade>
  )
}

RandomCharacterSelect.propTypes = {
  charType: PropTypes.oneOf(['hiragana', 'katakana', 'romaji']),
  charDisplay: PropTypes.oneOf(['hiragana', 'katakana']),
  routeName: PropTypes.string,
}

RandomCharacterSelect.defaultProps = {
  charType: "hiragana",
  charDisplay: "hiragana",
  routeName: null,
}