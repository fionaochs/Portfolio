import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    maxWidth: '100%',
    width: '20rem',
    height: '20rem',
    // marginLeft: '5vw'
  },
    container: {
      // backgroundColor: theme.palette.secondary.main, //background
      backgroundColor: '#fff', //background
    },
    root: {
      backgroundColor: theme.palette.secondary.main, //background
        // backgroundColor: 'linear-gradient(to right, rgb(0,109,74), #2CA5A3)', //background
        paddingTop: '1rem'
      },
      email: {
        color: theme.palette.common.blue.main,
        fontSize: "1.5rem",
        padding: '.5rem',
      },
      resume: {
        color: theme.palette.common.blue.main,
        fontSize: "1.5rem",
        padding: '.5rem',
      },
      link: {
        padding: '0 .5rem 0 .5rem',
        fontSize: '1.5rem',
        textDecoration: 'underline',
        color: theme.palette.common.green.main, //white
        '&:hover': {
          color: theme.palette.common.blue.main,
        }
      },
      title: {
        color: theme.palette.common.red.main,
        fontSize: "1.5rem",
        padding: '.5rem',
        fontWeight: '550'
    },
    text: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5rem',
      padding: '1rem',
    },
    icon: {
      fontSize: '1.5rem',
      padding: '.5rem',
      color: theme.palette.common.green.main, //white
      '&:hover': {
        color: theme.palette.common.blue.main,
      },
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
    }
}));
