// Create Movie Request type
import { ICreateMovieRequest } from '../types'

// Movie repositorie
import { MoviesRepositorie } from '../repositories/MoviesRepositorie'

export class CreateMovieService {

    constructor(private moviesRepositorie: MoviesRepositorie){}
    
    async execute({title, description, uri}: ICreateMovieRequest) {

        const movie = await this.moviesRepositorie.create({
            title,
            description,
            uri
        });

        return movie;
    };
}