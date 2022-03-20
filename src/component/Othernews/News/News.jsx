import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/bn';

import useStyles from './styles';

const News = ({ data }) => {
    const classes = useStyles();
    const MAX_LENGTH = 70;

    return (
        <Card className= {classes.root}>
                <img className={classes.media} src={data.photo}  />           
            <CardContent>
                <div className={classes.cardContent}>
                    <h5 className={classes.textstyleHeader}>
                        {data.title}
                    </h5>
                    <h6 className={classes.textstyleBody}>                                           
                        {`${data.description.substring(0, MAX_LENGTH)}...`}
                        <p className={classes.time}>{moment.utc(data.time).local('bn').startOf('seconds').fromNow()}</p> 
                    </h6>                
                </div> 
            </CardContent>
    </Card>
    )
}

export default News