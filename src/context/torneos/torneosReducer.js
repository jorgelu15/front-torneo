import {
    GET_TORNEOS,
    GET_TORNEO,
    REGISTRO_TORNEO_EXITOSO,
    REGISTRO_TORNEO_ERROR,
    EDITAR_TORNEO,
    BORRAR_TORNEO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TORNEOS:
            return {
                ...state,
                torneos: action.payload,
            }
        case GET_TORNEO:
            return {
                ...state,
                torneo: action.payload,
            }
        case REGISTRO_TORNEO_EXITOSO:
            return {
                ...state,
                torneos: [action.payload, ...state.torneos],
                message: "El Torneo ha sido registrado exitosamente"
            }
        case REGISTRO_TORNEO_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case EDITAR_TORNEO:
            return {
                ...state,
                torneos: state.torneos.map((item) => item.code === action.payload.code ? action.payload : item),
            }
        case BORRAR_TORNEO:
            return {
                ...state,
                torneos: state.torneos.filter((item) => item.code != action.payload),
            }
        default:
            return state;
    }
}