import Respuesta from "../models/Respuesta.js"
import RespuestaError from "../models/RespuestaError.js"

export const errorHandler = (error) => {
    let respuesta = null
    
    if (!respuesta && error instanceof RespuestaError) {
        respuesta = new Respuesta({
            estado: error.estado,
            mensajeCliente: error.mensajeCliente,
            mensajeServidor: error.mensajeServidor,
            resultado: error.resultado
        })
    }

    else {
        // Status code 500
        respuesta = new Respuesta({
            estado: 500,
            mensajeCliente: 'error_servidor',
            mensajeServidor: 'Error en el servidor.',
            resultado: null
        })
    }

    return respuesta
}

export default { errorHandler }