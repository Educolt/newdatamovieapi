// types
import { Request, Response }from 'express';

// Services
import { CreateMovieService } from '../../services/CreateMovieService'

export const createMovieMiddleware = (request: Request, response: Response) => {

    const { title, description, uri } = request.body;

    const data =  {
        title,
        description,
        uri
    }

    const movie = new CreateMovieService().execute(data);

    return response.status(201).json(movie);
}