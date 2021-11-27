import React from 'react';
import {Grid, Typography, Link} from '@material-ui/core';
import {useStyles} from './About.styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import hobbit from '../../Assets/hobbitholecrop2.png'
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
                    <Typography variant="h3" className={classes.h3}>Hi, I'm <span>Fiona Ochs</span>, a Full Stack
                        Software Engineer, with a background in Neurobiology. I enjoy figuring out how things work and
                        the processes involved, and I apply this curiousty towards my love of coding. <br/><br/>
                        Striving to produce clean, testable and maintainable code. Interested in the data manipulation
                        and logic driven side of back-end, while also a lover of React, clean UI, and converting
                        information to concise data visualizations.<br/><br/>
                        When I am not coding, and not stuck at home, I love to travel, be out hiking, do Crossfit, bake
                        healthy treats, play board games and read.</Typography>
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
