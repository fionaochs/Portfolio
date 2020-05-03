import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';

import { useStyles } from './App.styles';
import { Links } from './Pages/Links/Links'
import { Header } from './Pages/Header/Header';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Techstack } from './Pages/TechStack/TechStack';
import { Projects } from './Pages/Projects/Projects';

function App() {
    const styles = useStyles();
    return (
            <BrowserRouter>
                <Container maxWidth="xl" className={styles.root}>
                    <CssBaseline />
                        <Header />
                    <Links />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/techstack" component={Techstack} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </Container>
            </BrowserRouter>
    );
}

export default App;
