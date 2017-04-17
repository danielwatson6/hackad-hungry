import { render } from 'react-dom';
import  { BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom';
import App from './components/App.jsx';
import React from 'react';
import SignIn from './components/SignIn.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/signin" component={SignIn} />
      </div>
    </Router>),
    document.getElementById('render-target')
  );
});
