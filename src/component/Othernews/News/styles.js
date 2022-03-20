import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
      display: 'flex',
      height: '220px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        height: '250px'
      },
  },
  media: {
    height: "60%",
    margin: 'auto 0',
    width:'50%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      height: '50%'
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: { 
    display: 'flex',
    flexDirection: 'column',
  },
  textstyleHeader:{
    margin: '0',
    fontFamily: ('Noto Sans Bengali', 'sans-serif'),
    fontSize: '13px',
    
  },
  textstyleBody:{
    margin: '0',
    paddingTop: '10px',
    fontFamily: ('Noto Sans Bengali', 'sans-serif'),
    fontSize: '10px'
  },
  time: {
    paddingTop:'5px',
    fontWeight: 'bold'
  }
  }));