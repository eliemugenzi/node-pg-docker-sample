const express = require('express');
require('dotenv/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
   res.send('Hello world');
});

app.get('/hello', (req, res)=>{
    res.render('index');
});

module.exports=app;
