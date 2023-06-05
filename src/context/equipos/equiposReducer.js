import {
    GET_EQUIPOS,
    GET_EQUIPO,
    REGISTRO_EQUIPO_EXITOSO,
    REGISTRO_EQUIPO_ERROR,
    EDITAR_EQUIPO,
    BORRAR_EQUIPO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_EQUIPOS:
            return {
                ...state,
                equipos: action.payload,
            }
        case GET_EQUIPO:
            return {
                ...state,
                equipo: action.payload,
            }
        case REGISTRO_EQUIPO_EXITOSO:
            return {
                ...state,
                equipos: [action.payload, ...state.equipos],
                message: "El equipo ha sido registrado exitosamente"
            }
        case REGISTRO_EQUIPO_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case EDITAR_EQUIPO:
            return {
                ...state,
                equipos: state.equipos.map((item) => item.code === action.payload.code ? action.payload : item),
            }
        case BORRAR_EQUIPO:
            return {
                ...state,
                equipos: state.equipos.filter((item) => item.code != action.payload),
            }
        default:
            return state;
    }
}