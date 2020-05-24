import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: '5rem',
        // background: 'white'
    },
    project: {
      display: 'flex',
      // maxWidth: '100%',
      // width: '60%',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '1rem 1rem 2rem 1rem',
      borderBottom: '1px solid #0b7d82',
      paddingBottom: '2rem'

    },
    h3: {
        fontSize: '1.4rem',
        color: theme.palette.common.green.main,
        width: '60vw'
    },
    image: {
        maxWidth: '100%',
        width: '12rem',
        height: '12rem',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '2px 2px 2px 2px #4e8f1ef'
    },
    shade: {
        maxWidth: '100%',
        width: '6rem',
        height: '6rem',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '2px 2px 2px 2px #4e8f1ef'
        // #4ab19a green footer?
        // #fff background color
    },
    alchimia: {
        maxWidth: '100%',
        width: '6rem',
        height: '6rem',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '2px 2px 2px 2px #4e8f1ef'

    },
    groupies: {
        maxWidth: '100%',
        width: '6rem',
        height: '6rem',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '2px 2px 2px 2px #4e8f1ef'

    },
    gabbi: {
        maxWidth: '100%',
        width: '6rem',
        height: '6rem',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '2px 2px 2px 2px #4e8f1ef'
    },
    h1: {
      fontSize: '1.5rem',
      color: theme.palette.common.blue.main,
      fontWeight: '550',
      paddingBottom: '1rem'
    },
    bullets: { // formerly tech
      fontSize: '1.5rem',
      color: theme.palette.common.blue.main, //green
      // fontStyle: 'italic'
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
      color: theme.palette.common.green.main, //green
      
    },
    link: {
      padding: '0 .3rem 0 .3rem',
      fontWeight: '550',
      fontSize: '1.2rem',
      color: theme.palette.common.green.main, //green
      '&:hover': {
        color: theme.palette.common.blue.main
      },
      '&$focusVisible': {
        color: theme.palette.common.blue.main,
      }
    }
}));