import React, { useState } from 'react';
import { Grid, Typography, Button, Fab } from '@material-ui/core';
import { useStyles } from './ProjectsContainer.styles';
import { projects } from '../Data/Data';
import { ProjectsMap } from '../Pages/Projects/ProjectsMap';

export const ProjectsContainer = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
  
    const handleIncrement = (event) => {
      event.preventDefault();
      if(index === 4) setIndex(0);
      else setIndex(index + 1);
    };
  
    const handleDecrement = (event) => {
      event.preventDefault();
      if(index === 0) setIndex(4);
      else setIndex(index - 1);
    };
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.projectsContainer} >
            <Fab className={classes.button} onClick={handleDecrement}>&lt;</Fab>
              <ProjectsMap {...projects[index]}/>
            <Fab className={classes.button} onClick={handleIncrement}>&gt;</Fab>
            </Grid>
        </Grid>
    );
};