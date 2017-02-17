import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


export default const Contributions = new Collection('contributions')


const checkIfOwner = (_id) => {
  const contribution = Contributions.findOne(_id)
  if (!contribution)
    throw new Meteor.Error(404, 'Not found')
  if (Meteor.userId() !== contribution.owner)
    throw new Meteor.Error(403, 'Unauthorized')
}


Meteor.methods({
  'contributions.insert'(contribution) {
    // User must be logged in
    check(Meteor.userId(), Matchers.ID)
    // Validate user input
    check(contribution, {
      amount: Matchers.PositiveNumber,
    })
    // Fill in other attributes and push to db
    const now = new Date()
    contribution.createdAt = now
    contribution.lastEditAt = now
    
  },
  
  'contributions.changeAmount'(_id, amount) {
    checkIfOwner(Meteor.userId())
    Contributions.update(_id, {$set: {amount} })
  }
})

if (Meteor.isServer) {
  Meteor.publish('contributions', () => {
    check(Meteor.userId(), Matchers.ID)
    // TODO: make this secure
    return 
  })
}
