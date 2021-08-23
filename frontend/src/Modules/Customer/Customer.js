import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ListCustomer from './Components/ListCustomer/ListCustomer'

class Customer extends Component {
    
    render() {
        const { path } = this.props.match;
        return (
            <div className="Customer">
                <Switch>
                    <Route path={`${path}`} component={ListCustomer} />
                </Switch>
            </div>
        );
    }
}

export default Customer