import React, {useState} from 'react';
import {Grid, Typography, Button, Fab, Link} from '@material-ui/core';
import {useStyles} from './ProjectsContainer2.styles';
import viral from '../Assets/GoingViralLogo.png'
import gabbi from '../Assets/gabbi-g.png'
import {FaExternalLinkSquareAlt, FaGithub} from "react-icons/fa";

export const ProjectsContainer2 = () => {
    const classes = useStyles();

    const swLink = '';
    const sw = '/';

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.projectsContainer}>
                <Grid item xs={12} className={classes.imageBox}>
                    <img alt="project" src={sw} className={classes.image}/>
                </Grid>
                <Grid xs={12} className={classes.project}>
                    <Typography variant="h3" className={classes.h1}>SugarWOD</Typography>
                    <Typography variant="h3" className={classes.h3}>Crossfit app</Typography>
                    <Typography variant="h3" className={classes.bullets}>bullet</Typography>
                    <Grid item xs={12} className={classes.links}>
                        <Link className={classes.link} href={swLink} target="_blank"><FaExternalLinkSquareAlt className="social-icon"/></Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.imageBox}>
                    <img alt="project" src={gabbi} className={classes.gabbiImage}/>
                </Grid>
                <Grid xs={12} className={classes.project}>
                    <Typography variant="h3" className={classes.h1}>Gabbi</Typography>
                    <Typography variant="h3" className={classes.h3}>description</Typography>
                    <Typography variant="h3" className={classes.bullets}>bullets</Typography>
                    <Grid item xs={12} className={classes.links}>
                        <Link className={classes.link} href={'https://www.begabbi.com/'} target="_blank"><FaExternalLinkSquareAlt className="social-icon"/></Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.imageBox}>
                    <img alt="project" src={viral} className={classes.viralImage}/>
                </Grid>
                <Grid xs={12} className={classes.project}>
                    <Typography variant="h3" className={classes.h1}>Going Viral</Typography>
                    <Typography variant="h3" className={classes.h3}>Interactive data visualizations for changes in global mobility metrics during times of quarantine.</Typography>
                    <Typography variant="h4" className={classes.bullets}>Built back end routes with Node, and Express</Typography>
                    <Typography variant="h4" className={classes.bullets}>Stored data in MongoDB</Typography>
                    <Typography variant="h4" className={classes.bullets}>Implemented TDD with Jest</Typography>
                    <Typography variant="h4" className={classes.bullets}>Worked with D3 for data visualizations</Typography>
                    <Typography variant="h4" className={classes.bullets}>Built front end with React</Typography>
                    <Typography variant="h4" className={classes.bullets}>Used Material UI for mobile responsiveness</Typography>

                    <Grid item xs={12} className={classes.links}>
                        <Link className={classes.link} href={'https://github.com/Going-Viral'} target="_blank"><FaGithub className="social-icon"/></Link>
                        <Link className={classes.link} href={'https://goingviral.netlify.app/'} target="_blank"><FaExternalLinkSquareAlt className="social-icon"/></Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
/*
* {
    title: 'Going Viral',
    img: viral,
    description: 'Interactive data visualizations for changes in global mobility metrics during times of quarantine.',
    tech: ['MongoDB, Node, React, Material UI, D3'],
    bulletList: ['Built back end routes with Node, and Express',
    'Stored data in MongoDB', 'Implemented TDD with Jest',
    'Worked with D3 for data visualizations', 'Built front end with React', 'Used Material UI for mobile responsiveness'],
    liveLink: 'https://goingviral.netlify.app/',
    repoLink: 'https://github.com/Going-Viral'
  },
  {
    title: 'Gabbi',
    img: gabbi,
    description: 'Digital health platform for women.',
    tech: ['Node.JS, React, MongoDB'],
    bulletList: ['TDD for back end routes and models in Node', 'Connect to MongoDB', 'Integrate data with React front end', 'Material UI for responsive mobile design'],
    liveLink: 'https://www.begabbi.com/',
    repoLink: null
  },
* */