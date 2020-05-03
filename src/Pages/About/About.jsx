import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './About.styles';
// import river from '../../Assets/river.jpg'

export const About = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={classes.root}>
                <Typography variant="h3" className={classes.h3}>Hi, I'm <span>Fiona Ochs</span>, a Full Stack Software Developer, with a background in Neurobiology. Enjoy figuring out how things work and the processes involved, applying this curiousty towards my love of coding. <br/><br/>
                Producing clean, testable and maintainable code. Interested in the data manipulation and logic driven side of back-end, while also wanting to convert that information to concise data visualizations and user interfaces.<br/><br/>
                When I am not coding, and not stuck at home, I love to travel, be out hiking, do Crossfit, bake healthy treats, play board games and read.</Typography>
            </Grid>
            <Grid item xs={12} className={classes.imageBox}>
            {/* <img alt="logo" src={river} className={classes.image}/> */}
            </Grid>
        </Grid>
    );
};
