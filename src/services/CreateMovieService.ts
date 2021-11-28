import { Movie } from '../types'

export class CreateMovieService {
    execute({name, description, uri}: Movie) {
        return {
            name,
            description,
            uri
        };
        
    };
}