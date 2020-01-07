import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RLayout from './r-layout';
import history from '../history';

class RouterView extends Component {
    render() {
        return (
            <Switch history={history}>
                {/* <Route  path='/auth' component={RAuthentication} /> */}
                <Route  path="/" component={RLayout} />
            </Switch>
        );
    }
}


export default RouterView;