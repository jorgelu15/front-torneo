import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import MiembrosContext from './miembrosContext';
import MiembrosReducer from './miembrosReducer';

import {
    GET_MIEMBROS,
    GET_MIEMBRO,
    REGISTRO_MIEMBRO_EXITOSO,
    REGISTRO_MIEMBRO_ERROR,
    BORRAR_MIEMBRO
} from '../../types';

const MiembrosState = props => {

    const initialState = {
        miembros: null,
        miembro: null,
        message: null
    }

    const [state, dispatch] = useReducer(MiembrosReducer, initialState);

    const getMiembros = async () => {
        try {
            const respuesta = await clienteAxios.get(`/miembro`);
            dispatch({
                type: GET_MIEMBROS,
                payload: respuesta.data.miembros
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getMiembro = async (id_equipo) => {
        try {
            const respuesta = await clienteAxios.get(`/miembro/${id_equipo}`);
            dispatch({
                type: GET_MIEMBRO,
                payload: respuesta.data.miembro
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registroMiembro = async (datos) => {
        try {
            const respuesta = await clienteAxios.post(`/miembro`, datos);
            dispatch({
                type: REGISTRO_MIEMBRO_EXITOSO,
                payload: respuesta.data.body.miembro
            })

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_MIEMBRO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const deleteMiembro = async (id_equipo, id_usuario) => {
        try {
            const respuesta = await clienteAxios.delete(`/miembro/${id_equipo}/${id_usuario}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_MIEMBRO,
                payload: respuesta.data.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MiembrosContext.Provider
            value={{
                miembros: state.miembros,
                miembro: state.miembro,
                message: state.message,
                getMiembros,
                getMiembro,
                registroMiembro,
                deleteMiembro
            }}
        >
            {props.children}
        </MiembrosContext.Provider>
    )
}

export default MiembrosState;