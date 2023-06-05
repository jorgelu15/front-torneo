import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION,
} from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        msg: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const signIn = async datos => {
        try {
            const respuesta = await clienteAxios.post('/auth', datos);
            console.log(respuesta)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado();
        } catch (error) {
            const msg = {
                msg: error.response.data.msg,
                categoria: 'btn-log btn-warning mb-1'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: msg
            })
        }
    }

    const signUp = async datos => {
        const data = {
            nit: datos.nit,
            nickname: datos.nombre_usuario,
            name: datos.nombre,
            lastname: datos.apellido,
            telephone: datos.celular,
            country: datos.pais,
            city: datos.ciudad,
            birthdate: "" + datos.anio + "-" + datos.mes + "-" + datos.dia,
            email: datos.email,
            password: datos.password,
            role: datos.tipo,
        }
        try {
            const respuesta = await clienteAxios.post('/usuarios', data);
            // dispatch({
            //     type: REGISTRO_EXITOSO,
            //     payload: respuesta.data
            // })
        } catch (error) {
            const msg = {
                msg: error.response.data.msg,
                categoria: 'btn-log btn-warning mb-1'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: msg
            })
        }
    }

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/auth');
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            logOut();
        }
    }

    const logOut = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                msg: state.msg,
                cargando: state.cargando,
                signIn,
                signUp,
                usuarioAutenticado,
                logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;