import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    uri: {
        type: String,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

export const Movie = mongoose.model('Movie', MovieSchema);