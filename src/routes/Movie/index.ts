import express from 'express';

// middlewares
import { createMovieMiddleware, getMoviesMiddleware, deleteMovieById} from './middlewares'

// create Movies Router
export const MovieRouter = express.Router();

// routes
MovieRouter.post('/', createMovieMiddleware);

MovieRouter.get('/', getMoviesMiddleware);

MovieRouter.delete('/', deleteMovieById )