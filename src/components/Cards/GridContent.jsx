import React from 'react';
import CountUp from 'react-countup';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';

const GridContent = ({type,number,date,string1,string2}) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={type}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{string1}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={number.value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                <Typography variant="body2">{string2}</Typography>
            </CardContent>
        </Grid>
    );
}

export default GridContent;