const app = require('./app.js');
const mongoose = require('mongoose');
const host = '127.0.0.1';
const port = 3000;
require('dotenv').config(); 

const uri = process.env.MONGO_URI;


const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Correctly connected")
    } catch (error) {
        console.log(error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Server succsfully connected! port no: ${server.address().port}`);
})