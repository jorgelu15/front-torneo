import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import EncuentrosContext from './encuentrosContext';
import EncuentrosReducer from './encuentrosReducer';

import {
    GET_ENCUENTROS,
    GET_ENCUENTRO,
    REGISTRO_ENCUENTRO_EXITOSO,
    REGISTRO_ENCUENTRO_ERROR,
    EDITAR_ENCUENTRO,
    BORRAR_ENCUENTRO
} from '../../types';

const EncuentrosState = props => {

    const initialState = {
        encuentros: null,
        encuentro: null,
        message: null
    }

    const [state, dispatch] = useReducer(EncuentrosReducer, initialState);

    const getEncuentros = async () => {
        try {
            const respuesta = await clienteAxios.get(`/encuentros`);
            dispatch({
                type: GET_ENCUENTROS,
                payload: respuesta.data.encuentro
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getEncuentro = async (code_match) => {
        try {
            const respuesta = await clienteAxios.get(`/encuentros/${code_match}`);
            dispatch({
                type: GET_ENCUENTRO,
                payload: respuesta.data.encuentro
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registroEncuentro = async (datos) => {
        try {
            const respuesta = await clienteAxios.post(`/encuentros`, datos);
            dispatch({
                type: REGISTRO_ENCUENTRO_EXITOSO,
                payload: respuesta.data.body.encuentro
            })

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_ENCUENTRO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updateEncuentro = async (data) => {
        try {
            const respuesta = await clienteAxios.put(`/encuentros/${data?.code_match}`, data);
            dispatch({
                type: EDITAR_ENCUENTRO,
                payload: respuesta.data.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteEncuentro = async (code_match) => {
        try {
            const respuesta = await clienteAxios.delete(`/encuentros/${code_match}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_ENCUENTRO,
                payload: respuesta.data.code_match
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <EncuentrosContext.Provider
            value={{
                encuentros: state.encuentros,
                encuentro: state.encuentro,
                message: state.message,
                getEncuentros,
                getEncuentro,
                registroEncuentro,
                updateEncuentro,
                deleteEncuentro
            }}
        >
            {props.children}
        </EncuentrosContext.Provider>
    )
}

export default EncuentrosState;