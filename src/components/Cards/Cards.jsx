import React from 'react';
import {Grid} from '@material-ui/core';
import styles from './Cards.module.css';
// import CountUp from 'react-countup';
import cx from 'classnames';
import GridContent from './GridContent';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading ... ';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <GridContent type={cx(styles.card,styles.infected)} number={confirmed} date={lastUpdate} string1="Infected" string2="Number of active cases of COVID-19" />
                <GridContent type={cx(styles.card,styles.recovered)} number={recovered} date={lastUpdate} string1="Recovered" string2="Number of recoveries from COVID-19" />
                <GridContent type={cx(styles.card,styles.deaths)} number={deaths} date={lastUpdate} string1="Deaths" string2="Number of deaths caused by COVID-19" />
            </Grid>
        </div>
    );
}

export default Cards;