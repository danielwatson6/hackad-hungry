import { render } from 'react-dom';
import  {browserHistory, BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import App from './components/App.jsx';
import React from 'react';
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';


Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <div>
        {/*<Route path="/" component={Header} /> */}
        <Route exact path="/" component={App} />
        <Route exact path="/signin" component={SignIn} />
     </div>
    </Router>),
    document.getElementById('render-target'))
});
