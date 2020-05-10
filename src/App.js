import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { useStyles } from './App.styles';
// import { Links } from './Pages/Links/Links'
import { Header } from './Pages/Header/Header';
import { Footer } from './Pages/Footer/Footer';
import { About } from './Pages/About/About';
// import { Contact } from './Pages/Contact/Contact';
import { Techstack } from './Pages/TechStack/TechStack';
import { Projects } from './Pages/Projects/Projects';
import { Tree } from './Pages/Tree/Tree';
import { ProjectsMap } from './Pages/Projects/ProjectsMap';
import { ProjectsContainer } from './Container/ProjectsContainer';

function App() {
    const styles = useStyles();
    return (
            <BrowserRouter>
                <Container maxWidth="xl" className={styles.root}>
                    <CssBaseline />
                        <Header />
                    <Switch>
                        <Route exact path="/" component={ProjectsContainer} />
                        <Route path="/about" component={About} />
                        <Route path="/techstack" component={Techstack} />
                        {/* <Route path="/tree" component={Tree} /> */}
                        {/* <Route path="/contact" component={Contact} /> */}
                        {/* <Route path="/" component={Projects} /> */}
                    </Switch>
                    <Footer />
                </Container>
            </BrowserRouter>
    );
}

export default App;
