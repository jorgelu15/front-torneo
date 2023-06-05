import {
    GET_ENCUENTROS,
    GET_ENCUENTRO,
    REGISTRO_ENCUENTRO_EXITOSO,
    REGISTRO_ENCUENTRO_ERROR,
    EDITAR_ENCUENTRO,
    BORRAR_ENCUENTRO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ENCUENTROS:
            return {
                ...state,
                encuentros: action.payload,
            }
        case GET_ENCUENTRO:
            return {
                ...state,
                encuentro: action.payload,
            }
        case REGISTRO_ENCUENTRO_EXITOSO:
            return {
                ...state,
                encuentros: [action.payload, ...state.encuentros],
                message: "El Encuentro ha sido registrado exitosamente"
            }
        case REGISTRO_ENCUENTRO_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case EDITAR_ENCUENTRO:
            return {
                ...state,
                encuentros: state.encuentros.map((item) => item.code_match === action.payload.code_match ? action.payload : item),
            }
        case BORRAR_ENCUENTRO:
            return {
                ...state,
                encuentros: state.encuentros.filter((item) => item.code_match != action.payload),
            }
        default:
            return state;
    }
}