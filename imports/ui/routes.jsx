import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import Layout from './components/Layout.jsx'
import Campaigns from './components/Campaigns.jsx'
import Campaign from './components/Campaign.jsx'


//=== UI handled by FlowRouter ===//

const pathDidChange = (newPath) => {
  // gets called whenever the path changes
}

Tracker.autorun(function() {
    FlowRouter.watchPathChange()
    const path = FlowRouter.current().path
    pathDidChange(path)
})


//=== Helper functions and abstractions ===//

// FastRender subscriptions
// See https://github.com/meteorhacks/fast-render
const subscribe = (sub, paramsFunc) => {
  return function(params, queryParams) {
    paramsFuncCall = paramsFunc ? paramsFunc(params) : null
    this.register(sub, Meteor.subscribe(sub, paramsFuncCall))
  }
}

// Abstraction for rendering inside `Layout` component
const render = (func) => {
  return (params) => {
    mount(Layout, {
      content() { return func(params) }
    })
  }
}


//=== Routes ===//

FlowRouter.route('/campaign/:_id', {
  name: 'campaigns',
  subscriptions: subscribe('campaigns'),
  action: render(() => { return <Campaign /> }),
})

FlowRouter.route('/', {
  name: 'campaigns',
  subscriptions: subscribe('campaigns'),
  action: render(() => { return <Campaigns /> }),
})
