import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// import routes Router
import { routes } from './routes';

// .env
import dotenv from 'dotenv'
dotenv.config();

// create app server
export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// db connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fgz5f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, () => {
    console.log("Connected to db !");
});