import React, { FC, useContext, useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Form from '../../component/Form/Form';
import Input from '../../component/Input/Input';
import Footer from '../../component/Footer/Footer';
import Button from '../../component/Button/Button';
import routes from '../../helpers/routes';
import { Link } from 'react-router-dom';

import OrganizacionContext from '../../context/organizacion/organizacionContext';
import AuthContext from '../../context/authentication/authContext';


interface CreateOrganizationProps { }

const CreateOrganization: FC<CreateOrganizationProps> = () => {
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    getOrganizaciones();
  }, [])

  const organizacionContext = useContext(OrganizacionContext);
  const { getOrganizaciones, registroOrganizacion } = organizacionContext;

  const [data, setData] = useState({
    id_usuario: usuario?.id_usuario,
    nombre: "",
    tipo: "",
    email: "",
    telefono: "",
    twitter: "",
    youtube: "",
  });

  const { id_usuario, nombre, tipo, email, telefono, twitter, youtube } = data;

  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlerRegistro = (e: any): void => {
    e.preventDefault();
    registroOrganizacion(data);
    setNext(!next);
    setData({
      id_usuario: usuario?.id_usuario,
      nombre: "",
      tipo: "",
      email: "",
      telefono: "",
      twitter: "",
      youtube: "",
    })
  }

  const [next, setNext] = useState(true);

  return (
    next ? <div className='fondo-negro view'>
      <Header inicio={true} perfil={true} />

      <div className="jf-center div-form">
        <Form tittle="Crear una Organización" description="Al crear una organización podrás crear torneos y figurás como propietario de dicha organización, podrás delegar funciones al personal de logística, así como tambien eliminar dicha organización." onSubmit={handlerRegistro}>

          <Input
            type="text"
            label="Nombre"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={onChange}
          />

          <div className={"form-div w100 "}>
            <select className='input' name="tipo" value={tipo} onChange={onChange}>
              <option value="">Seleccione una opción</option>
              <option value="personal">Personal</option>
              <option value="negocio">Negocio</option>
            </select>
          </div>

          <div className="form-div text-bold w100 margin-top20px" onClick={() => setNext(!next)}>
            <p className='button-blue jf-center text-bold' style={{ width: "100%" }}>Siguiente</p>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
      :
      <div className='fondo-negro view'>
        <Header inicio={true} perfil={true} />

        <div className="jf-center div-form">
          <Form tittle="Información de Contacto" description="Proporciona tu información de contacto, para que los participantes de los torneos de tu organización puedan comunicarse contigo en caso de alguna PQRS." onSubmit={handlerRegistro}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <Input
              type="number"
              placeholder="Teléfono o celular"
              name="telefono"
              value={telefono}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Twitter"
              name="twitter"
              value={twitter}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Youtube"
              name="youtube"
              value={youtube}
              onChange={onChange}
            />
            <div className="form-div text-bold w100 margin-top20px">
              <Button width='100%'>Terminar</Button>
            </div>

          </Form>
        </div>

        <Footer />
      </div>
  )
};

export default CreateOrganization;
