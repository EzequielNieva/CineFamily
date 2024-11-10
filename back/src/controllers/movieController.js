const moviesService = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req,res) =>{
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
}

const getMovieById = async(req,res) => {
    const {id} = req.params;
    const movie = await moviesService.getMovieById(id);
    res.status(200).json(movie);
}

const getMovieByTitle = async (req,res) =>{
    const {title} = req.params;
    const movie = await moviesService.getMovieByTitle(title);
    res.status(200).json(movie);
}

const createMovie = async (req,res) =>{
    const {title,year,director,duration,genre,rate,poster} = req.body;
    await moviesService.createMovie({title,year,director,duration,genre,rate,poster});
    res.status(201).json({
        message: "Pelicula creada correctamente",
    });
}

module.exports = {
    getAllMovies: catchAsync(getAllMovies),
    getMovieById: catchAsync(getMovieById),
    getMovieByTitle: catchAsync(getMovieByTitle),
    createMovie: catchAsync(createMovie),
}

