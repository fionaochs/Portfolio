import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2.5rem'
  },
  image: {
    maxWidth: '100%',
    width: '20rem',
    height: '12rem',
    marginTop: '-2rem',
  },
    container: {
    },
    root: {
        paddingTop: '1rem',
        background: 'linear-gradient(to right, rgb(20,146,124), rgb(44, 165, 163))',
        // background: '#4ab19a',
        // maxWidth: '100%',
        width: '100vw',
        height: '11rem'

        // position: 'fixed',
        // paddingBottom: '5rem',
      },
      heading: {
        color: theme.palette.common.blue.main,
        fontSize: "1.55rem",
        marginLeft: '-11rem',
        fontWeight: '550'
        
      },
      title: {
        color: theme.palette.secondary.main, //white
        fontSize: "2.4rem",
        marginLeft: '-13rem',
        fontWeight: '550'
    }
}));

