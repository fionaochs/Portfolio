import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './TechStack.styles';

export const Techstack = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.techstack} >

                <Grid item xs={12} className={classes.frontEnd}>
                <Typography variant="h3" className={classes.title}>Front End</Typography>
                <Typography variant="h4" className={classes.heading}>React.js</Typography>
                <Typography variant="h4" className={classes.heading}>Redux</Typography>
                </Grid>

                <Grid item xs={12} className={classes.backEnd}>
                <Typography variant="h3" className={classes.title}>Back End</Typography>
                <Typography variant="h4" className={classes.heading}>Express</Typography>
                <Typography variant="h4" className={classes.heading}>Node.js</Typography>
                </Grid>

                <Grid item xs={12} className={classes.tools}>
                <Typography variant="h3" className={classes.title}>Tools</Typography>
                <Typography variant="h4" className={classes.heading}>Github</Typography>
                <Typography variant="h4" className={classes.heading}>Heroku</Typography>
                <Typography variant="h4" className={classes.heading}>Jest</Typography>
                <Typography variant="h4" className={classes.heading}>Material UI</Typography>
                <Typography variant="h4" className={classes.heading}>Netlify</Typography>
                <Typography variant="h4" className={classes.heading}>Twilio</Typography>
                <Typography variant="h4" className={classes.heading}>QUnit</Typography>
                </Grid>

                <Grid item xs={12} className={classes.databases}>
                <Typography variant="h3" className={classes.title}>Databases</Typography>
                <Typography variant="h4" className={classes.heading}>MongoDB</Typography>
                <Typography variant="h4" className={classes.heading}>Mongoose</Typography>
                <Typography variant="h4" className={classes.heading}>PostgreSQL</Typography>
                </Grid>

                <Grid item xs={12} className={classes.languages}>
                <Typography variant="h3" className={classes.title}>Languages</Typography>
                <Typography variant="h4" className={classes.heading}>CSS</Typography>
                <Typography variant="h4" className={classes.heading}>HTML</Typography>
                <Typography variant="h4" className={classes.heading}>Javascript</Typography>
                </Grid>

            </Grid>
                <Typography variant="h2" className={classes.more}>More coming soon!</Typography>
        </Grid>
    );
};