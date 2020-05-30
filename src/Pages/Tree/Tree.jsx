import React from 'react';
import { Grid } from '@material-ui/core';
import './Tree.css';
import { useStyles } from './Tree.styles.js';
import { TreeD3 } from './TreeD3';

export const Tree = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
            <Grid item xs={12} className={`${classes.container} ${classes.oneToOne}`} >
              <TreeD3 />
            </Grid>
        </Grid>
  )
}