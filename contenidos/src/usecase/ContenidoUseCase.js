import Contenido from "../models/Contenido.js";


// recibiendo como parámetros las dependencias necesarias.

class contenidoUseCase {

    constructor(contenidoRepository) {
        this.contenidoRepository = contenidoRepository
    }

    async obtenerPorUID(uid) {
        return await this.contenidoRepository.obtenerPorUID(uid);
    }

    async obtenerPorCodigo(codigo) {
        return await this.contenidoRepository.obtenerPorCodigo(codigo);
    }

    async crear(uid, data = Contenido.params) {

        const contenido = new Contenido({
            uid: uid,
            codigo: data.codigo,
            titulo: data.titulo,
            texto: data.texto,
            foto: data.foto,
            tipo: data.tipo,
        });

        await this.contenidoRepository.crear(contenido)

        return contenido;

    }

    async actualizar(uid, datosActualizados = Contenido.params) {
        const contenido = await this.contenidoRepository.actualizar(uid, datosActualizados);
        return contenido;
    }

    async eliminar(uid) {
       await this.contenidoRepository.eliminar(uid);
    }

}

export default contenidoUseCase