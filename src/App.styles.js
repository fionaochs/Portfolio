import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        '@media screen and (max-width: 767px)': {
            width: '100vw'
        },
    },
}));