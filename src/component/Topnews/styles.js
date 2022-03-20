import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      display: 'flex',
      paddingLeft: '10px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      
    },
    text: {
      display: 'flex', 
      flexDirection: 'column',
    },

    textstyle:{
      margin: '0',
    },
    image: {
      width:'250px' ,
      height:'200px',
      [theme.breakpoints.down('sm')]: {
        margin : '0 auto',
      },
    },
    time: {
      paddingTop:'20px',
      fontWeight: 'bold',
      
    }
  }
  ));