const express = require('express');
require('./db/connection')
const app = express();
const port = 4000;
const tasks = require('./routers/tasks');
const connectDb = require('./db/connection');
app.use(express.json());
require('dotenv').config()
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
// app.get("/", (req , res) => {
//     res.send('task manager app ')
// })
app.use('/api/MrMH/tasks' , tasks);;
start();









