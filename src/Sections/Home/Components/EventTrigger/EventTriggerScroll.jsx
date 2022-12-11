import * as React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '@mui/material';

export default function EventTriggerScroll(props) {
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
    // variant: trigger ? "sapray" : "sapray-tran"
  })
}

EventTriggerScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  window: PropTypes.func,
};