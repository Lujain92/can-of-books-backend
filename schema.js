const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true}); 

const Book = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const bookModel = mongoose.model('Bookcaned', Book);


  module.exports= bookModel;