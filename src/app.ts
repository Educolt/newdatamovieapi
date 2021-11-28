import express from 'express';
import cors from 'cors';

// import routes Router
import { routes } from './routes';

// create app server
export const app = express()

app.use(cors());
app.use(express.json());
app.use(routes);