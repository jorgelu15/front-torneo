import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import EquiposContext from './equiposContext';
import EquiposReducer from './equiposReducer';

import {
    GET_EQUIPOS,
    GET_EQUIPO,
    REGISTRO_EQUIPO_EXITOSO,
    REGISTRO_EQUIPO_ERROR,
    EDITAR_EQUIPO,
    BORRAR_EQUIPO
} from '../../types';

const EquiposState = props => {

    const initialState = {
        equipos: null,
        equipo: null,
        message: null
    }

    const [state, dispatch] = useReducer(EquiposReducer, initialState);

    const getEquipos = async () => {
        try {
            const respuesta = await clienteAxios.get(`/equipos`);
            dispatch({
                type: GET_EQUIPOS,
                payload: respuesta.data.equipo
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getEquipo = async (code) => {
        try {
            const respuesta = await clienteAxios.get(`/equipos/${code}`);
            dispatch({
                type: GET_EQUIPO,
                payload: respuesta.data.equipo
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registroEquipo = async (datos) => {
        try {
            const respuesta = await clienteAxios.post(`/equipos`, datos);
            dispatch({
                type: REGISTRO_EQUIPO_EXITOSO,
                payload: respuesta.data.body.equipo
            })

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_EQUIPO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updateEquipo = async (data) => {
        try {
            const respuesta = await clienteAxios.put(`/equipos/${data?.code}`, data);
            dispatch({
                type: EDITAR_EQUIPO,
                payload: respuesta.data.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteEquipo = async (code) => {
        try {
            const respuesta = await clienteAxios.delete(`/equipos/${code}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_EQUIPO,
                payload: respuesta.data.code
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <EquiposContext.Provider
            value={{
                equipos: state.equipos,
                equipo: state.equipo,
                message: state.message,
                getEquipos,
                getEquipo,
                registroEquipo,
                updateEquipo,
                deleteEquipo
            }}
        >
            {props.children}
        </EquiposContext.Provider>
    )
}

export default EquiposState;