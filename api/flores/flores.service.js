const pool = require("../../config/database");

module.exports = {
    getAllArreglos: (data,callBack) => {
        pool.query(`SELECT * FROM ArregloFloral WHERE activo=1;`,[],
        (error, results,fields)=>{
            if(error){
                return callBack(error);                
            }
            console.log("Solicitud realizada a API \"flores:getAllArreglos\" realizada exitosamente.");
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
                console.log("Solicitud realizada a API \"flores:getByTipoArreglo\" realizada exitosamente.");
                return callBack(null, results);
            }
        );
    },

    postArreglo: (data,callBack) => {
        pool.query(`INSERT INTO ArregloFloral (nombre, precio, descripcion, tipoArreglo, activo) VALUES (?,?,?,?,?)`,
            [   data.nombre,
                data.precio,
                data.descripcion,
                data.tipoArreglo,
                data.activo
            ],
        (error, results,fields)=>{
            if(error){
                return callBack(error);                
            }
            console.log("Solicitud realizada a API \"flores:postArreglo\"  realizada exitosamente.");
            return callBack(null, results);
        });
    },
};