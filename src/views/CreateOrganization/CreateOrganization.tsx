import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Form from '../../component/Form/Form';
import Input from '../../component/Input/Input';
import Footer from '../../component/Footer/Footer';
import Button from '../../component/Button/Button';
import routes from '../../helpers/routes';
import { Link } from 'react-router-dom';


interface CreateOrganizationProps { }

const CreateOrganization: FC<CreateOrganizationProps> = () => (
  <div className='fondo-negro view'>
    <Header inicio={true} perfil={true} />

    <div className="jf-center div-form">
      <Form tittle="Crear una Organización" description="Al crear una organización podrás crear torneos y figurás como propietario de dicha organización, podrás delegar funciones al personal de logística, así como tambien eliminar dicha organización.">

        <Input
          type="text"
          label="Nombre"
          placeholder="Nombre"
        />


        <div className={"form-div w100 "}>
          <select className='input'>
            <option>Personal</option>
            <option>Negocio</option>
          </select>
        </div>


        <div className="form-div text-bold w100 margin-top20px">
          <Link to={routes.contact} className='button-blue jf-center text-bold' style={{width: "100%"}}>Siguiente</Link>
        </div>
      </Form>
    </div>

    <Footer />
  </div>
);

export default CreateOrganization;
