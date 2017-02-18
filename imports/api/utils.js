import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Match, check } from 'meteor/check'


// This matcher is used twice inside the Matchers dictionary
const NonEmptyString = Match.Where((s) => {
  check(s, String)
  return s.length > 0
})


export class Collection extends Mongo.Collection {
  constructor(name) {
    super(name)
    this.deny({
      insert() { return true },
      update() { return true },
      remove() { return true },
    })
  }
}


export const Matchers = {
  NonEmptyString,
  
  ID: Match.OneOf(Meteor.Collection.ObjectID, NonEmptyString),
  
  PositiveNumber: Match.Where((n) => {
    check(n, Number)
    return n > 0
  }),
}

export const mongoID = (_id) => (new Mongo.ObjectID(_id))
