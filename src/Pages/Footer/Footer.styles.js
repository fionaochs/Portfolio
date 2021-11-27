import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    root: {
        background: theme.palette.common.green.main,
        width: '100%',
        height: '10rem',
        position: 'absolute',
        left: '0',
        bottom: '0',
        top: '10',
        marginTop: '12rem',
        '@media screen and (max-width: 767px)': {
            height: '8rem'
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: theme.palette.common.blue.main, //white
        fontSize: '1.3rem',
        marginTop: '2rem'
    },
    icon: {
        fontSize: '1.8rem',
        padding: '.5rem',
        color: theme.palette.common.primary, //white
        '&:hover': {
            // backgroundColor: theme.palette.common.blue.main,
            color: theme.palette.common.white.main
        },
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // icon: {
    //     color: theme.palette.common.blue.main,
    //     fontSize: "1.3rem",
    //     padding: '.5rem .5rem 0 .5rem',
    //     // marginLeft: '.5rem',
    //     border: theme.palette.common.green.main,
    //     borderStyle: 'solid',
    //     borderRadius: '5px',
    //     transition: 'all .5s ease',
    //     outline: 'none',
    //     '&:hover': {
    //         backgroundColor: theme.palette.common.blue.main,
    //         color: theme.palette.common.green.main
    //     }
    // },
}));