import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


const Campaigns = new Collection('campaigns')


const checkIfOwner = (_id) => {
  const campaign = Campaigns.findOne(_id)
  if (!campaign)
    throw new Meteor.Error(404, 'Not found')
  if (Meteor.userId() !== campaign.owner)
    throw new Meteor.Error(403, 'Unauthorized')
}


Meteor.methods({
  'campaigns.insert'(campaign) {
    // User must be logged in
    check(Meteor.userId(), Matchers.ID)
    // Validation
    check(campaign, {
      name: String,
      restaurant: Matchers.ID,
      deadline: Date,
      minimumPrice: Number,
    })
    // Fill in other attributes and push to db
    campaign.owner = Meteor.userId()
    campaign.createdAt = new Date()
    campaign.published = true
    campaign.isOpen = true
    Campaigns.insert(campaign)
  },
  
  'campaigns.close'(_id) {
    checkIfOwner(_id)
    Campaigns.update(_id, {$set: {isOpen: false} })
  },
  
  'campaigns.remove'(_id) {
    checkIfOwner(_id)
    Campaigns.remove(_id)
  },
})


if (Meteor.isServer) {
  
  Meteor.publish('campaigns', () => {
    //check(this.userId, Matchers.ID)
    console.log(Campaigns.find({$and: {isOpen: true, } }))
    return Campaigns.find({$and: {isOpen: true, } })
  })
  
  Meteor.publish('campaign', (_id) => {
    //check(this.userId, Matchers.ID)
    return Campaigns.findOne(_id)
  })
}

export default Campaigns
