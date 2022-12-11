import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

const MainSection = styled('div')(() => ({
  padding: "15px 15px 0px",
  display: "flex",
  width: "100%",
  marginBottom: 25,
}));

const LeftSection = styled('div')(() => ({
  marginRight: "auto",
  width: "20%",
  textAlign: "left",
}));

const RightSection = styled('div')(() => ({
  marginLeft: "auto",
  width: "20%",
  textAlign: "right",
}));

const Title = styled('h4')(() => ({
  margin: "auto",
  width: "60%",
  textAlign: "center",
}));

export default function TitleNavBar(props) {
  const {
    title,
    leftSection,
    rightSection
  } = props;

  return (
    <MainSection>
      <LeftSection>
        {leftSection}
      </LeftSection>
      <Title>{title}</Title>
      <RightSection>
        {rightSection}
      </RightSection>
    </MainSection>
  )
}

TitleNavBar.propTypes = {
  title: PropTypes.string,
  leftSection: PropTypes.element,
  rightSection: PropTypes.element,
}

TitleNavBar.defaultProps = {
  title: '',
  leftSection: null,
  rightSection: null,
}