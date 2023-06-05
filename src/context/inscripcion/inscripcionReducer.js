import {
    GET_INSCRIPCIONES,
    GET_INSCRIPCION,
    REGISTRO_INSCRIPCION_EXITOSO,
    REGISTRO_INSCRIPCION_ERROR,
    EDITAR_INSCRIPCION,
    BORRAR_INSCRIPCION
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_INSCRIPCIONES:
            return {
                ...state,
                inscripciones: action.payload,
            }
        case GET_INSCRIPCION:
            return {
                ...state,
                inscripcion: action.payload,
            }
        case REGISTRO_INSCRIPCION_EXITOSO:
            return {
                ...state,
                inscripciones: [action.payload, ...state.inscripciones],
                message: "La Inscripcion ha sido registrada exitosamente"
            }
        case REGISTRO_INSCRIPCION_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case EDITAR_INSCRIPCION:
            return {
                ...state,
                inscripciones: state.inscripciones.map((item) => item.id_inscripcion === action.payload.id_inscripcion ? action.payload : item),
            }
        case BORRAR_INSCRIPCION:
            return {
                ...state,
                inscripciones: state.inscripciones.filter((item) => item.id_inscripcion != action.payload),
            }
        default:
            return state;
    }
}