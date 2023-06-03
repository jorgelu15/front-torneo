import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Form from '../../component/Form/Form';
import Input from '../../component/Input/Input';
import Footer from '../../component/Footer/Footer';
import Button from '../../component/Button/Button';


interface CreateOrganizationProps {}

const CreateOrganization: FC<CreateOrganizationProps> = () => (
  <div className='fondo-negro view'>
    <Header inicio={true} perfil={true}/>

    <div className="jf-center div-form">
      <Form tittle="Crear una Organización" description="Al crear una organización podrás crear torneos y figurás como propietario de dicha organización, podrás delegar funciones al personal de logística, así como tambien eliminar dicha organización.">

        <Input
          type="text"
          label="Tipo de Orgazación"
          placeholder="Seleccionar tipo"
        />

        <Input
          type="file"
          label="Banner del torneo"
          id= "i1"
          height='100px'
        />
        <div className="form-div text-bold w100 margin-top20px">
          <Button width='100%'>Siguiente</Button>
        </div>
      </Form>
    </div>
    
    <Footer />
  </div>
);

export default CreateOrganization;
