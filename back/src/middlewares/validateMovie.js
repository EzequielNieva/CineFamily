const mongoose = require("mongoose");

const validateMovie= (req,res,next) => {
    const {title,year,director,duration,genre,rate,poster} = req.body;
    console.log(req.body);
    if(!title || !year || !director || !duration || !genre || !rate || !poster){
        return res.status(400).json({
            error: "Faltan campos a completar",
        });
    }else{
        next();
    }
};

const validateId = (req,res,next)=>{
    const {id} = req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
        next();
    }else{
        next({message: "Id invalido", statusCode:400});
    }
};

module.exports = {validateMovie, validateId};