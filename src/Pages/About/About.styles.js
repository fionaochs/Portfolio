import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container: {
        //   backgroundColor: theme.palette.secondary.main, //background
          backgroundColor: '#fff', //background
          // backgroundColor: 'linear-gradient(to right, rgb(0,109,74), #2CA5A3)', //background
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            marginTop: '12rem'
        },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: '2rem',
        // marginTop: '15rem'
    },
    h3: {
        fontSize: '1.5rem',
        color: theme.palette.common.blue.main,
        width: '43rem',
        marginTop: '2rem',
    },
    span: {
        fontSize: '1.5rem',
        color: theme.palette.common.red.main,
        width: '43rem',
        marginTop: '2rem',
    },
    // span: {
    //     fontSize: '1.5rem',
    //     color: theme.palette.secondary.main, //white
    //     width: '30rem',
    //     marginTop: '2rem'
    // },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        },
    image: {
        maxWidth: '100%',
        width: '20rem',
        height: '20rem',
        marginBottom: '-5rem',
        paddingTop: '1rem'
        },
        email: {
            color: theme.palette.common.blue.main,
            fontSize: "1.5rem",
            padding: '.5rem',
        },
        resume: {
            color: theme.palette.common.blue.main,
            fontSize: "1.5rem",
            padding: '.5rem',
        },
        link: {
            padding: '0 .5rem 0 .5rem',
            fontSize: '1.5rem',
            textDecoration: 'underline',
            color: theme.palette.common.green.main, //white
            '&:hover': {
            color: theme.palette.common.blue.main,
            }
        },
        title: {
            color: theme.palette.common.red.main,
            fontSize: "1.5rem",
            padding: '.5rem',
            fontWeight: '550'
        },
        text: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '5rem',
            padding: '1rem',
        },
        icon: {
            fontSize: '1.5rem',
            padding: '.5rem',
            color: theme.palette.common.green.main, //white
        '&:hover': {
            color: theme.palette.common.blue.main,
        },
        },
        icons: {
            display: 'flex',
            flexDirection: 'row',
        }    
}));
