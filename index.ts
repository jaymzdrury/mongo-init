import express, {Application} from 'express'
import { IncomingMessage, Server, ServerResponse } from 'http'
import connectDB from './config/db'
import config from './config/config'
import cors, {CorsOptions} from 'cors'
import cookieParser from 'cookie-parser'

config.config()
const app: Application = express();
const port: string | number = process.env.PORT || 5000;
connectDB()

const options: CorsOptions = {origin: process.env.ORIGIN}
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const server: Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(port, () => {
  console.log(`running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err}`)
  server.close(() => process.exit(1))
})