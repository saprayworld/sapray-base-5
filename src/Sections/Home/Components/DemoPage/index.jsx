import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import RecipeReviewCard from './RecipeReviewCard';

export default function DemoPage(props) {
  const {
    message,
  } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2'>{message}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" gutterBottom>การ์ด</Typography>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" gutterBottom>การ์ดแบบกำหนดเอง</Typography>
          <RecipeReviewCard variant="sapray" />
        </Grid>
      </Grid>
    </>
  )
}

DemoPage.propTypes = {
  message: PropTypes.string,
}

DemoPage.defaultProps = {
  message: 'ตัวอย่าง',
}