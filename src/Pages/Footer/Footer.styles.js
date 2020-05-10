import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  
  root: {
    // background: 'linear-gradient(to right, rgb(20,146,124), rgb(44, 165, 163))',
    // background: '#4ab19a',
    background: '#4ab19ab0',
    width: '100%',
      height: '5rem',
      position: 'absolute',
      left: '0',
      bottom: '0',
      marginTop: '11rem'      
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // marginBottom: '0rem',
      // position: 'fixed',
      // left: '0',
      // bottom: '0',
      // width: '100%',
    },
      title: {
        color: theme.palette.secondary.main, //white
        fontSize: '1.3rem',
    }
}));