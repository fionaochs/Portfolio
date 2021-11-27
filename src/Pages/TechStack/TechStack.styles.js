import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10rem',
    // paddingBottom: '5rem',
    background: theme.palette.common.blue.main
  },
  title: {
    fontSize: '1.6rem',
    // color: theme.palette.common.white.main, //white
    // paddingBottom: '.5rem',
    fontWeight: '550'
  },
  heading: {
    fontSize: '1.2rem',
    color: theme.palette.common.white.main,
  },
  techstack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '100%',
    // width: '60vw',
    padding: '1rem',
    color: theme.palette.common.green.main
  },
  more: {
    fontSize: '1.8rem',
    color: theme.palette.common.green.main, //green
    paddingBottom: '.5rem',
    paddingTop: '1rem',
    fontWeight: '550'
  },
  frontEnd: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    '@media screen and (max-width: 767px)': {
      marginTop: '-2.5rem'
    },
  },
  backEnd: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'

  },
  languages: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    '@media screen and (max-width: 767px)': {
      paddingBottom: '15rem'
    },

  },
  tools: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'

  },
  databases: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
  learning: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
  }
}));
