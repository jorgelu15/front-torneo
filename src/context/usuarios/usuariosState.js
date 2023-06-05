import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import UsuariosContext from './usuariosContext';
import UsuariosReducer from './usuariosReducer';

import {
    GET_USUARIOS,
    BORRAR_USUARIO,
    EDITAR_USUARIO,
    GET_USUARIO
} from '../../types';

const UsuariosState = props => {

    const initialState = {
        usuarios: null,
        usuario: null,
        editarUsuario: null,
        message: false,
        ventasDiaUsuario: null,
    }

    const [state, dispatch] = useReducer(UsuariosReducer, initialState);

    const getUsuarios = async () => {
        try {
            const respuesta = await clienteAxios.get(`/usuarios`);
            dispatch({
                type: GET_USUARIOS,
                payload: respuesta.data.usuarios
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getUsuario = async (id) => {
        try {
            const respuesta = await clienteAxios.get(`/usuarios/${id}`);
            dispatch({
                type: GET_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async (data) => {
        try {
            const respuesta = await clienteAxios.put(`/usuarios/${data.id_usuario}`, data);
            dispatch({
                type: EDITAR_USUARIO,
                payload: respuesta.data.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (usuario, id_inst) => {
        try {
            const respuesta = await clienteAxios.delete(`/usuarios/${usuario.id_usuario}/${id_inst}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_USUARIO,
                payload: respuesta.data.id
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UsuariosContext.Provider
            value={{
                usuarios: state.usuarios,
                usuario: state.usuario,
                editarUsuario: state.editarUsuario,
                message: state.message,
                getUsuarios,
                getUsuario,
                updateUser,
                deleteUser,
            }}
        >
            {props.children}
        </UsuariosContext.Provider>
    )
}

export default UsuariosState;