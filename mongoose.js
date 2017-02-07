var mongoose = require('mongoose')
mongoose.connect('mongodb://byc:byc@210.209.85.192:27017/byc')

var db = mongoose.connection

var Schema = mongoose.Schema
var userSchema = new Schema({
  name: String,
  age: Number,
  DOB: Date,
  isAlive: Boolean
})

var User = mongoose.model('User', userSchema)

var arvind = new User({
  name: 'Arvind',
  age: 99,
  DOB: '01/01/2015',
  isAlive: true
})

arvind.save(function (err, data) {
  if(err){
    console.log(err)
  }else{
    console.log('saved:' + data)
  }
})