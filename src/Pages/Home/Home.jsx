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
                <Typography variant="h3" className={classes.h3}>I'm a Full Stack
                    Software Engineer. I enjoy figuring out how things work and
                    the processes involved, and I apply this curiosity towards my love of coding. <br/><br/>
                    Striving to produce clean, testable and maintainable code. Interested in the data manipulation
                    and logic driven side of back-end, while also a lover of React, clean UI, and converting
                    information to concise data visualizations.</Typography>
            </Grid>
        </Grid>
    );
};
