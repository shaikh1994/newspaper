import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,   
  },
  root: {
    flexGrow: 1,
  },
  box: {
    height: '500px'
  }
  }));

