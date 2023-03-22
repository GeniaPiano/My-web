import React from "react";
import './App.css';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './styles/GlobalStyle';
import {theme} from './styles/theme'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
        </ThemeProvider>
    </Router>
  );
}

export default App;
