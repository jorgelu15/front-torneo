import {
    GET_MIEMBROS,
    GET_MIEMBRO,
    REGISTRO_MIEMBRO_EXITOSO,
    REGISTRO_MIEMBRO_ERROR,
    BORRAR_MIEMBRO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_MIEMBROS:
            return {
                ...state,
                miembros: action.payload,
            }
        case GET_MIEMBRO:
            return {
                ...state,
                miembro: action.payload,
            }
        case REGISTRO_MIEMBRO_EXITOSO:
            return {
                ...state,
                miembros: [action.payload, ...state.miembros],
                message: "El miembro ha sido registrado exitosamente"
            }
        case REGISTRO_MIEMBRO_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case BORRAR_MIEMBRO:
            return {
                ...state,
                miembros: state.miembros.filter((item) => (item.id_usuario != action.payload.id_usuario && item.id_equipo != action.payload.id_equipo)),
            }
        default:
            return state;
    }
}