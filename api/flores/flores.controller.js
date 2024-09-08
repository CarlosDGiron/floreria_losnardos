const { create, getAllArreglos, getByTipoArreglo, postArreglo  }  = require("./flores.service");

module.exports={
    get:(req,res)=>
    {        
        const tipoArreglo = req.query.tipoArreglo;

        if (tipoArreglo) {
            getByTipoArreglo(tipoArreglo, (error, results) => {
                
                if(error){
                    console.log(error);
                    return res.status(500).json({
                        success:0,
                        message:"Error de conexión a base de datos."
                    });
                }

                if(results.length===0){
                    return res.status(200).json({
                        success: 1,
                        message: "No hay arreglos de ese tipo existentes."
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        }else{
            
        const body= req.body;
        getAllArreglos(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:"Error de conexión a base de datos."
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    }
    },
    post:(req,res)=>
    {
        if (req.query.nombre&&req.query.precio&&req.query.descripcion&&req.query.tipoArreglo&&req.query.activo) {
            postArreglo(tipoArreglo, (error, results) => {
                if(error){
                    console.log(error);
                    return res.status(500).json({
                        success:0,
                        message:"Error de conexión a base de datos."
                    });
                }

                if(results.length===0){
                    return res.status(200).json({
                        success: 1,
                        message: "No se pudo insertar el arreglo.;"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
    }
}
};