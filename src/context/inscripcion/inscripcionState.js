import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import InscripcionContext from './inscripcionContext';
import InscripcionReducer from './inscripcionReducer';

import {
    GET_INSCRIPCIONES,
    GET_INSCRIPCION,
    REGISTRO_INSCRIPCION_EXITOSO,
    REGISTRO_INSCRIPCION_ERROR,
    EDITAR_INSCRIPCION,
    BORRAR_INSCRIPCION
} from '../../types';

const InscripcionState = props => {

    const initialState = {
        inscripciones: null,
        inscripcion: null,
        message: null
    }

    const [state, dispatch] = useReducer(InscripcionReducer, initialState);

    const getInscripciones = async () => {
        try {
            const respuesta = await clienteAxios.get(`/inscripcion`);
            dispatch({
                type: GET_INSCRIPCIONES,
                payload: respuesta.data.inscripcion
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getInscripcion = async (code_torneo) => {
        try {
            const respuesta = await clienteAxios.get(`/inscripcion/${code_torneo}`);
            dispatch({
                type: GET_INSCRIPCION,
                payload: respuesta.data.inscripcion
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registroInscripcion = async (datos) => {
        try {
            const respuesta = await clienteAxios.post(`/inscripcion`, datos);
            dispatch({
                type: REGISTRO_INSCRIPCION_EXITOSO,
                payload: respuesta.data.body.inscripcion
            })

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_INSCRIPCION_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updateInscripcion = async (data) => {
        try {
            const respuesta = await clienteAxios.put(`/inscripcion/${data?.id_inscripcion}`, data);
            dispatch({
                type: EDITAR_INSCRIPCION,
                payload: respuesta.data.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteInscripcion = async (id_inscripcion) => {
        try {
            const respuesta = await clienteAxios.delete(`/inscripcion/${id_inscripcion}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_INSCRIPCION,
                payload: respuesta.data.id_inscripcion
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <InscripcionContext.Provider
            value={{
                inscripciones: state.inscripciones,
                inscripcion: state.inscripcion,
                message: state.message,
                getInscripciones,
                getInscripcion,
                registroInscripcion,
                updateInscripcion,
                deleteInscripcion
            }}
        >
            {props.children}
        </InscripcionContext.Provider>
    )
}

export default InscripcionState;