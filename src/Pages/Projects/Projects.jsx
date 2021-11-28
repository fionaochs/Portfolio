import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './Projects.styles';
import shade from '../../Assets/shadespeare.png'
import groupies from '../../Assets/groupies.png'
import alchimia from '../../Assets/alchimia1.png'
// import gabbi from '../../Assets/gabbi.png'
import gabbi from '../../Assets/gabbi2.png'
import { PageTitle } from '../PageTitle/PageTitle';

export const Projects = () => {
    const classes = useStyles();

    const gabbiLS = 'https://www.begabbi.com/'

    // const shadeLS = 'https://shadespeare-insults.herokuapp.com/'
    // const shadeGH = 'https://github.com/Shakespeare-Insult-Bot'

    const alchimiaLS = 'https://alchimia-by-the-meeps.github.io/alchimia/'
    const alchimiaGH = 'https://github.com/Alchimia-by-the-meeps/alchimia'

    // const groupiesLS = 'https://fierce-taiga-25449.herokuapp.com/'
    // const groupiesGH = 'https://github.com/fionaochs/groupies-front-end'

    const title = 'Work'
    return (
        <Grid container>
            <PageTitle title={title} />
            <Grid item xs={12} className={classes.root}>
              <Grid item xs={12} className={classes.imageBox}>
                  <img alt="project" src={gabbi} className={classes.gabbi}/>
              </Grid>
              <Grid xs={12} className={classes.project}>
                <Typography variant="h3" className={classes.h1}>Gabbi</Typography>
                <Typography variant="h3" className={classes.tech}>Node.JS, React, MongoDB</Typography>
                <Typography variant="h3" className={classes.h3}>Gabbi is the world’s first digital platform for women that puts women in charge of their own bodies. Connecting like-minded women who have similar experiences, to learn, share, and support one another as they take control of their health. I work on the back end with TDD for the routes and models.</Typography>
                    <Grid item xs={12} className={classes.links}>
                      <Link className={classes.link} href={gabbiLS} target="_blank">Live site</Link>
                    </Grid>
                </Grid>
              </Grid>
        </Grid>
    );
};

