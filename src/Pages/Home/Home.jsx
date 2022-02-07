import React from 'react';
import {Grid, Typography, Link} from '@material-ui/core';
import {useStyles} from './Home.styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import resume from '../../Assets/resume.pdf'
import {PageTitle} from '../PageTitle/PageTitle';

export const Home = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.textContainer}>
                <Grid item xs={12} className={classes.about}>
                    <Typography variant="h3" className={classes.h3}>Hi, I'm </Typography>
                    <Typography variant="h2" className={classes.h2}>Fiona Ochs</Typography>,
                </Grid>
                <Typography variant="h3" className={classes.h3}> a Full Stack
                    Software Engineer. Passionate about biotech, synthetic biology, fixing healthcare disparities,
                    sustainability and opportunities where my skills as an Engineer and background in medicine can come together.
                </Typography>
            </Grid>
        </Grid>
    );
};
