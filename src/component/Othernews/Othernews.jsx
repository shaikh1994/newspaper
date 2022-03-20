import React from 'react'
import Grid from '@mui/material/Grid';
import News from './News/News'
import useStyles from './styles';


const Othernews = ({data}) => {
  const classes = useStyles();
 
  return (
    <>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4} >
                {data.sort((d1, d2)=>d1.sort-d2.sort).slice(2,data.length).map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4} lg={3} >
                        <News data={data}  />
                    </Grid>
                ))}
            </Grid>
        </main>
    </>
  )
}

export default Othernews