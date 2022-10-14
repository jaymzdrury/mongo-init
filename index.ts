import express, {Application} from 'express'
import { IncomingMessage, Server, ServerResponse } from 'http'
const connectDB = require('./config/db')
const config = require('./config/config')
const cors = require('cors')
const cookieParser = require('cookie-parser')

config.config()
const app: Application = express();
const port: string | number = process.env.PORT || 5000;
connectDB()

app.use(cors());
app.use(express.json());
app.use(cookieParser())

const server: Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(port, () => {
  console.log(`running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err}`)
  server.close(() => process.exit(1))
})