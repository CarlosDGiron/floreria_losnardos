const { getAllArreglos, getByTipoArreglo, postArreglo } = require("./flores.service");

module.exports = {

    get: (req, res) => {
        const tipoArreglo = req.query.tipoArreglo;
        if (tipoArreglo) {

            getByTipoArreglo(tipoArreglo, (error, results) => {

                if (error) {

                    console.log(error);
                    return res.status(500).json({
                        success: 0,
                        message: "Error de conexión a base de datos."
                    });

                }

                if (results.length === 0) {

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

        } else {

            const body = req.body;
            getAllArreglos(body, (error, results) => {

                if (error) {

                    console.log(error);
                    return res.status(500).json({
                        success: 0,
                        message: "Error de conexión a base de datos."
                    });

                }

                return res.status(200).json({
                    success: 1,
                    data: results
                });

            });

        }

    },

    post: (req, res) => {

        const body = req.body;
        if (body.nombre && body.precio && body.descripcion && body.tipoArreglo && body.activo) {

            postArreglo(body, (error, results) => {

                if (error) {

                    console.log(error);
                    return res.status(500).json({
                        success: 0,
                        message: "Error de conexión a base de datos."
                    });

                } else if (results.length === 0) {

                    return res.status(500).json({
                        success: 0,
                        message: "No se pudo insertar el arreglo."
                    });

                } else {

                    return res.status(200).json({
                        success: 1,
                        message: "Arreglo insertado exitosamente."
                    });

                }

            });

        } else {

            return res.status(500).json({
                success: 0,
                message: "No se pudo insertar el arreglo ya que faltaban campos en el request."
            });

        }

    }

};