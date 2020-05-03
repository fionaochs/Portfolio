import React, { useState } from 'react';
import { Grid, Link } from '@material-ui/core';
import { useStyles } from './Links.styles';

export const Links = () => {
    const classes = useStyles();
    const [linkColor,setLinkColor]=useState('#f0f8ff');

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.links}>
                <Link className={classes.link} href="/" 
                style={{color:linkColor}} 
                onClick={()=>{setLinkColor('#0f3568')}}>About</Link>
                <Link className={classes.link} href="/contact">Contact</Link>
                <Link className={classes.link} href="/projects">Projects</Link>
                <Link className={classes.link} href="/techstack">Tech Stack</Link>
            </Grid>
        </Grid>
    );
};
