import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: '2rem',
      paddingBottom: '1rem',
      // marginLeft: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@media screen and (max-width: 767px)': {
          margin: '10rem 0 0rem 0',
      },
    },
    container: {   
      width: '100%',
      // height: 'auto',
      // display: 'flex',
      // position: 'relative',
      // textAlign: 'center',
      // paddingBottom: '50%',
      // overflow: 'hidden',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    oneToOne: {
      // paddingBottom: '100%' 
    }
}));

