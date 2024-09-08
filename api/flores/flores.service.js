const pool = require("../../config/database");

module.exports = {
    getAllAreglos: (data,callBack) => {
        pool.query(`SELECT * FROM ArregloFloral WHERE activo=1;`,[],
        (error, results,fields)=>{
            if(error){
                return callBack(error);                
            }
            console.log("Solicitud realizada a API \"flores\" realizada exitosamente.")
            return callBack(null, results);
        });
    },
    
    getByTipoArreglo: (tipoArreglo, callBack) => {
        pool.query(
            `SELECT * FROM ArregloFloral WHERE tipoArreglo = ? and activo=1;`, 
            [tipoArreglo], 
            (error, results, fields) => {
                if (error) {
                    return callBack(error);                
                }                
                console.log("Solicitud realizada a API \"flores\" realizada exitosamente.")
                return callBack(null, results);
            }
        );
    }    
};