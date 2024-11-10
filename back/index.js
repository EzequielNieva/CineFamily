const dbCon = require("./src/config/dbCon.js");
const app = require("./src/server.js");

dbCon().then((res)=>{
        app.listen(3000,()=>{
            console.log("Servidor escuchando en el puerto 3000");
        });
});
