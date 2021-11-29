// Model
import { Movie } from '../Model/Movie';

// types
import { MovieRequestType } from '../types'

export class CreateMovieService {
    execute({title, description, uri}: MovieRequestType) {

        const movie = new Movie();

        Object.assign(movie, {
            title,
            description,
            uri,
            created_at: new Date(),
        });

        return movie;
    };
}