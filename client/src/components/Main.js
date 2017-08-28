import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from '../containers/Register';
import Explore from '../containers/Explore';
import PostMeet from '../containers/PostMeet';
import Login from '../containers/Login';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post-meet" component={PostMeet} />
        <Route path="/register" render={routeProps => <Register {...props} forRoute={routeProps} />} />
        <Route path="/find-job" component={Explore} />
        <Route path="/login" render={routeProps => <Login {...props} forRoute={routeProps} />} />
        <Route path="/logout" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
