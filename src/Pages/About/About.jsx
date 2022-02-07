import React from 'react';
import {Grid, Typography, Link} from '@material-ui/core';
import {useStyles} from './About.styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import resume from '../../Assets/resume.pdf'
import {PageTitle} from '../PageTitle/PageTitle';

export const About = () => {
    const classes = useStyles();
    const title = 'About Me'
    return (
        <Grid container className={classes.root}>
            <PageTitle title={title}/>

            <Grid item xs={12} className={classes.textContainer}>
                <Grid item xs={12} className={classes.about}>
                    <Typography variant="h3" className={classes.h3}>Hi, I'm </Typography>
                    <Typography variant="h2" className={classes.h2}>Fiona Ochs</Typography>,
                    <Typography variant="h3" className={classes.h3}>a Full Stack
                        Software Engineer, with a Bachelors in Neurobiology and experience in the medical industry. <br/><br/>
                        I am passionate about biotech, synthetic biology, fixing healthcare disparities,
                        and sustainability. I am looking for opportunities where my skills as an Engineer and background in medicine can come together.</Typography>
                </Grid>
                <Grid item xs={12} className={classes.text}>
                    <Typography variant="h1" className={classes.title}>I look forward to hearing from you.</Typography>
                    <Typography variant="h2" className={classes.email}>fionalochs@gmail.com</Typography>

                    <Grid item xs={12} className={classes.icons}>
                        <a className={classes.icon} href="https://www.linkedin.com/in/fionaochs/" target="_brel="
                           rel="noopener noreferrer"><FaLinkedinIn className="social-icon"/></a>
                        <a className={classes.icon} href="https://github.com/fionaochs" target="_brel="
                           rel="noopener noreferrer"><FaGithub className="social-icon"/></a>
                        <Link className={classes.link} href={resume} target="_blank">Resume</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
