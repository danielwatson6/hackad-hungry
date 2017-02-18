import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


const Contributions = new Collection('contributions')


const checkIfOwner = (_id) => {
  const contribution = Contributions.findOne(_id)
  if (!contribution)
    throw new Meteor.Error(404, 'Not found')
  if (Meteor.userId() !== contribution.owner)
    throw new Meteor.Error(403, 'Unauthorized')
}


Meteor.methods({
  'contributions.insert'(amount) {
    // User must be logged in
    check(Meteor.userId(), Matchers.NonEmptyString)
    // Validate user input
    check(amount, Matchers.PositiveNumber)
    // Fill in other attributes and push to db
    const now = new Date()
    contribution.createdAt = now
    contribution.lastEditAt = now
    
  },
  
  'contributions.changeAmount'(_id, amount) {
    checkIfOwner(Meteor.userId())
    // TODO: notify all participants
    Contributions.update(_id, {$set: {amount, lastEditAt: new Date()} })
  },
  
  'contributions.remove'(_id) {
    checkIfOwner(Meteor.userId())
    // TODO: notify all participants
    Contributions.remove(_id)
  },
})


if (Meteor.isServer) {
  Meteor.publish('contributions', function() {
    check(this.userId(), Matchers.NonEmptyString)
    return Contributions.find()
  })
}


export default Contributions
