// types
import { Request, Response } from 'express';

// Services
import { CreateMovieService } from '../../services/CreateMovieService'

// Movie Repositorie
import { MoviesRepositorie } from '../../repositories/MoviesRepositorie';

// create instance of repositorie
const moviesRepositorie = new MoviesRepositorie();

export const createMovieMiddleware = async (request: Request, response: Response) => {
    const { title, description, uri } = request.body;

    const movie = await new CreateMovieService(moviesRepositorie).execute({ 
        title,
        description,
        uri
    });

    return response.status(201).json(movie);
} 
export const getMoviesMiddleware = async (_: Request, response: Response) => {
    return response.status(200).json(await moviesRepositorie.list());
}

export const deleteMovieById = async (request: Request, response: Response) => {
    try {
        const {id} = request.query;
        await moviesRepositorie.delete(id.toString())
    
        return response.status(200).json({message: 'deleted'});
    } catch (error) {
        return response.status(404).json({message: 'Movie not added'});
    }
}