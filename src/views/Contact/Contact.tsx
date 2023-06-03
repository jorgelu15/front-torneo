import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Form from '../../component/Form/Form';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';


interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <div className='fondo-negro view'>
    <Header inicio={true} perfil={true}/>

    <div className="jf-center div-form">
      <Form tittle="Información de Contacto" description="Proporciona tu información de contacto, para que los participantes de los torneos de tu organización puedan comunicarse contigo en caso de alguna PQRS.">

        <Input
          type="email"
          placeholder="Email"
        />
        <Input
          type="number"
          placeholder="Teléfono o celular"
        />
        <Input
          type="text"
          placeholder="Twitter"
        />
        <Input
          type="text"
          placeholder="Youtube"
        />
        <div className="form-div text-bold w100 margin-top20px">
          <Button width='100%'>Siguente</Button>
        </div>

      </Form>
    </div>

    <Footer />
  </div>
);

export default Contact;
