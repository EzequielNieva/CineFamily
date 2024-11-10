const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },    
    year:{
        type: Number,
        required: true,
    }, 
    director: {
        type:String,
        required:true
    },
    duration: {
        type:String,
        required:true,
        match: [/^\d{1,2}h\s\d{1,2}min$/, 'La duración debe estar en el formato "0h 00min".']
    },
    genre: {
        type:[String],
        required:true
    },
    rate:{
        type: Number,
        required: true,
    },
    poster: {
        type:String,
        required:true
    },
});

const Movie = mongoose.model("Movie",movieSchema,"movie");

module.exports = Movie;