import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.blue.main, //background
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // flexWrap: 'nowrap',
        marginTop: '10rem',
        // paddingBottom: '5rem',
        // '@media screen and (max-width: 767px)': {
        //     width: '100%'
        // },
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: '5rem',
        marginLeft: '15rem',
        '@media screen and (max-width: 767px)': {
            margin: '0'
        },
    },
    h3: {
        fontSize: '1.5rem',
        color: theme.palette.common.green.main,
        // width: '43rem',
        // marginTop: '2rem',
    },
    h2: {
        fontSize: '2rem',
        color: theme.palette.common.slate.main, //white
        // width: '30rem',
        // marginTop: '2rem'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    email: {
        color: theme.palette.common.slate.main,
        fontSize: "1.5rem",
        padding: '.5rem',
        '@media screen and (max-width: 767px)': {
            marginBottom: '1.5rem'
        },
    },
    link: {
        color: theme.palette.common.green.main,
        fontSize: "1.3rem",
        padding: '.5rem .5rem .5rem .5rem',
        fontWeight: 'bold',
        // marginLeft: '.5rem',
        // border: theme.palette.common.green.main,
        // borderStyle: 'solid',
        // borderRadius: '5px',
        // transition: 'all .5s ease',
        outline: 'none',
        '&:hover': {
            backgroundColor: theme.palette.common.green.main,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            // border: theme.palette.common.green.main,
            // borderStyle: 'solid',
            borderRadius: '5px',
            // transition: 'all .5s ease'
        }
    },
    title: {
        color: theme.palette.common.slate.main,
        fontSize: "1.5rem",
        padding: '.5rem',
        fontWeight: '550'
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '.5rem',
        marginRight: '15rem',
        padding: '1rem',
        color: theme.palette.common.slate.main,
        '@media screen and (max-width: 767px)': {
            margin: '0 0 2rem 0'
        },
    },
    icon: {
        fontSize: '1.8rem',
        padding: '.5rem',
        color: theme.palette.common.green.main, //white
        '&:hover': {
            // color: theme.palette.common.slate.main,
            backgroundColor: theme.palette.common.green.main,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            // border: theme.palette.common.green.main,
            // borderStyle: 'solid',
            borderRadius: '5px',
        },

    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1.5rem',
        '@media screen and (max-width: 767px)': {
            margin: '0 0 10rem 0',
            fontSize: '1rem',
        },
        // padding: '1rem'
    },
}));
