import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: '1rem',
    },
    h3: {
        fontSize: '1.5rem',
        color: theme.palette.common.blue.main,
        width: '43rem',
        marginTop: '2rem',
    },
    span: {
        fontSize: '1.5rem',
        color: theme.palette.secondary.main, //white
        width: '30rem',
        marginTop: '2rem'
    },
    image: {
        maxWidth: '100%',
        width: '170rem',
        height: '15rem',
        marginTop: '3rem',
        justifyContent: 'center',
    },
    imageBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
