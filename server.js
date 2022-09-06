'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const bookModel=require("./schema") //scheme 

//seeding data
async function seedData(){
const firstBook = new bookModel({
  title: "dog",
    description: "doglover",
    status: "yes",

})

const secondtBook = new bookModel({
  title: "cat",
    description: "catlover",
    status: "yes",

})

const thirdBook = new bookModel({
  title: "lion",
    description: "lionlover",
    status: "yes",

})


await firstBook.save();
await secondtBook.save();
await thirdBook.save();
}

//seedData()


//Route
app.get('/test', (request, response) => {

  response.send('test request received')

})

//http://localhost:3001/books
app.get("/books",bookHandler)
app.post("/books",getBook)
app.delete("/books/:id",deletebook) //you can name it whatever you want (lujain instead of id) and you can put it
//in query like this ? but developer but it i  url



//function

//http://localhost:3001/books
 function bookHandler(req,res){
bookModel.find({},(err,result)=>{


if(err)
{
    console.log(err);
}
else
{
    console.log(result);
    res.send(result);

}
})}

//http://localhost:3001/books
async function getBook (req,res){
  const {title,description,status}=req.body
  await bookModel.create({
    title: title,
    description: description,
    status: status,
  })

  bookModel.find({},(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(result);
        res.send(result);
    }
  } )
}

//http://localhost:3001/books
function deletebook(req,res){
  const id= req.params.id;
  bookModel.deleteOne({_id:id},(err,result)=>{
    bookModel.find({},(err,result)=>{
      if(err)
      {
          console.log(err);
      }
      else
      {
          console.log(result);
          res.send(result);
      }
    } )
    //we put it inside the function so no need for await 
    //regarding id 
    

  })

}



app.listen(PORT, () => console.log(`listening on ${PORT}`));
