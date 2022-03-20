import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import moment from 'moment';
import 'moment/locale/bn';

import useStyles from './styles';

const Topnews = ({data}) => {
  const classes = useStyles();
  const MAX_LENGTH = 200;
   
  return (
    <>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} >
              <Card className={classes.card} >
                <Box className={classes.text} >
                  <h4 className={classes.textstyle}>
                  {data.map((data) => {
                                  if (data.sort===1)
                                    return <p>{data.title}</p> 
                              })}
                  </h4>
                  <h6 className={classes.textstyle}>
                  {data.map((data) => {
                                  if (data.sort===1)
                                  
                                    return (
                                      <> 
                                    <p>{`${data.description.substring(0, MAX_LENGTH)}...`}</p>
                                    <p className={classes.time}>{moment.utc(data.time).local('bn').startOf('seconds').fromNow()}</p>
                                    </>
                                    )
                              })}
                  </h6>
                </Box>
                {data.map((data) => {
                if (data.sort===1)
                  return <img src={data.photo} className={classes.image} /> 
                })}
              </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.card} >
                <Box className={classes.text} >
                  <h4 className={classes.textstyle}>
                  {data.map((data) => {
                                  if (data.sort===2)
                                    return <p>{data.title}</p> 
                              })}
                  </h4>
                  <h6 className={classes.textstyle}>
                  {data.map((data) => {
                                  if (data.sort===2)
                                    return (
                                      <> 
                                        <p>{`${data.description.substring(0, MAX_LENGTH)}...`}</p>
                                        <p className={classes.time}>{moment.utc(data.time).local('bn').startOf('seconds').fromNow()}</p>
                                      </>
                                    )
                              })}
                  </h6>
                </Box>
                {data.map((data) => {
                if (data.sort===2)
                  return <img src={data.photo} className={classes.image}  /> 
                })}
              </Card>
          </Grid>
        </Grid>
  </>
  )
}

export default Topnews
