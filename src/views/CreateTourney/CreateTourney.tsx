import React, { FC } from 'react';
import Footer from '../../component/Footer/Footer';
import Button from '../../component/Button/Button';
import Input from '../../component/Input/Input';
import Header from '../../component/Header/Header';
import ContentInputs from '../../component/ContentInputs/ContentInputs';
import Form from '../../component/Form/Form';


interface CreateTourneyProps {}

const CreateTourney: FC<CreateTourneyProps> = () => (
  <div className='fondo-negro view'>
    <Header inicio={true} perfil={true}/>

    <div className="jf-center div-form">
      <Form 
        tittle="Crear Torneo"
        description="Para crear un torneo es necesario que proporciones los siguientes datos, sino cuentas con una cuenta y una organización no podrás crearlo. todos los torneos que crees estarán a nombre de tu organización."
      >
        <Input
          type="text"
          placeholder="Nombre del torneo"
        />
        <Input
          type="text"
          label="Seleccione un juego"
          placeholder="Buscar en el catalogo"
        />
        <ContentInputs id='c20'>
          <Input
            type="date"
            label="Fecha inicio"
            placeholder="20/3/2023"
          />
          <Input
            type="text"
            label="hora inicio"
            placeholder="14:30"
          />
        </ContentInputs>

        <Input
          type="password"
          label="Acerca de"
          placeholder="Escribe información acerca del torneo"
        />

        <div className="form-div text-bold w100 margin-top20px">
          <Button width='100%'>Siguiente</Button>
        </div>
      </Form>
    </div>

    <Footer />
  </div>
);

export default CreateTourney;
