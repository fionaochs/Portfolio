import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0rem',
    },
    root: {
      background: 'linear-gradient(to right, rgb(20,146,124), rgb(44, 165, 163))',
      // background: '#4ab19a',
        width: '100vw',
        height: '5rem',
        
      },
      title: {
        color: theme.palette.secondary.main, //white
        fontSize: "1rem",
    }
}));