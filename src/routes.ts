import express from 'express';

// routers
import { MovieRouter } from './routes/Movie';
import { UserRouter } from './routes/User';

// create routes Router
export const routes = express.Router();

// use Routers
routes.use('/movie', MovieRouter);
routes.use('/user', UserRouter);
