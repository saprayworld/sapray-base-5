import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';

const MainView = styled('div')(() => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%);",
  textAlign: "center",
  justifyContent: 'center',
  '& *': {
  }
}));

const PaperContent = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  minWidth: 200,
  zIndex: 2000,
  overflow: 'hidden',
  '& p': {
    marginTop: "10px",
    marginBottom: 0,
  }
}));

const Progress = styled(LinearProgress)(() => ({
  left: 0,
  top: 0,
  position: 'absolute',
  width: '100%',
  '& *': {
  }
}));

const IconWrapper = styled('div')(() => ({
  position: 'relative',
  '& *': {
  }
}));

export default function Loading(props) {
  const {
    message,
  } = props;

  return (
    <MainView>
      <PaperContent variant="outlined">
        <Progress />
        <IconWrapper>
          {/* <svg id="Capa_1" enableBackground="new 0 0 510 510" height="45" viewBox="0 0 510 510" width="45" xmlns="http://www.w3.org/2000/svg">
            <g id="XMLID_5014_">
              <g>
                <path id="XMLID_5155_" d="m240 285v30c-10 0-170 0-180 0v90l15 15 15-15c0-7.26 0-52.693 0-60h150v60l7.5 15 7.5-15 15-75-15-45-7.5-15z" fill="#e6f2ff" />
                <path id="XMLID_5154_" d="m270 345h150v60l15 15 15-15c0-10.889 0-79.039 0-90-10 0-170 0-180 0 0-10.492 0-19.508 0-30l-7.5-15-7.5 15v120l7.5 15 7.5-15c0-7.26 0-52.693 0-60z" fill="#cdf" />
              </g>
              <g>
                <path id="XMLID_5153_" d="m195 0v38.106c-17.814 4.908-34.87 11.975-50.939 21.103-9.425-9.426-17.522-17.523-26.947-26.947-10.266 10.266-74.52 74.52-84.853 84.853 9.424 9.425 17.522 17.522 26.947 26.947-9.126 16.067-16.193 33.122-21.102 50.938-13.327 0-24.779 0-38.106 0v90h105c0-10.492 0-19.508 0-30 0-82.84 67.155-150 150-150l15-52.5-15-52.5c-7.259 0-52.693 0-60 0z" fill="#6cf" />
                <path id="XMLID_5151_" d="m165 255v30h90l15-60-15-60c-49.704 0-90 40.293-90 90z" fill="#6cf" />
              </g>
              <g>
                <path id="XMLID_5152_" d="m405 255v30h105c0-10.889 0-79.039 0-90-13.327 0-24.778 0-38.105 0-4.909-17.814-11.975-34.87-21.103-50.939 9.424-9.425 17.523-17.522 26.946-26.947-10.266-10.266-74.52-74.52-84.853-84.853-9.425 9.424-17.522 17.521-26.947 26.947-16.066-9.126-33.122-16.192-50.938-21.102 0-13.327 0-24.779 0-38.106-7.259 0-52.693 0-60 0v105c82.841 0 150 67.154 150 150z" fill="#4596e6" />
                <path id="XMLID_5148_" d="m345 255c0-49.704-40.293-90-90-90v60 60h90c0-10.492 0-19.508 0-30z" fill="#4596e6" />
              </g>
              <g id="XMLID_4952_">
                <path id="XMLID_5143_" d="m180 405v75l37.5 15 37.5-15 15-37.5-15-37.5c-20.194 0-63.236 0-75 0z" fill="#ff637b" />
                <path id="XMLID_5142_" d="m330 405c-20.194 0-63.236 0-75 0v75l37.5 15 37.5-15c0-20.194 0-63.236 0-75z" fill="#e63950" />
                <path id="XMLID_5146_" d="m180 480v30h75l15-15-15-15c-20.194 0-63.236 0-75 0z" fill="#e63950" />
                <path id="XMLID_5144_" d="m330 480c-20.194 0-63.236 0-75 0v30h75c0-10.492 0-19.508 0-30z" fill="#cd0000" />
              </g>
              <g id="XMLID_5156_">
                <path id="XMLID_5239_" d="m0 405v75l37.5 15 37.5-15 15-37.5-15-37.5c-20.194 0-63.236 0-75 0z" fill="#8bf2cf" />
                <path id="XMLID_5236_" d="m150 405c-20.194 0-63.236 0-75 0v75l37.5 15 37.5-15c0-20.194 0-63.236 0-75z" fill="#57d9d4" />
                <path id="XMLID_5160_" d="m0 480v30h75l15-15-15-15c-20.194 0-63.236 0-75 0z" fill="#57d9d4" />
                <path id="XMLID_5157_" d="m150 480c-20.194 0-63.236 0-75 0v30h75c0-10.492 0-19.508 0-30z" fill="#26bfbf" />
              </g>
              <g id="XMLID_5149_">
                <path id="XMLID_5246_" d="m360 405v75l37.5 15 37.5-15 15-37.5-15-37.5c-20.194 0-63.236 0-75 0z" fill="#ffda2d" />
                <path id="XMLID_5243_" d="m510 405c-20.194 0-63.236 0-75 0v75l37.5 15 37.5-15c0-20.194 0-63.236 0-75z" fill="#fdbf00" />
                <path id="XMLID_5222_" d="m360 480v30h75l15-15-15-15c-20.194 0-63.236 0-75 0z" fill="#fdbf00" />
                <path id="XMLID_5150_" d="m510 480c-20.194 0-63.236 0-75 0v30h75c0-10.492 0-19.508 0-30z" fill="#ff9100" />
              </g>
            </g>
          </svg> */}
          <svg enableBackground="new 0 0 612 612" height="45" width="45" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_1">
              <polygon points="306,452 53.1,306 306,160 	" fill="#0E76BC" />
              <polygon points="298,306 171.55,233 298,160 " fill="#00AEEF" />
              <polygon points="298,452 171.55,379 298,306 " fill="#283891" />
              <polygon points="302,445 61.5,306 302,167 	" fill="#0000" stroke="#FFF" strokeWidth="9" strokeMiterlimit="0" />

              <polygon points="306,160 558.9,306 306,452 	" fill="#33A851" stroke="#FFFFFF" strokeWidth="9" strokeMiterlimit="10" />
              <polygon points="53.1,14 306,160 53.1,306 	" fill="#EA4335" stroke="#FFFFFF" strokeWidth="9" strokeMiterlimit="10" />
              <polygon points="53.1,306 306,452 53.1,598 	" fill="#F9BC15" stroke="#FFFFFF" strokeWidth="9" strokeMiterlimit="10" />
            </g>
          </svg>
        </IconWrapper>
        <p>{message}</p>
      </PaperContent>
    </MainView>
  )
}

Loading.propTypes = {
  message: PropTypes.string,
}

Loading.defaultProps = {
  message: 'กำลังโหลด...',
}