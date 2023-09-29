const express = require('express');
require('./db/connection')
const app = express();
const port = 4000;
const tasks = require('./routers/tasks');
const connectDb = require('./db/connection');
require('dotenv').config()
// middleware
app.use(express.static('./public'))
app.use(express.json());
const start = async() => {
    try {
        await connectDb(process.env.mongo_url);
        app.listen(port , (req , res) => {
            console.log(`server is listening in ${port}...  ` )
        })
    } catch (error) {
        console.log(error)
    }
}
// routes
app.use('/api/MrMH/tasks' , tasks);;
start();









