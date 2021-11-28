import { Request, Response }from 'express';

// Services
import { CreateMovieService } from '../../services/CreateMovieService'

export const createMovieMiddleware = (request: Request, response: Response) => {

    const movie = new CreateMovieService().execute({
        name: 'Rambo 3',
        description: 'Ola Mundo',
        uri: "http://localhost:3333"
    });

    return response.status(201).json(movie);
}