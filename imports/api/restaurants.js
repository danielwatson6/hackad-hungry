import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { Collection, Matchers } from './utils'


export default const Restaurants = new Collection('restaurants')

Meteor.methods({
  'restaurants.insert'(restaurant) {

  	 check(restaurant, {
      name: Matchers.NonEmptyString,
      minimumPrice: Number,

    })

  	if (Restaurants.findOne({name: restaurant.name})) {
  		throw new Meteor.Error(400, 'Bad Request')
  	}
  	
  	restaurant.OpeningTime = String 
  	restaurant.ClosingTime = String
  	restaurant.LocationOf = String
  	restaurant.TimeTakenForDelivery = String

    Restaurants.insert(restaurant)
  },
  
})