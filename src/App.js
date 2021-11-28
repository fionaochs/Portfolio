import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { useStyles } from './App.styles';
import { Header } from './Pages/Header/Header';
import { Footer } from './Pages/Footer/Footer';
import { About } from './Pages/About/About';
import { Techstack } from './Pages/TechStack/TechStack';
import { Tree } from './Pages/Tree/Tree';
import { Home } from './Pages/Home/Home';
import { ProjectsContainer2 } from './Container/ProjectsContainer2';

function App() {
    const styles = useStyles();
    return (
            <BrowserRouter>
                <Container maxWidth="xl" className={styles.root}>
                    <CssBaseline />
                        <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/work" component={ProjectsContainer2} />
                        <Route path="/about" component={Tree} />
                        <Route path="/contact" component={About} />
                        <Route path="/techstack" component={Techstack} />
                    </Switch>
                    <Footer />
                </Container>
            </BrowserRouter>
    );
}

export default App;
