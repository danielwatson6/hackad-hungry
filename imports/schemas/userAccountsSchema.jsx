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

signUpAccountSchema = new SimpleSchema({
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

const getErrorMessage = (error) => {
  let message = "";
  if(error.name === "password" && error.type === "minString"){
    message = "Password is too short, password has to be at least 7 characters.";
  }
  else if(error.name === "confirmPassword" && error.type === "passwordMismatch") {
    message = "Passwords do not match.";
  } else if (error.name === "name" && error.type === "minString"){
    message = "Name is too short, enter a valid name.";
  } else if (error.name === "email" && error.type === "regEx"){
    message = "The email adress entered is not valid, enter a valid email.";
  }
  return message;
}


export { getErrorMessage };
export { loginSchema };
export { signUpAccountSchema };
