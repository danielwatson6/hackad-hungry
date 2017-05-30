import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';


SimpleSchema.messages({"passwordMismatch": "Passwords do not match."});


loginSchema = new SimpleSchema({
  email:{
    type: String,
    label: "Email",
    regEx:SimpleSchema.RegEx.Email,
  },
 password:{
   type: String,
   label: "Password",
   min: 7
 }
});

userAccountSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max:50,
    min:3
  },
  email:{
    type: String,
    label: "Email",
    regEx:SimpleSchema.RegEx.Email,
  },
  password:{
    type:String,
    label: "Password",
    min: 7,
  },
  confirmPassword:{
    type: String,
    label: "Confirm Password",
    min: 7,
    custom: function(){
      if(this.value !== this.field('password').value)
        return "passwordMismatch";
    }
  }
});

if(Meteor.isServer){
  Meteor.publish('users.name', function (){
    return Meteor.users.find({_id:{$eq:this.userId}}, {fields:{name:1}});
  });
}

export { loginSchema };
export { userAccountSchema };
