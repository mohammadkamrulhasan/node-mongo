const express = require('express');

const cors = require('cors');

const bodyParser=require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users =['asad','Moin','Sabed','Sumit','sohana']


app.get('/',(req,res)=>{
    const fruit={
        product:'ada',
        price:220

    }
    res.send (fruit);
})
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantity:1000,price:10000});
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const name=users[id];
    res.send({id,name});
    console.log(req.query.sort);
})

//Post
app.post('/addUser',(req,res)=>{
    // console.log(req.body);
    // console.log('data received',req.body);
    //Save to database
    const user=req.body;
    user.id=55;
    res.send(user);
})

app.listen(4200, ()=>console.log('Listening to port 4200'));