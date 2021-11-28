import express from 'express';

// middlewares
import { createMovieMiddleware } from './middlewares';

// create Movies Router
export const MovieRouter = express.Router();

// routes
MovieRouter.post('/create', createMovieMiddleware);