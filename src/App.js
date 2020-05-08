import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Carousel from './Carousel';
// import background from './Assets/treeBark.png'

import { useStyles } from './App.styles';
import { Links } from './Pages/Links/Links'
import { Header } from './Pages/Header/Header';
import { Footer } from './Pages/Footer/Footer';
import { About } from './Pages/About/About';
// import { Contact } from './Pages/Contact/Contact';
import { Techstack } from './Pages/TechStack/TechStack';
import { Projects } from './Pages/Projects/Projects';
import { Tree } from './Pages/Tree/Tree';
// import { Neurons } from './Neurons.js'

function App() {
    const styles = useStyles();
    return (
            <BrowserRouter>
                <Container maxWidth="xl" className={styles.root}>
                    <CssBaseline />
                        <Header />
                        {/* <img alt="logo" src={background} className={classes.image}/> */}
                    {/* <Tree/> */}
                    <Links />
                    <Switch>
                        <Route exact path="/about" component={About} />
                        <Route path="/techstack" component={Techstack} />
                        {/* <Route path="/tree" component={Tree} /> */}
                        {/* <Route path="/contact" component={Contact} /> */}
                        <Route path="/" component={Projects} />
                    </Switch>

                    <Footer />
                </Container>
            </BrowserRouter>
    );
}

export default App;
