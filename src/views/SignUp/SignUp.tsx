import React, { FC, useContext, useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import Form from '../../component/Form/Form';
import ContentInputs from '../../component/ContentInputs/ContentInputs';
import routes from '../../helpers/routes';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import AuthContext from '../../context/authentication/authContext';

interface SignUpProps { }

const SignUp: FC<SignUpProps> = () => {

  const authContext = useContext(AuthContext);
  const { autenticado, signUp } = authContext;

  const [data, setData] = useState({
    email: "",
    nombre_usuario: "",
    nombre: "",
    apellido: "",
    password: "",
    nit: "",
    dia: "",
    mes: "",
    anio: "",
    pais: "",
    ciudad: "",
    tipo: "",
    celular: ""
  });
  const { email, nombre_usuario, nombre, apellido, password, nit, dia, mes, anio, pais, ciudad, tipo, celular } = data;

  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSignUp = (e: any): void => {
    e.preventDefault();
    signUp(data)
  }

  return (
    <div className='fondo1 view'>
      <Header />

      <div className="jf-center div-form">
        <Form tittle="Registrarse" onSubmit={handlerSignUp}>

          <ContentInputs id='c1'>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Nombre de usuario"
              name="nombre_usuario"
              value={nombre_usuario}
              onChange={onChange}
            />
          </ContentInputs>

          <ContentInputs id='c2'>
            <Input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={apellido}
              onChange={onChange}
            />
          </ContentInputs>
            <Input
              helperText="la contraseña debe tener entre 4 y 60 caracteres."
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onChange}
            />

          <p className='text-white'>fecha de nacimiento</p>

          <ContentInputs id='c3'>
            <Input
              type="number"
              placeholder="dd"
              name="dia"
              value={dia}
              onChange={onChange}
            />
            <Input
              type="number"
              placeholder="mm"
              name="mes"
              value={mes}
              onChange={onChange}
            />
            <Input
              type="number"
              placeholder="aaa"
              name="anio"
              value={anio}
              onChange={onChange}
            />
          </ContentInputs>

          <ContentInputs id='c4'>
            <Input
              type="text"
              placeholder="Pais"
              name="pais"
              value={pais}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Ciudad"
              name="ciudad"
              value={ciudad}
              onChange={onChange}
            />
          </ContentInputs>
          <ContentInputs id='c5'>
          <Input
              type="text"
              placeholder="nit"
              name="nit"
              value={nit}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="celular"
              name="celular"
              value={celular}
              onChange={onChange}
            />
          </ContentInputs>

          <Input
            type="text"
            placeholder="Tipo de cuenta"
            name="tipo"
            value={tipo}
            onChange={onChange}
          />

          <div className="form-div text-bold w100 margin-top20px">
            <Button width='100%'>Crear Cuenta</Button>
          </div>

          <p>
            <span className="text-gray">¿Ya tienes cuenta en HyperPlay? </span>
            <Link to={routes.login} className="text-white">Inicia sesion</Link>
          </p>
        </Form>
      </div>

      <Footer />
    </div>
  )
};

export default SignUp;
