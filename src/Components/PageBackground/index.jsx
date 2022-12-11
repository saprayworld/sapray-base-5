import React from 'react';
// import {
//   // BrowserRouter as Router,
//   Router,
//   Route,
//   Switch,
//   Redirect
// } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

const moveLeftRight = keyframes`
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
`;

const BackgroundRoot = styled('div')(({ theme }) => ({
  height: "100vh",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  backgroundColor: "#171941",
  zIndex: '-1',
}));

const SquareMain = {
  background: "linear-gradient(0deg,#3358f4,#1d8cf8)",
  position: "absolute",
  transition: ".5s ease-out",
  overflow: "hidden",
  borderRadius: "20%",
};

const Square = styled('div')(({ time, width, height, opacity, left, top, right, bottom }) => ({
  ...SquareMain,
  animation: `${moveLeftRight} ${time || '1s'} infinite`,
  height: height || 300,
  width: width || 300,
  opacity: opacity || 1,
  left: left,
  top: top,
  right: right,
  bottom: bottom,
}));

export default function PageBackground(props) {
  return (
    <BackgroundRoot>
      <Square time={"4s"} width={300} height={300} opacity={".5"} left={"3%"} top={"-21%"} />
      <Square time={"6s"} width={400} height={400} opacity={".4"} right={"-5%"} top={"-12%"} />
      <Square time={"5s"} width={200} height={200} opacity={".1"} left={"-5%"} bottom={"0%"} />
      <Square time={"10s"} width={100} height={100} opacity={".4"} right={"27%"} top={"70%"} />
      <Square time={"6s"} width={250} height={250} opacity={".1"} right={"32%"} bottom={"29%"} />
      <Square time={"9s"} width={80} height={80} opacity={".8"} left={"10%"} top={"35%"} />
      <Square time={"3s"} width={300} height={300} opacity={".1"} right={"-5%"} bottom={"0%"} />
    </BackgroundRoot>
  )
}

PageBackground.propTypes = {

}

PageBackground.defaultProps = {

}