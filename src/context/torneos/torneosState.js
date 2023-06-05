import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import TorneosContext from './torneosContext';
import TorneosReducer from './torneosReducer';

import {
    GET_TORNEOS,
    GET_TORNEO,
    REGISTRO_TORNEO_EXITOSO,
    REGISTRO_TORNEO_ERROR,
    EDITAR_TORNEO,
    BORRAR_TORNEO
} from '../../types';

const TorneosState = props => {

    const initialState = {
        torneos: null,
        torneo: null,
        message: null
    }

    const [state, dispatch] = useReducer(TorneosReducer, initialState);

    const getTorneos = async () => {
        try {
            const respuesta = await clienteAxios.get(`/torneos`);
            dispatch({
                type: GET_TORNEOS,
                payload: respuesta.data.torneos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getTorneo = async (code) => {
        try {
            const respuesta = await clienteAxios.get(`/torneos/${code}`);
            dispatch({
                type: GET_TORNEO,
                payload: respuesta.data.torneo
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registroTorneo = async (datos) => {
        try {
            const respuesta = await clienteAxios.post(`/torneos`, datos);
            dispatch({
                type: REGISTRO_TORNEO_EXITOSO,
                payload: respuesta.data.body.torneo
            })

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_TORNEO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updateTorneo = async (data) => {
        try {
            const respuesta = await clienteAxios.put(`/torneos/${data?.code}`, data);
            dispatch({
                type: EDITAR_TORNEO,
                payload: respuesta.data.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTorneo = async (code) => {
        try {
            const respuesta = await clienteAxios.delete(`/torneos/${code}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_TORNEO,
                payload: respuesta.data.code
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TorneosContext.Provider
            value={{
                torneos: state.torneos,
                torneo: state.torneo,
                message: state.message,
                getTorneos,
                getTorneo,
                registroTorneo,
                updateTorneo,
                deleteTorneo
            }}
        >
            {props.children}
        </TorneosContext.Provider>
    )
}

export default TorneosState;