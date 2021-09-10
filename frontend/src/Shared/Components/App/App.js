import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Exam from '../../../Modules/Exam/Exam';
import Customer from '../../../Modules/Customer/Customer';
import Post from '../../../Modules/Post/Post';
import AppNav from '../AppNavBar/AppNav';
import AppFooter from '../AppFooter/AppFooter'
class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="App">
                <AppHeader />
                <AppNav/>
                <Switch>
                    <Route path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/customer`} component={Customer} />
                    <Route path={`${path}/post`} component={Post} />
                </Switch>
                <AppFooter/>
            </div>
        );
    }
}

export default withRouter(App);