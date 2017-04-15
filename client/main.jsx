import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/components/App.jsx';
import React from 'react';

import '/imports/ui/vendor/bootstrap/js';
import '/imports/ui/routes.jsx';

Meteor.startup(()=> {
  render(<App />, document.getElementById('render-target'));
  }
);
