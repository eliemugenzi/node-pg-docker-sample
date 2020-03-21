const express = require('express');
require('dotenv/config');

const app = express();

app.get('/', (req, res)=>{
   res.send('Hello world');
});

const { PORT= 3838 } = process.env;

app.listen(PORT, ()=>console.log('Server running'));