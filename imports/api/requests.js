import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


const Requests = new Collection('requests')


Meteor.methods({
  'requests.insert'(message) {i
    // checks for user
    if (Meteor.userId() == null)
      throw new Meteor.Error(403, 'Unauthorized')

  	check(message, Matchers.NonEmptyString)

    // Fill in other attributes and push to db
    const request = { message }
    request.createdAt = new Date()
    Requests.insert(request)
  },

  'restaurants.update'(attributes) {
    Requests.message = Matchers.NonEmptyString

  },
})

// Requests don't need to be published to client
export default Requests;
