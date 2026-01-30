console.log('MONGO_URI:', process.env.MONGO_URI);
const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async() =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conexión correcta a base de datos")
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnection;