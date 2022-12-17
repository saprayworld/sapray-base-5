import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, IconButton, useScrollTrigger, useTheme } from '@mui/material';
import ElevateAppBar from './Components/Appbar/ElevateAppBar';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useBaseSetting } from 'System/BaseSetting';


export default function Home(props) {
  const {
    message,
  } = props;

  const theme = useTheme();
  const baseSetting = useBaseSetting()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  // console.log(baseSetting);

  return (
    <>
      <ElevateAppBar
        menu={<>
          <div>{baseSetting.currentColorMode}</div>
          <Button sx={{ ml: 1 }} onClick={() => console.log(baseSetting.getBaseSetting)} color="inherit">
            ข้อมูลตั้งค่าโหมดสี
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("onDevice")} color="inherit">
            อุปกรณ์
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("dark")} color="inherit">
            มืด
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("light")} color="inherit">
            สว่าง
          </Button>
          <IconButton sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("light")} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton sx={{ ml: 1 }} onClick={() => baseSetting.setColorMode("dark")} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </>
        }
      />
      <Container>
        <p>EventTriggerScroll By Function: {trigger ? "True" : "False"}</p>
        {message}
        {[...new Array(30)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Container>
    </>
  )
}

Home.propTypes = {
  message: PropTypes.string,
}

Home.defaultProps = {
  message: 'Hello World!!!',
}