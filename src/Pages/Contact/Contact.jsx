import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './Contact.styles';
import hobbit from '../../Assets/hobbitholecrop2.png'
import resume from '../../Assets/resume.pdf'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Contact = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.imageContainer} >
                <img alt="logo" src={hobbit} className={classes.image}/>

                <Grid item xs={12} className={classes.text}>
                  <Typography variant="h1" className={classes.title}>I look forward to hearing from you.</Typography>
                  <Typography variant="h2" className={classes.email}>fionalochs@gmail.com</Typography>
                  <Typography variant="h2" className={classes.resume}>Find my resume<Link className={classes.link} href={resume} target="_blank">here</Link>
                  </Typography>

                    <Grid item xs={12} className={classes.icons}>
                      <a className={classes.icon} href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                      <a  className={classes.icon} href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
