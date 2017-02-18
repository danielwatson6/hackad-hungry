import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


const Restaurants = new Collection('restaurants')


Meteor.methods({
  'restaurants.insert'(restaurant) {
    check(Meteor.userId(), Matchers.ID)
  	check(restaurant, {
      name: Matchers.NonEmptyString,
      minimumPrice: Number,
      openingTimes: String,
      menuURL: String,
      deliveryTime: String,
    })
    // Check that restaurant is not already in the system
  	if (Restaurants.findOne({name: restaurant.name}))
  		throw new Meteor.Error(400, 'Restaurant already registered.')
    // Fill in other attributes and push to db
    const now = new Date()
    restaurant.createdAt = now
    restaurant.lastEditAt = now
    Restaurants.insert(restaurant)
  },
  
  'restaurants.update'(attributes) {
    check(Meteor.userId(), Matchers.ID)
    check(attributes, {
      name: Matchers.NonEmptyString,
      minimumPrice: Number,
      openingTimes: String,
      menuURL: String,
      deliveryTime: String,
    })
  }
})


if (Meteor.isServer) {
  
  Meteor.publish('restaurants', function() {
    check(this.userId(), Matchers.ID)
    return Restaurants.find()
  })
  
  Meteor.publish('restaurant', function(_id) {
    check(this.userId(), Matchers.ID)
    return Restaurants.findOne(_id)
  })
}


export default Restaurants
