const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '59120128710fe3697ee5c9b711';
//
//if(!ObjectID.isValid(id)){
//  console.log('ID not valid');
//}

//Todo.find({
//  _id: id
//}).then((todos) => {
//  console.log('Todos', todos)
//});
//
//Todo.findOne({
//  _id: id
//}).then((todo) => {
//  console.log('Todo', todo)
//});

//Todo.findById(id).then((todo) => {
//  if(!todo){
//    return console.log('Id not found');
//  }
//  console.log('Todo by id', todo)
//}).catch ((e) => console.log(e));

var id = '590cb9eb67cbab34bab7125a';

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User by id', user);
}).catch ((e) => console.log(e));