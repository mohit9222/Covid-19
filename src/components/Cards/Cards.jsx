import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected, styles.imp)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="card-title">INFECTED</h4>
            </Typography>
            <Typography variant="h5" component="h2">
            <h3 className="font-weight-bold indigo-text py-2" style={{ color: '#061fa7cf' }}><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></h3>
            </Typography>
            <Typography color="textSecondary">
            <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
            </Typography>
            <Typography variant="body2" component="p">
             <h5> Number of active cases of COVID-19.</h5>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered, styles.imp)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="card-title">RECOVERED</h4>
            </Typography>
            <Typography variant="h5" component="h2">
            <h3 className="font-weight-bold indigo-text py-2" style={{ color: 'rgba(1, 255, 1)' }}>
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
              </h3>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
            <h5>Number of recoveries from COVID-19.</h5>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths, styles.imp)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="card-title">DEATHS</h4>
            </Typography>
            <Typography variant="h5" component="h2">
            <h3 className="font-weight-bold indigo-text py-2" style={{ color: 'rgba(255, 0, 0)' }}>
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              </h3>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
            <h5>Number of deaths caused by COVID-19.</h5>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;