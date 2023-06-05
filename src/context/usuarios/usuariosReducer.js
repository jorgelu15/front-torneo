import {
    GET_USUARIOS,
    GET_USUARIO,
    EDITAR_USUARIO,
    BORRAR_USUARIO,
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_USUARIOS:
            return {
                ...state,
                usuarios: action.payload,
            }
        case GET_USUARIO:
            return {
                ...state,
                usuario: action.payload,
            }
        case EDITAR_USUARIO:
            return {
                ...state,
                usuarios: state.usuarios.map((item) => item.id_usuario === action.payload.id_usuario ? action.payload : item),
            }
        case BORRAR_USUARIO:
            return {
                ...state,
                usuarios: state.usuarios.filter((item) => item.id_usuario != action.payload),
            }
        default:
            return state;
    }
}