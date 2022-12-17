import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { AppBar, Container, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import Link from '../Link';

export const ToolbarNoPadding = withStyles({
  root: {
    paddingLeft: "0px",
    paddingRight: "0px",
    alignItems: "center",
  }
})(Toolbar);

export default function ElevateAppBar(props) {
  const {
    brandText,
    brandIcon,
    brandLink,
    menu,
  } = props;

  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  })

  return (
    <>
      <AppBar variant={isScrolled ? "sapray" : "sapray-tran"} >
        <Container>
          <ToolbarNoPadding variant='regular' >
            {
              brandIcon &&
                brandLink ?
                <Link color="inherit" to={brandLink}>
                  {brandIcon}
                </Link>
                : brandIcon
            }
            {
              brandText &&
                brandLink ?
                <Link color="inherit" to={brandLink}>
                  <Typography variant="h6" component="div">
                    {brandText}
                  </Typography>
                </Link>
                : <Typography variant="h6" component="div">
                  {brandText}
                </Typography>
            }
            <div style={{ flexGrow: 1 }}></div>
            {menu}
          </ToolbarNoPadding>
        </Container>
      </AppBar>
      <Toolbar variant='sapray-transfer' />
    </>
  )
}

ElevateAppBar.propTypes = {
  brandText: PropTypes.string,
  brandIcon: PropTypes.element,
  brandLink: PropTypes.string,
  // menu: PropTypes.array,
}

ElevateAppBar.defaultProps = {
  brandText: 'SAPRAY',
  brandIcon: null,
  brandLink: null,
  // menu: [],
}