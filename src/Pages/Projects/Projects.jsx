import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './Projects.styles';
import shade from '../../Assets/shadespeare.png'
import groupies from '../../Assets/groupies.png'
import alchimia from '../../Assets/alchimia1.png'

export const Projects = () => {
    const classes = useStyles();

    const shadeLS = 'https://shadespeare-insults.herokuapp.com/'
    const shadeGH = 'https://github.com/Shakespeare-Insult-Bot'

    const alchimiaLS = 'https://alchimia-by-the-meeps.github.io/alchimia/'
    const alchimiaGH = 'https://github.com/Alchimia-by-the-meeps/alchimia'

    const groupiesLS = 'https://fierce-taiga-25449.herokuapp.com/'
    const groupiesGH = 'https://github.com/fionaochs/groupies-front-end'

    return (
        <Grid container>
            <Grid item xs={12} className={classes.root}>
              <Grid item xs={12} className={classes.imageBox}>
                  <img alt="project" src={shade} className={classes.shade}/>
              </Grid>
              <Grid xs={12} className={classes.project}>
                <Typography variant="h3" className={classes.h1}>ShadeSpeare, Bard of Insults</Typography>
                <Typography variant="h3" className={classes.tech}>Node.JS, React, MongoDB, Twilio, Express</Typography>
                <Typography variant="h3" className={classes.h3}>Markov generated insult bot that allows the user to chat with Shadespeare, who generates responses seeded with the users input. I worked on the backend data and routes using MongoDB and Express and developed a zoom bot with Twilio for text to speech functionality.</Typography>
                    <Grid item xs={12} className={classes.links}>
                      <Link className={classes.link} href={shadeGH} target="_blank">GitHub</Link>
                      <Link className={classes.link} href={shadeLS} target="_blank">Live site</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <Grid item xs={12} className={classes.imageBox}>
                  <img alt="project" src={alchimia} className={classes.alchimia}/>
              </Grid>
              <Grid xs={12} className={classes.project}>
                <Typography variant="h3" className={classes.h1}>Alchimia</Typography>
                <Typography variant="h3" className={classes.tech}>Javascript, HTML, CSS</Typography>
                <Typography variant="h3" className={classes.h3}>Tile based board game crafted in Javascript. I implemented correct tile validation by using array manipulations. Developed an instructional modal to display over board game.</Typography>
                    <Grid item xs={12} className={classes.links}>
                      <Link className={classes.link} href={alchimiaGH} target="_blank">GitHub</Link>
                      <Link className={classes.link} href={alchimiaLS} target="_blank">Live site</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <Grid item xs={12} className={classes.imageBox}>
                  <img alt="project" src={groupies} className={classes.groupies}/>
              </Grid>
              <Grid xs={12} className={classes.project}>
                <Typography variant="h3" className={classes.h1}>Groupies, connecting through concerts</Typography>
                <Typography variant="h3" className={classes.tech}>React, SQL, CSS</Typography>
                <Typography variant="h3" className={classes.h3}>Social media app for concert lovers to connect with friends and share their upcoming concerts on social media platforms. I designed the user interface with React, developed back end routes for hitting our API, stored data in SQL, and implemented NPM libraries for social media sharing.</Typography>
                    <Grid item xs={12} className={classes.links}>
                      <Link className={classes.link} href={groupiesGH} target="_blank">GitHub</Link>
                      <Link className={classes.link} href={groupiesLS} target="_blank">Live site</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

