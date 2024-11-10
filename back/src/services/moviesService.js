const Movie = require("../models/Movie");
module.exports ={
    getMovies: async() =>{
        const movie = await Movie.find();
        return movie;
    },

    getMovieById: async (id)=>{
        const movie = await Movie.findById(id);
        return movie;
    },

    getMovieByTitle: async(title)=>{
        const movie = await Movie.findOne({title});
        return movie;
    },

    createMovie: async(movie)=>{
        const newMovie = await Movie.create(movie);
        return newMovie;
    },
};