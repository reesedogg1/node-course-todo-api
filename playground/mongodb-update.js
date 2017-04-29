//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
//  if(err) {
//   return console.log('Unable to connect to MongoDB server');
//  }
//  console.log('Connected to MongoDB server');
//  
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5904cea89dd413460bac50ee")
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID("5904d8349dd413460bac53e7")
 }, {
   $set: {
     name: "Cortney"
   },
   $inc: {
   age: 1
 }
 }, {
   returnOriginal: false
 }).then((result) => {
   console.log(result);
 });

  //db.close();
});