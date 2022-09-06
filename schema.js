const mongoose=require("mongoose")

mongoose.connect('mongodb://Lujain92:0000@ac-9uywefh-shard-00-00.c3pszlh.mongodb.net:27017,ac-9uywefh-shard-00-01.c3pszlh.mongodb.net:27017,ac-9uywefh-shard-00-02.c3pszlh.mongodb.net:27017/?ssl=true&replicaSet=atlas-tw6af0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//mongodb://lujain92:0000@ac-0myqeed-shard-00-00.ahebopu.mongodb.net:27017,ac-0myqeed-shard-00-01.ahebopu.mongodb.net:27017,ac-0myqeed-shard-00-02.ahebopu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9s6est-shard-0&authSource=admin&retryWrites=true&w=majority
const Book = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const bookModel = mongoose.model('Bookcaned', Book);


  module.exports= bookModel;