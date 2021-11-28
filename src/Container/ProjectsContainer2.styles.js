import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '10rem',
        backgroundColor: theme.palette.common.blue.main,
    },
    button: {
        color: theme.palette.common.blue.main,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main, //green
        boxShadow: '0px 3px 5px -1px #4e8f1ef, 0px 6px 10px 0px #4e8f1ef, 0px 1px 18px 0px #4e8f1ef'
    },
    projectsContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '12rem'
    },
    project: {
        display: 'flex',
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '1rem 1rem 2rem 1rem',
        borderBottom: '1px solid #0b7d82',
        paddingBottom: '2rem'
    },
    h3: {
        fontSize: '1.4rem',
        color: theme.palette.common.blue.main,
    },
    gabbi: {
        maxWidth: '100%',
        width: '15rem',
        height: '15rem',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '2px 2px 2px 2px #4e8f1ef'
    },
    h1: {
        fontSize: '1.5rem',
        color: theme.palette.common.blue.main,
        fontWeight: '550',
        paddingBottom: '1rem'
    },
    tech: {
        fontSize: '1.2rem',
        color: theme.palette.common.green.main, //green
        fontStyle: 'italic'
    },
    imageBox: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left'
    },
    viralImage: {
        width: '20%',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gabbiImage: {
        width: '10%',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    swImage: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    links: {
        display: "flex",
        justifyContent: 'center',
        color: theme.palette.common.green.main, //green

    },
    link: {
        padding: '0 .3rem 0 .3rem',
        fontWeight: '550',
        fontSize: '1.5rem',
        color: theme.palette.common.green.main, //green
        '&:hover': {
            color: theme.palette.common.slate.main
        },
        '&$focusVisible': {
            color: theme.palette.common.slate.main,
        }
    },
    bullets: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '1.5rem',
        color: theme.palette.common.slate.main
    }
}));