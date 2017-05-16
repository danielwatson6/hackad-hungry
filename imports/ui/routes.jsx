import React from 'react';
import { mount } from 'react-mounter';

import App from '/imports/ui/components/App.jsx';
import { ContainerLayout } from '/imports/ui/components/layouts/ContainerLayout.jsx';
import SignIn from '/imports/ui/components/SignIn.jsx';
import NotFound from '/imports/ui/components/layouts/NotFound.jsx';

FlowRouter.route('/', {
  action() {
    mount(ContainerLayout, {
        content: (<App />)
    });
  }
});

FlowRouter.route('/signin', {
  action() {
    mount(SignIn, {
      content: (<SignIn />)
    });
  }
});

FlowRouter.route('/*', {
  action() {
    mount(ContainerLayout, {
      content: (<NotFound />)
    });
  }
});
