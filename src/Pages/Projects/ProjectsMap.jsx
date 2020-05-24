import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './Projects.styles';
import { PageTitle } from '../PageTitle/PageTitle';

export const ProjectsMap = ({ title, img, description, tech, liveLink, repoLink, bulletList }) => {
    const classes = useStyles();

  const bulletArray = { bulletList }.bulletList;
  const bullets = bulletArray.map(item => {
    return (
      <p key={item}>• {item}</p>
    );
  });
    const titlePage = 'Work'
    return (
        <Grid container>
            <PageTitle title={titlePage} />
            <Grid item xs={12} className={classes.root}>
              <Grid item xs={12} className={classes.imageBox}>
                  <img alt="project" src={img} className={classes.image}/>
              </Grid>
              <Grid xs={12} className={classes.project}>
                <Typography variant="h3" className={classes.h1}>{title}</Typography>
                {/* <Typography variant="h3" className={classes.tech}>{tech}</Typography> */}
                <Typography variant="h3" className={classes.h3}>{description}</Typography>
                <Typography variant="h3" className={classes.bullets}>{bullets}</Typography>
                    <Grid item xs={12} className={classes.links}>
                    <Link className={classes.link} href={repoLink} target="_blank">GitHub</Link>
                      <Link className={classes.link} href={liveLink} target="_blank">Live site</Link>
                    </Grid>
                </Grid>
              </Grid>
        </Grid>
    );
};
