import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './TechStack.styles';
import { FaReact, FaJs, FaNodeJs, FaGithub, FaCss3Alt, FaHtml5} from 'react-icons/fa';

import { DiMongodb, DiPostgresql} from 'react-icons/di';
import { GrHeroku } from 'react-icons/gr';
import { GiJesterHat } from 'react-icons/gi';

export const Techstack = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.techstack} >

                <Grid item xs={12} className={classes.frontEnd}>
                <Typography variant="h3" className={classes.title}>Front End</Typography>
                <Typography variant="h4" className={classes.heading}><FaReact className="social-icon" />React.js</Typography>
                <Typography variant="h4" className={classes.heading}>Redux</Typography>
                </Grid>

                <Grid item xs={12} className={classes.backEnd}>
                <Typography variant="h3" className={classes.title}>Back End</Typography>
                <Typography variant="h4" className={classes.heading}><FaNodeJs className="social-icon" />Express</Typography>
                <Typography variant="h4" className={classes.heading}><FaNodeJs className="social-icon" />Node.js</Typography>
                </Grid>

                <Grid item xs={12} className={classes.tools}>
                <Typography variant="h3" className={classes.title}>Tools</Typography>
                <Typography variant="h4" className={classes.heading}><FaGithub className="social-icon" />Github</Typography>
                <Typography variant="h4" className={classes.heading}><GrHeroku className="social-icon" />Heroku</Typography>
                <Typography variant="h4" className={classes.heading}><GiJesterHat className="social-icon" />Jest</Typography>
                <Typography variant="h4" className={classes.heading}>Material UI</Typography>
                <Typography variant="h4" className={classes.heading}>Netlify</Typography>
                <Typography variant="h4" className={classes.heading}>Twilio</Typography>
                <Typography variant="h4" className={classes.heading}>QUnit</Typography>
                </Grid>

                <Grid item xs={12} className={classes.databases}>
                <Typography variant="h3" className={classes.title}>Databases</Typography>
                <Typography variant="h4" className={classes.heading}><DiMongodb className="social-icon" />MongoDB</Typography>
                <Typography variant="h4" className={classes.heading}><DiMongodb className="social-icon" />Mongoose</Typography>
                <Typography variant="h4" className={classes.heading}><DiPostgresql className="social-icon" />PostgreSQL</Typography>
                </Grid>

                <Grid item xs={12} className={classes.languages}>
                <Typography variant="h3" className={classes.title}>Languages</Typography>
                <Typography variant="h4" className={classes.heading}><FaCss3Alt className="social-icon" />CSS</Typography>
                <Typography variant="h4" className={classes.heading}><FaHtml5 className="social-icon" />HTML</Typography>
                <Typography variant="h4" className={classes.heading}><FaJs className="social-icon" />Javascript</Typography>
                </Grid>

            </Grid>
                <Typography variant="h2" className={classes.more}>More coming soon!</Typography>
        </Grid>
    );
};