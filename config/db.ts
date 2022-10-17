import mongoose, {Connection} from 'mongoose'
const config = require('./config')
config.config()

const db: string | undefined = process.env.URI

const connectDB = () => {
    if(!db) throw new Error('No URI Found')
    try {
        mongoose.connect(db)
        const connection: Connection = mongoose.connection;
        connection.on('connected', () => console.log('MongoDB connected'));
        connection.on('error', (err) => console.log('MongoDB error: ', err))
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export = connectDB