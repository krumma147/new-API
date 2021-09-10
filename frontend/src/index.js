import React, {useState, Suspense, Fragment } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import './Styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.scss';
import App from './Shared/Components/App/App';
import Login from './Modules/User/Components/Login';

let isLogged = true;  //set to false

// let isLogged = !(localStorage.getItem('user-info').includes('không')?true:false);  //set to false

const SetLogin = () =>{
  isLogged = !isLogged;
}

const Root = (
  
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Suspense>  
          <Route path="/login" render={() => {
            return (!isLogged) ? (
              <Login SetLogin={SetLogin} ></Login>
            ) : (
              <Redirect to="/app/post/list" ></Redirect>
            )
          }} ></Route>
          <Route path="/app" render={() => {
            return (isLogged) ? (
              <App SetLogin={SetLogin}></App>
            ) : (
              <Redirect to="/login" ></Redirect>
            )
          }} ></Route>
        </Suspense>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

export default Root;