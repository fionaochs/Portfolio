import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.blue.main, //background
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'center',
        // flexWrap: 'nowrap',
        marginTop: '10rem',
        // paddingBottom: '5rem',
        // '@media screen and (max-width: 767px)': {
        //     width: '100%'
        // },
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5rem',
        width: '15rem',
        // marginLeft: '15rem',
        '@media screen and (max-width: 767px)': {
            margin: '0'
        },
    },
    h3: {
        fontSize: '1.5rem',
        color: theme.palette.common.green.main,
        // width: '43rem',
        marginRight: '.5rem',
    },
    h2: {
        fontSize: '2rem',
        color: theme.palette.common.slate.main, //white
        // width: '30rem',
        // marginTop: '2rem'
    },
    about: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '.5rem',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5rem',
        marginRight: '15rem',
        padding: '1rem',
        color: theme.palette.common.slate.main,
        '@media screen and (max-width: 767px)': {
            margin: '0 0 2rem 0'
        },
    },
}));
