import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Match, check } from 'meteor/check'


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
  ID: Meteor.Collection.ObjectID,
  
  NonEmptyString: Match.Where((s) => {
    check(s, String)
    return s.length > 0
  }),
  
  NonZeroNumber: Match.Where((n) => {
    check(n, Number)
    return n !== 0
  })
  
  PositiveNumber: Match.Where((n) => {
    check(n, Number)
    return n > 0
  })
}
