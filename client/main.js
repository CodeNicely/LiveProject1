


if (Meteor.isClient) {

//-----------------user registration---------------
    Template.register.events({
'submit form': function(event,template){
    event.preventDefault();
    var emailVar = template.find('#email').value;
    var passwordVar = template.find('#password').value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});


//-----------------user Login---------------

Template.login.events({
'submit form': function(event,template){
event.preventDefault();
var emailVar = template.find('#login-email').value;
var passwordVar = template.find('#login-password').value;
Meteor.loginWithPassword(emailVar,passwordVar);
}
});
Template.dashboard.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});


//-----------------Product Details---------------


import { Template } from 'meteor/templating';
import { Notes1 } from  '../lib/collections.js';
import './product.html';



Template.product.helpers({
/*  notes:[
    {items: 'my city 1'},
    {items: 'my city 2'},
    {items: 'my city 3'}
  ]*/

notes1(){
  return Notes1.find({});
}

});

Template.add1.events({
  'submit .add-form': function(){
    event.preventDefault();

  // get input value

  const target = event.target;
  const items = target.items.value;

  //insert note into collections
  Notes1.insert({
    items,
    createdAt: new Date()
  });


  // clear form

  target.items.value = "";


  //close modal

  $('#addModal1').modal('close');
    return false;
  }
});


Template.note1.events({
  'click .delete-note':function(){
    Notes1.remove(this._id);
    return false;
  }
});


//----------------Raipur-----------





}
