import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
const { DB_HOST } = process.env;
console.log(DB_HOST);

//? Prueba de base de datos
const connection = async () => {
    try {
        await mongoose.connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Successful connection to the database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

export default connection