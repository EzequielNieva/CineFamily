const {Router} = require("express");
const movieController = require ("../controllers/movieController");
const {validateMovie, validateId} = require("../middlewares/validateMovie");

const movieRouter =  Router();

movieRouter.get("/movies", movieController.getAllMovies);
movieRouter.get("/movies/title/:title",movieController.getMovieByTitle);
movieRouter.get("/movies/:id",validateId,movieController.getMovieById);
movieRouter.post("/movies", validateMovie, movieController.createMovie);
// router.put("/movie",movieController);
// router.delete("/movie",movieController);

module.exports = movieRouter;