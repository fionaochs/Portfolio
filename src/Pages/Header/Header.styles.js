import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
        paddingTop: '1rem',
        // background: 'linear-gradient(to right, rgb(20,146,124), rgb(44, 165, 163))',
        background: '#fff',
        // background: '#4ab19ab0',
        // maxWidth: '100%',
        width: '100%',
        height: '11rem',
        boxShadow: '2px 2px 2px #0c7982',       
        position: 'fixed',
        paddingBottom: '5rem',
        left: '0',
        top: '0',
        zIndex: 100
      },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2.5rem',
  },
  image: {
    maxWidth: '100%',
    width: '20rem',
    height: '12rem',
    marginTop: '-2rem',
  },
      heading: {
        color: theme.palette.common.blue.main,
        textShadow: '1px 1px 1px #87a3d0',
        fontSize: "1.55rem",
        marginLeft: '-13.2rem',
        fontWeight: '550'
        
      },
      title: {
        color: theme.palette.common.green.main, //white
        textShadow: '1px 1px 2px #87a3d0',
        fontSize: "2.4rem",
        marginLeft: '-14rem',
        fontWeight: '550'
    }
}));

