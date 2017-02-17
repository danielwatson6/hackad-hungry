import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'

export default const Campaigns = new Collection('campaigns')


const checkIfOwner = (_id) => {
  const campaign = Campaigns.findOne(_id)
  if (!campaign)
    throw new Meteor.Error(404, 'Not found')
  if (Meteor.userId() !== campaign.owner)
    throw new Meteor.Error(403, 'Unauthorized')
}


Meteor.methods({
  'campaigns.insert'(campaign, amount) {
    // User must be logged in
    check(Meteor.userId(), Matchers.ID)
    // Validate user input
    check(campaign, {
      name: String,
      restaurant: Matchers.ID,
      deadline: Date,
    })
    // Create initial contribution
    const contribution = {
      amount,
      campaign: 
    }
    Meteor.call('contributions.insert', contribution, (err, res) => {
      
    })
    // Fill in other attributes and push to db
    campaign.owner = Meteor.userId()
    campaign.isOpen = true
    const now = new Date()
    campaign.createdAt = now
    campaign.lastEditAt = now
    Campaigns.insert(campaign)
  },
  
  'campaigns.close'(_id) {
    checkIfOwner(_id)
    Campaigns.update(_id, {$set: {isOpen: false} })
  },
  
  'campaigns.update'(_id, attributes) {
    checkIfOwner(_id)
    // This method expects `attributes` to (only) have these keys
    check(attributes, {
      name: String,
      deadline: Date,
    })
    
  }
  
  'campaigns.remove'(_id) {
    checkIfOwner(_id)
    Campaigns.remove(_id)
  },
})


if (Meteor.isServer) {
  Meteor.publish('campaigns', () => {
    check(Meteor.userId(), Matchers.ID)
    return Campaigns.find({$and: {isOpen: true, deadline:{$gt: new Date()}} })
  })
}
