import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  // function RenderElement({ _child }) {
  //   return React.cloneElement((_child), {
  //     elevation: trigger ? 4 : 0,
  //     // color: trigger ? "primary" : "transparent"
  //     variant: trigger ? "sapray" : "sapray-tran"
  //   })
  // }

  // return children.length > 0
  //   ? children.map((child, index) => {
  //     return <RenderElement key={index} _child={child} />
  //   })
  //   : <RenderElement _child={children} />

  return React.cloneElement((children), {
    elevation: trigger ? 4 : 0,
    // color: trigger ? "primary" : "transparent"
    variant: trigger ? "sapray" : "sapray-tran"
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  window: PropTypes.func,
};

const ToolbarNoPadding = styled(Toolbar)(() => ({
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
}));

const LinkNavTitle = styled(Link)(() => ({
  cursor: "pointer",
  color: 'inherit',//theme.palette.primary.main,
  textDecoration: "none",
  '&:visited': {
    color: 'inherit',
  },
}));

export default function ElevateAppBar(props) {
  const {
    title,
  } = props;

  return (
    <React.Fragment>
      {/* <ThemeProvider theme={saprayTheme}> */}
      <ElevationScroll {...props}>
        <AppBar variant='sapray' enableColorOnDark>
          <Container>
            <ToolbarNoPadding variant='regular' >
              <LinkNavTitle to={`${process.env.PUBLIC_URL}/apps/home`}>
                <Typography variant="h6" component="div">
                  {title}
                </Typography>
              </LinkNavTitle>
            </ToolbarNoPadding>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar variant='sapray-transfer' />
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
}

ElevateAppBar.propTypes = {
  title: PropTypes.string,
}

ElevateAppBar.defaultProps = {
  title: "",
}