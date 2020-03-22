require('dotenv/config');
const app=require('./app');

const { PORT= 3838 } = process.env;

app.listen(PORT, ()=>console.log('Server running'));

