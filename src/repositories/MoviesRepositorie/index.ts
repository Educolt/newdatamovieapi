// Model
import { Movie } from '../../Model/Movie';

// DTO - Data Transfer Object
import { ICreateMovieDTO } from '../../types'

class MoviesRepositorie {
    async create({title, description, uri}: ICreateMovieDTO) {
        // create model instance
        const movie = new Movie(); 

        // assign values to the model instance
        Object.assign(movie, {
            title,
            description,
            uri
        });

        // save user on mongodb and return saved user
        return await movie.save();
    }
    async list() {
        return await Movie.find();
    }
    async findByTitle(title: string) {
        const movie = await Movie.find({title});
        if(!movie){
            throw new Error("Movie not added !");
        }     
        return movie;
    }
    async delete(id: string) {
        const movie = await Movie.findByIdAndDelete(id);
        if(!movie){
            throw new Error("Movie not added !");
        }     
        return;
    }
}
export { MoviesRepositorie }