import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


export default const Requests = new Collection('requests')

Meteor.methods({
  'requests.insert'(request) {
    // checks for user
    if (Meteor.userId() == null)
      throw new Meteor.Error(403, 'Unauthorized')  

  	check(request, {
      message: Matchers.NonEmptyString,
    })
    
    // Fill in other attributes and push to db
    const now = new Date()
    request.sentAt = now
    Requests.insert(request)
  },
  
  'restaurants.update'(attributes) {
    Requests.message = Matchers.NonEmptyString
  }
})