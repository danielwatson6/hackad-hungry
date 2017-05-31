Accounts.onCreateUser((options, user) => {
  let profile = {};
  if(!user.services.facebook){ //if the user is using password as their signup method
    profile = {
      avatar_url: "/public/images/user-avatar.png", //use basic/generic avatar image
      email: options.email,
      name:options.name,
    };
  }
  else if (user.services.facebook){ //else if user signs-up via facebook
    avatarUrl = "http://graph.facebook.com/"+user.services.facebook.id+"/picture?type=small"; //get user's facebook profile pic url
    profile = {
      avatar_url: avatarUrl,
      email: user.services.facebook.email,
      name: user.services.facebook.name,
    };
  }

  user.profile = profile;
  return user;
});
