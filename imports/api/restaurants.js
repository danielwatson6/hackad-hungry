import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


export default const Restaurants = new Collection('restaurants')

Meteor.methods({
  'restaurants.insert'(restaurant) {
    // checks for user
    if (Meteor.userId() == null)
      throw new Meteor.Error(403, 'Unauthorized')
      

  	check(restaurant, {
      name: Matchers.NonEmptyString,
      minimumPrice: Number,
      openingTimes: String,
      locationof: String,
      deliveryTime: String,
    })

    // Check that restaurant is not in system
  	if (Restaurants.(findOne{name: restaurant.name}))
  		throw new Meteor.Error(400, 'Bad request')
    // Fill in other attributes and push to db
    const now = new Date()
    restaurant.createdAt = now
    restaurant.lastEditAt = now
    Restaurants.insert(restaurant)
  },
  
  'restaurants.update'(attributes) {
    Restaurants.minimumPrice = Number
    Restaurants.openingTimes = String
    Restaurants.locationof = String
    Restaurants.deliveryTime = String
  }
})