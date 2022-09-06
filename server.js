'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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



//function
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
        // console.log(result);
        res.send(result);
    }
  } )
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
