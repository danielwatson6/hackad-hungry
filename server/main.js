import { Meteor } from 'meteor/meteor'
import Campaigns from './campaigns'
import Restaurants from './restaurants'


import '/imports/api/campaigns.js'


Meteor.startup(() => {
  // code to run on server at startup
  const dummyCampaign1 = {
  _id: 1,
  name: 'Sushi Anyone?',
  owner: 'Lama Ahmed',
  deadline: '18/2 8:00pm',
  restaurant: 'Sushi Art',
  status: 'isOpen',
}

const dummyCampaign2 = {
  _id: 1,
  name: 'Fries bite you back',
  owner: 'Manas Pant',
  deadline: '18/2 7:00pm',
  restaurant: 'KFC',
  status: 'isOpen',
}

const dummyCampaign3 = {
  _id: 1,
  name: 'Chinese Food Anyone?',
  owner: 'Daniel Watson',
  deadline: '18/2 9:00pm',
  restaurant: 'Mongolian Chinese Restaurant',
  status: 'isOpen',
}

const dummyCampaign4 = {
  _id: 1,
  name: 'I want Buffalo Wings',
  owner: 'Sugandha Shukla',
  deadline: '18/2 10:00pm',
  restaurant: 'Buffalo Wings and Rings',
  status: 'isOpen',
}

const dummyCampaign5 = {
  _id: 1,
  name: 'Biryani Lovers',
  owner: 'James Gardener',
  deadline: '18/2 7:00pm',
  restaurant: 'Student Biryani',
  status: 'isOpen',
}

const SushiArt = {
	minimumPrice = '70 AED'
    openingTimes: '11am to 11pm',
    deliveryTime: '60 minutes',
}

const KFC = {
    minimumPrice: '40 AED',
    openingTimes: '10am to midnight',
    deliveryTime: '45 minutes',
}

const MongolianChineseRestaurant = {
    minimumPrice: '50',
    openingTimes: '11am to midnight',
    deliveryTime: '50 minutes',
}

const BuffaloWings = {
    minimumPrice: '0 AED',
    openingTimes: '11am to 3am',
    deliveryTime: '45 minutes',
}

const Student Biryani = {
    minimumPrice: '30 AED',
    openingTimes: '11:30 am to midnight',
    deliveryTime: '55 minutes',
}


if (Campaigns.find().count() == 0){
	Campaigns.insert(dummyCampaign1)

}

if (Restaurants.find().count() == 0){
	Restaurants.insert(dummyRestaurant2)
}

})

