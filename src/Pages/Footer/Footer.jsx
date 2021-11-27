import React from 'react';
import {Grid, Link, Typography} from '@material-ui/core';
import {useStyles} from './Footer.styles';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import resume from "../../Assets/resume.pdf";

export const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.container}>
                <Typography variant="h1" className={classes.title}>© Fiona Ochs 2020</Typography>
            </Grid>
            <Grid item xs={12} className={classes.icons}>
                <a className={classes.icon} href="https://www.linkedin.com/in/fionaochs/" target="_brel="
                   rel="noopener noreferrer"><FaLinkedinIn className="social-icon"/></a>
                <a className={classes.icon} href="https://github.com/fionaochs" target="_brel="
                   rel="noopener noreferrer"><FaGithub className="social-icon"/></a>
            </Grid>
        </Grid>
    );
};
