import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Exam from '../../../Modules/Exam/Exam';
import Customer from '../../../Modules/Customer/Customer';
import Post from '../../../Modules/Post/Post';
import AppNav from '../AppNavBar/AppNav';
class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="App">
                <AppHeader></AppHeader>
                <AppNav />
                <Switch>
                    <Route path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/customer`} component={Customer} />
                    <Route path={`${path}/post`} component={Post} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);