import { Meteor } from 'meteor/meteor'

import Campaigns from '/imports/api/campaigns'
import Restaurants from '/imports/api/restaurants'


Meteor.startup(() => {
  
  if (Restaurants.find().count() === 0) {
    const dummyRestaurants = [
      {
        name: 'Sushi Art',
        minimumPrice: 70,
        openingTimes: '11am to 11pm',
        deliveryTime: '60 minutes',
      },
      {
        name: 'KFC',
        minimumPrice: 40,
        openingTimes: '10am to midnight',
        deliveryTime: '45 minutes',
      },
      {
        name: 'Mongolian Chinese Restaurant',
        minimumPrice: 50,
        openingTimes: '11am to midnight',
        deliveryTime: '50 minutes',
      },
      {
        name: 'Buffalo Wings',
        minimumPrice: 0,
        openingTimes: '11am to 3am',
        deliveryTime: '45 minutes',
      },
      {
        name: 'Student Biryani',
        minimumPrice: 30,
        openingTimes: '11:30 am to midnight',
        deliveryTime: '55 minutes',
      },
    ]
  	for (restaurant of dummyRestaurants)
      Restaurants.insert(restaurant)
  }
  
  if (Campaigns.find().count() === 0) {
    
    let restaurantIds = Restaurants.find().fetch()
    restaurantIds = _.map(restaurantIds, (restaurant) => restaurant._id)
    console.log(restaurantIds)
    
    const dummyCampaigns = [
      {
        name: 'Sushi Anyone?',
        owner: 'Lama Ahmed',
        deadline: new Date(2017, 1, 18, 19),
        restaurant: restaurantIds.pop(),
        isOpen: true,
      },
      {
        name: 'Fries bite you back',
        owner: 'Manas Pant',
        deadline: new Date(2017, 1, 18, 20),
        restaurant: restaurantIds.pop(),
        isOpen: true,
      },
      {
        name: 'Chinese Food Anyone?',
        owner: 'Daniel Watson',
        deadline: new Date(2017, 1, 18, 21),
        restaurant: restaurantIds.pop(),
        isOpen: true,
      },
      {
        name: 'I want Buffalo Wings',
        owner: 'Sugandha Shukla',
        deadline: new Date(2017, 1, 18, 22),
        restaurant: restaurantIds.pop(),
        isOpen: true,
      },
      {
        name: 'Biryani Lovers',
        owner: 'James Gardener',
        deadline: new Date(2017, 1, 18, 23),
        restaurant: restaurantIds.pop(),
        isOpen: true,
      },
    ]
    for (campaign of dummyCampaigns)
      Campaigns.insert(campaign)
  }
})
