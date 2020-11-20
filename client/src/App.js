import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import './style/material-dashboard.min.css';
import './style/demo.css';
import Home from './components/Home';
import Posts from './components/posts';
import PreLoader from './components/layout/PreLoader';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <React.Fragment>
                    <PreLoader />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/post-list" component={Posts} />
                    </Switch>
                </React.Fragment>
            </Router>
        </Provider>
    );
};

export default App;
