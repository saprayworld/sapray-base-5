import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { styled } from '@mui/material';
import { Container } from '@mui/system';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

const ButtonPills = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& > *': {
    margin: "3px",
  },
  '& > a': {
    cursor: "pointer",
    color: 'inherit',//theme.palette.primary.main,
    textDecoration: "none",
    '&:visited': {
      color: 'inherit',
    },
  },
}));

const appList = [
  { to: `${process.env.PUBLIC_URL}/apps/random-hiragana`, icon: "あ", name: "สุ่มฮิรางานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/random-katakana`, icon: "ア", name: "สุ่มคาตากานะ" },
  { to: `${process.env.PUBLIC_URL}/apps/random-romaji`, icon: "A", name: "สุ่มโรมันจิ" },
  { to: `${process.env.PUBLIC_URL}/apps/random-number`, icon: "1", name: "สุ่มจำนวนเลข" },
]

export default function Home(props) {

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [])

  return (
    <Fade in={ready}>
      <Container>
        <ButtonPills>
          {
            appList.map((app, index) =>
              <Link key={index} to={app.to}>
                <Button variant="contained" custom="pill" ><i>{app.icon}</i>{app.name}</Button>
              </Link>
            )
          }
        </ButtonPills>
      </Container>
    </Fade>
  )
}

Home.propTypes = {

}

Home.defaultProps = {

}