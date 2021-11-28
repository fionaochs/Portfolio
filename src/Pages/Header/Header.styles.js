import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        // paddingTop: '1rem',
        background: theme.palette.common.blue.main,
        // background: '#4ab19ab0',
        // maxWidth: '100%',
        width: '100%',
        height: '10rem',
        // boxShadow: '0 4px 14px 0 rgba(55, 49, 213 .5)',
        // boxShadow: '0 4px 14px 0 rgba(5, 26, 174, .2)',
        boxShadow: '0 4px 14px 0 rgba(2,12,27,0.3)',
        // boxShadow: '0px 4px 14px  0px rgba(11,7,193,0.25)',
        position: 'fixed',
        paddingBottom: '5rem',
        left: '0',
        top: '0',
    },
    heading: {
        color: theme.palette.common.slate.main,
        // textShadow: '1px 1px 1px #87a3d0',
        fontSize: "1.55rem",
        marginLeft: '2.5rem',
        fontWeight: '550',
        '@media screen and (max-width: 767px)': {
            fontSize: '1.3rem'
        },
    },
    title: {
        color: theme.palette.common.green.main, //white
        // textShadow: '1px 1px 2px #87a3d0',
        fontSize: "2.4rem",
        marginLeft: '2.5rem',
        marginTop: '3rem',
        // marginTop: '5rem',
        fontWeight: '550',
        '@media screen and (max-width: 767px)': {
            fontSize: '2rem'
        },
    }
}));

