import {
    GET_ORGANIZACIONES,
    GET_ORGANIZACION,
    REGISTRO_ORGANIZACION_EXITOSO,
    REGISTRO_ORGANIZACION_ERROR,
    EDITAR_ORGANIZACION,
    BORRAR_ORGANIZACION
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ORGANIZACIONES:
            return {
                ...state,
                organizaciones: action.payload,
            }
        case GET_ORGANIZACION:
            return {
                ...state,
                organizacion: action.payload,
            }
        case REGISTRO_ORGANIZACION_EXITOSO:
            return {
                ...state,
                organizaciones: [action.payload, ...state.organizaciones],
                message: "La organización ha sido registrado exitosamente"
            }
        case REGISTRO_ORGANIZACION_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case EDITAR_ORGANIZACION:
            return {
                ...state,
                organizaciones: state.organizaciones.map((item) => item.id_organizacion === action.payload.id_organizacion ? action.payload : item),
            }
        case BORRAR_ORGANIZACION:
            return {
                ...state,
                organizaciones: state.organizaciones.filter((item) => item.id_organizacion != action.payload),
            }
        default:
            return state;
    }
}