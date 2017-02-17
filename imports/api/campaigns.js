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
  'campaigns.insert'(campaign, initial_amount) {
    // User must be logged in
    check(Meteor.userId(), Matchers.ID)
    // Validate user input
    check(campaign, {
      name: String,
      restaurant: Matchers.ID,
      deadline: Date,
    })
    // Create initial contribution
    Meteor.call('contributions.insert', initial_amount, (err, res) => {
      if (err) throw err
      // Fill in other attributes and push to db
      campaign.contributions = [res._id]
      campaign.owner = Meteor.userId()
      campaign.isOpen = true
      const now = new Date()
      campaign.createdAt = now
      campaign.lastEditAt = now
      // TODO: notify all users
      Campaigns.insert(campaign)
    })
  },
  
  'campaigns.addContribution'(_id, amount) {
    const uid = Meteor.userId()
    check(uid, Matchers.ID)
    Meteor.call('contributions.insert', amount, (err, res) => {
      if (err) throw err
      // Reject if user already has a contribution in campaign
      if (Campaigns.findOne({contributions: {$elemMatch: {owner: uid} }}))
        throw new Meteor.Error(400, 'Bad request')
      // TODO: notify all participants
      Campaigns.update(_id, {
        $push: {contributions: res._id }
        $set: {lastEditAt: new Date()},
      })
    })
  },
  
  'campaigns.removeContribution'(_id, contribution_id) {
    
  },
  
  'campaigns.close'(_id) {
    checkIfOwner(_id)
    // TODO: notify all participants
    Campaigns.update(_id, {$set: {isOpen: false, lastEditAt: new Date()} })
  },
  
  'campaigns.updateInfo'(_id, attributes) {
    checkIfOwner(_id)
    // This method expects `attributes` to (only) have these keys
    check(attributes, {
      name: String,
      deadline: Date,
    })
    attributes.lastEditAt = new Date()
    // TODO: notify all participants
    Campaigns.update(_id, {$set: attributes})
  },
  
  'campaigns.remove'(_id) {
    checkIfOwner(_id)
    // TODO: remove all contributions linked to campaign
    
    // TODO: notify all participants
    Campaigns.remove(_id)
  },
})


if (Meteor.isServer) {
  Meteor.publish('campaigns', () => {
    check(Meteor.userId(), Matchers.ID)
    // Publish when the user is a participant, OR when
    // the campaign is both open and not past the deadline
    return Campaigns.find({$or: {
      contributions: {$elemMatch: {owner: Meteor.userId()} },
      $and: {isOpen: true, deadline: {$gt: new Date()}},
    }})
  })
}
