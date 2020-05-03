import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'fixed'  
  },
      links: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
        color: theme.palette.primary.main,
        marginTop: '-4rem',
        
      },
      link: {
        padding: '0 .3rem 0 .3rem',
        fontWeight: '550',
        fontSize: '1.2rem',
        color: theme.palette.secondary.main, //white
        '&:hover': {
          color: theme.palette.common.blue.main,
          // transform: 'scale(1:1.5)'
          // fontSize: '1.25rem'
        },
        '&$focusVisible': {
          color: theme.palette.common.blue.main,
          // fontSize: '1.25rem'
        }
      }
    }
));