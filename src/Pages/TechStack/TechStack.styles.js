import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12rem'
  },
  title: {
    fontSize: '1.6rem',
    color: theme.palette.common.green.main, //white
    paddingBottom: '.5rem',
    fontWeight: '550'
  },
  heading: {
    fontSize: '1.2rem',
    color: theme.palette.common.blue.main,
  },
  techstack: {
    display: 'flex',
    flexDirection: 'row',
    margin: '3rem 0rem 3rem 0rem',
    justifyContent: 'center',
    maxWidth: '100%',
    width: '60vw',
    padding: '.5rem'
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
    flexDirection: 'column'
  },
  backEnd: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  languages: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  tools: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  databases: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
}));
