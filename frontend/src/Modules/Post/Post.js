import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FormPost from './Components/Post/FormPost'
import ListPost from './Components/Post/ListPost'
class Post extends Component {
    
    render() {
        const { path } = this.props.match;
        return (
            <div className="Customer">
                <Switch>
                    <Route path={`${path}/form`} component={FormPost} />
                    <Route path={`${path}/list`} component={ListPost} />
                </Switch>
            </div>
        );
    }
}

export default Post