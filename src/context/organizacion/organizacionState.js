import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import OrganizacionContext from './organizacionContext';
import OrganizacionReducer from './organizacionReducer';

import {
    GET_ORGANIZACIONES,
    GET_ORGANIZACION,
    REGISTRO_ORGANIZACION_EXITOSO,
    REGISTRO_ORGANIZACION_ERROR,
    EDITAR_ORGANIZACION,
    BORRAR_ORGANIZACION
} from '../../types';

const OrganizacionState = props => {

    const initialState = {
        organizaciones: null,
        organizacion: null,
        message: null
    }

    const [state, dispatch] = useReducer(OrganizacionReducer, initialState);

    const getOrganizaciones = async () => {
        try {
            const respuesta = await clienteAxios.get(`/organizacion`);
            dispatch({
                type: GET_ORGANIZACIONES,
                payload: respuesta.data.organizacion
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getOrganizacione = async (id_organizacion) => {
        try {
            const respuesta = await clienteAxios.get(`/organizacion/${id_organizacion}`);
            dispatch({
                type: GET_ORGANIZACION,
                payload: respuesta.data.organizacion
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registroOrganizacion = async (datos) => {
        try {
            const data = {
                id_usuario: datos.id_usuario,
                name: datos.nombre,
                type: datos.tipo,
                email: datos.email,
                tel: datos.telefono,
                redes: JSON.stringify({
                    twitter: datos.twitter,
                    youtube: datos.youtube
                }),

            }
            const respuesta = await clienteAxios.post(`/organizacion`, data);
            console.log("alv")

            dispatch({
                type: REGISTRO_ORGANIZACION_EXITOSO,
                payload: respuesta.data.body.organizacion
            })

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_ORGANIZACION_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updateOrganizacion = async (data) => {
        try {
            const respuesta = await clienteAxios.put(`/organizacion/${data?.id_organizacion}`, data);
            dispatch({
                type: EDITAR_ORGANIZACION,
                payload: respuesta.data.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteOrganizacion = async (id_organizacion) => {
        try {
            const respuesta = await clienteAxios.delete(`/organizacion/${id_organizacion}`);
            // console.log(respuesta.data.id)
            dispatch({
                type: BORRAR_ORGANIZACION,
                payload: respuesta.data.id_organizacion
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <OrganizacionContext.Provider
            value={{
                equipos: state.equipos,
                equipo: state.equipo,
                message: state.message,
                getOrganizaciones,
                getOrganizacione,
                registroOrganizacion,
                updateOrganizacion,
                deleteOrganizacion
            }}
        >
            {props.children}
        </OrganizacionContext.Provider>
    )
}

export default OrganizacionState;