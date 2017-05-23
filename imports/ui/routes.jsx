import React from 'react';
import { mount } from 'react-mounter';

import App from '/imports/ui/components/App.jsx';
import { ContainerLayout } from '/imports/ui/components/layouts/ContainerLayout.jsx';
import SignIn from '/imports/ui/components/SignIn.jsx';
import SignUp from '/imports/ui/components/SignUp.jsx';
import SplashScreen from '/imports/ui/components/SplashScreen';
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

FlowRouter.route('/signup', {
  action(){
    mount(SignUp, {
      content: (<SignUp />)
    });
  }
});

FlowRouter.route('/splash', {
  action(){
    mount(SplashScreen, {
      content: (<SplashScreen />)
    });
  }
})

FlowRouter.route('/*', {
  action() {
    mount(ContainerLayout, {
      content: (<NotFound />)
    });
  }
});
