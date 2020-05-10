import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#4ab19ab0',
    width: '100%',
    height: '4rem',  
    marginBottom: '2rem'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
      title: {
        color: theme.palette.secondary.main, //white
        fontSize: '2rem',
        textShadow: '1px 1px 2px #87a3d0',
    }
}));