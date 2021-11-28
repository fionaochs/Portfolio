import React, { useState } from 'react';
import { Grid, Link } from '@material-ui/core';
import { useStyles } from './Links.styles';

export const Links = () => {
    const classes = useStyles();
    const [color, setColor] = useState('#FFF');

    const changeColor = (color) => {
        setColor(color)
    };
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.links}>
                <Link className={classes.link} href="/">Home</Link>
                <Link className={classes.link} href="/work">Work</Link>
                <Link className={classes.link} href="/techstack">Tech Stack</Link>
                <Link className={classes.link} href="/about">About</Link>
                <Link className={classes.link} href="/contact">Contact</Link>
            </Grid>
        </Grid>
    );
};
