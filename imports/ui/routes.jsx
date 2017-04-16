import { render } from 'react-dom';
import  { BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom';
import App from './components/App.jsx';
import React from 'react';

Meteor.startup(() => {
  render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.getElementById('render-target')
  );
});
