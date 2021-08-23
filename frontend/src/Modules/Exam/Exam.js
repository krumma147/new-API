import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FormExam from './Components/FormExam/FormExam'

class Exam extends Component {
    

    render() {
        const { path } = this.props.match;
        return (
            <div className="Exam">
                <Switch>
                    <Route path={`${path}`} component={FormExam} />
                </Switch>
            </div>
        );
    }
}

export default Exam