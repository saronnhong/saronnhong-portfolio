import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/react-portfolio" component={App} />
                <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
                <Route component={App} />
            </Switch>


        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
