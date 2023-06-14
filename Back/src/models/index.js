import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
const { DB_HOST } = process.env;

//? Prueba de base de datos
const connection = async () => {
    try {
        await mongoose.connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default connection