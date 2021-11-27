import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'fixed'  
  },
      links: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
        color: theme.palette.common.green.main,
        // marginTop: '-2rem',
        marginRight: '2.5rem',
        // position: 'fixed'

        // padding: '2rem'
        // position: 'fixed'
      },
      // link: {
      //   padding: '0 .4rem 0 .4rem',
      //   fontWeight: '500',
      //   fontSize: '1.2rem',
      //   // color: theme.palette.secondary.main, //white
      //   color: theme.palette.common.green.main, //green
      //   '&:hover': {
      //     color: theme.palette.common.white.main,
      //     // transform: 'scale(1:1.5)'
      //     // fontSize: '1.25rem'
      //   },
      //   '&$focusVisible': {
      //     color: theme.palette.common.white.main,
      //     // fontSize: '1.25rem'
      //   }
      // },
      link: {
        color: theme.palette.common.green.main,
        fontSize: "1.3rem",
        padding: '.5rem .5rem .5rem .5rem',
        // marginLeft: '.5rem',
        // transition: 'all .5s ease',
        outline: 'none',
        '&:hover': {
          border: theme.palette.common.green.main,
          borderStyle: 'solid',
          borderRadius: '5px',
          backgroundColor: theme.palette.common.green.main,
          color: theme.palette.primary.main
        }
      },
    }
));