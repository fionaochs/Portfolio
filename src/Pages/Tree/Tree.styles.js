import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
      width: '100vw',
      // height: '5rem',
      marginTop: '5rem'      
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
}));

