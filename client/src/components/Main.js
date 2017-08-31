import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from '../containers/Register';
import FindMeet from '../containers/FindMeet';
import PostMeet from '../containers/PostMeet';
import Login from '../containers/Login';
import Profile from './Profile';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post-meet" component={PostMeet} />
        <Route path="/register" render={routeProps => <Register {...props} forRoute={routeProps} />} />
        <Route path="/find-meet" component={FindMeet} />
        <Route path="/login" render={routeProps => <Login {...props} forRoute={routeProps} />} />
        <Route path="/logout" component={Home} />
      {/*not working yet*/}
        <Route path="/profile" render={routeProps => <Profile {...props} forRoute={routeProps} />} />
      </Switch>
    </main>
  );
};

export default Main;
