import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem'
    },
    project: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '1rem'
    },
    h3: {
        fontSize: '1.4rem',
        color: theme.palette.common.blue.main,
    },
    shade: {
        maxWidth: '100%',
        width: '20rem',
        height: '20rem',
        justifyContent: 'center',
        // boxShadow: '1px 1px 2px 2px aliceblue'
        borderRadius: '1rem'

    },
    alchimia: {
        maxWidth: '100%',
        width: '20rem',
        height: '20rem',
        justifyContent: 'center',
        borderRadius: '1rem'

    },
    groupies: {
        maxWidth: '100%',
        width: '20rem',
        height: '20rem',
        justifyContent: 'center',
        borderRadius: '1rem'

    },
    h1: {
      fontSize: '1.5rem',
      color: theme.palette.secondary.main,
      fontWeight: '550',
      paddingBottom: '1rem'
    },
    tech: {
      fontSize: '1.2rem',
      color: theme.palette.secondary.main,
      fontStyle: 'italic'
    },
    imageBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    links: {
      display: "flex",
      justifyContent: 'center',
      color: theme.palette.primary.main,
      
    },
    link: {
      padding: '0 .3rem 0 .3rem',
      fontWeight: '550',
      fontSize: '1.2rem',
      color: theme.palette.secondary.main, //white
      '&:hover': {
        color: theme.palette.common.blue.main
      },
      '&$focusVisible': {
        color: theme.palette.common.blue.main,
      }
    }
}));