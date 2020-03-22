const express = require('express');
require('dotenv/config');

const app = express();

app.get('/', (req, res)=>{
   res.send('Hello world');
});

module.exports=app;
