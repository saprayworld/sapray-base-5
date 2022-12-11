import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { randomFunc } from "./RandomFunction"

import { Button, Card, CardContent, Grid } from '@mui/material';

// eslint-disable-next-line
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// eslint-disable-next-line
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import TitleNavBar from '../TitleNavBar';
import SaprayIconButton from '../Button/SaprayButton';

export default function RandomNumber(props) {
  const navigate = useNavigate();
  const {
    timeDelay,
    charData,
    title,
  } = props;

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/
  // var stringTest = require('assets/sapray/media/ka.mp3');
  // var objAudio = new Audio(stringTest);
  var timeoutTime = null;
  const [characterData, setCharacterData] = React.useState({});
  // const [randomType, setRandomType] = React.useState(0);
  const [randomCount, setRandomCount] = React.useState(0);
  const [characterText, setCharacterText] = React.useState();
  const [characterTran, setCharacterTran] = React.useState();
  const [characterTranShow, setCharacterTranShow] = React.useState(false);
  // eslint-disable-next-line
  const [characterTextFirstTime, setCharacterTextFirstTime] = React.useState("ありがとうございます");
  // eslint-disable-next-line
  const [characterTranFirstTime, setCharacterTranFirstTime] = React.useState("arigatō gozaimasu");
  const [randomIndex, setRandomIndex] = React.useState(-1);
  const [beforeRandom, setBeforeRandom] = React.useState(true);
  const [soundEnable, setSoundEnable] = React.useState(false);
  // eslint-disable-next-line
  const [soundsTrack, setSoundsTrack] = React.useState({});
  const [soundKeyForReplay, setSoundKeyForReplay] = React.useState(null);
  const [canRandom, setCanRandom] = React.useState(false);

  // eslint-disable-next-line
  const toggleSound = () => {
    setSoundEnable(!soundEnable);
    // objAudio.play();
  }

  // eslint-disable-next-line
  const toggleReplaySound = () => {
    if (soundEnable && randomIndex > -1 && soundKeyForReplay) {
      playSound(soundKeyForReplay);
    }
  }

  const toggleRandom = (oldRandomIndex) => {
    if (canRandom) return false;
    var delayToNextCharFirstTime = 2000;
    var delayToNextChar = timeDelay;
    setCanRandom(true);
    clearTimeout(timeoutTime);

    timeoutTime = setTimeout(() => {
      displayChar(oldRandomIndex)
    }, (oldRandomIndex < 0) ? delayToNextCharFirstTime : delayToNextChar);

    setCharacterTranShow(true);
  }

  const displayChar = (oldRandom) => {
    setCanRandom(false)
    // const { characterData, randomCount } = this.state;
    var randomRun = (randomCount === characterData.length) ? 0 : randomCount;

    setSoundKeyForReplay(characterData[randomRun]["romaji"]);

    setBeforeRandom(beforeRandom ? false : false);
    setRandomCount((randomCount + 1 === characterData.length) ? 0 : randomCount + 1);
    setRandomIndex(randomRun);
    setCharacterText(characterData[randomRun]["display"]);
    setCharacterTran(characterData[randomRun]["answer"]);
    setCharacterTranShow(false);

    if ((randomCount + 1 === characterData.length)) {
      setCharacterData(randomFunc.shuffling(characterData));
    }
  }

  const playSound = (soundKey) => {
    // const { soundsTrack } = this.state;
    try {
      let sound = soundsTrack.find((val) => {
        return val.key === soundKey;
      })
      if (sound) {
        // sound.audio.stop();
        sound.audio.play();
      }
    } catch (error) {
      console.log("No sound file.")
    }
  }

  const styleSet = (select) => {
    var styleCss = {};
    if (select === "beforeRandom") {
      styleCss = {
        fontSize: "25px"
      }
    } else {
      styleCss = {
        fontSize: "120px"
      }
    }
    return styleCss;
  }

  React.useEffect(() => {
    // console.log("charType:", charType)
    // console.log("charData:", charData)
    if (!charData) {
      navigate(`${process.env.PUBLIC_URL}/apps/home`);
    } else {
      setCharacterData(randomFunc.shuffling(charData));
    }
    return () => {

    }
    // eslint-disable-next-line
  }, [charData])


  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  function goBackToSelectCharacterPage() {
    // console.log(window.history.length)
    if (window.history.length <= 2) navigate(`${process.env.PUBLIC_URL}/apps/home`);
    else navigate(-1)
  }

  // const [ready, setReady] = React.useState(false);

  // React.useEffect(() => {
  //   setReady(true)
  //   return () => {
  //     setReady(false)
  //   }
  // }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <TitleNavBar
          title={`${title} ${randomIndex + 1}/${characterData.length}`}
          leftSection={
            <SaprayIconButton
              variant="contained"
              color="primary"
              centerRipple
              onClick={() => goBackToSelectCharacterPage()}
            >
              <ArrowBackIosNewIcon />
            </SaprayIconButton>
          }
          // rightSection={
          //   <SaprayIconButton
          //     variant="contained"
          //     color={soundEnable ? "success" : "error"}
          //     centerRipple
          //     onClick={() => toggleSound()}
          //   >
          //     {soundEnable ? <VolumeUpIcon /> : <VolumeOffIcon />}
          //   </SaprayIconButton>
          // }
        />
      </Grid>
      <Grid item xs={12} >
        <Card variant="sapray">
          <CardContent variant="sapray">
            <div style={{ textAlign: "center" }}>
              <span
                style={beforeRandom ? styleSet("beforeRandom") : styleSet()}
              >
                {(randomIndex < 0) ? characterTextFirstTime : characterText}
              </span>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} >
        <Card variant="sapray">
          <CardContent variant="sapray">
            <div style={{ textAlign: "center" }}>
              <span
                style={styleSet("beforeRandom")}
              >
                {
                  (characterTranShow)
                    ? (randomIndex < 0)
                      ? characterTranFirstTime
                      : characterTran
                    : "　"}
              </span>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} >
        <Button
          size="large"
          startIcon={<PlayArrowIcon />}
          fullWidth
          color="warning"
          variant="contained"
          onClick={() => toggleRandom(randomIndex)}
        // disabled={canRandom}
        >
          สุ่มคำถัดไป
        </Button>
      </Grid>
    </Grid>
  )
}

RandomNumber.propTypes = {
  // randomType: PropTypes.oneOf(["normal", "revert"]),
  timeDelay: PropTypes.number,
  charData: PropTypes.array,
  title: PropTypes.string,
}

RandomNumber.defaultProps = {
  // randomType: 'normal',
  timeDelay: 1000,
  charData: null,
  title: "สุ่มจำนวน",
}