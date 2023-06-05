import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import Form from '../../component/Form/Form';
import ContentInputs from '../../component/ContentInputs/ContentInputs';
import routes from '../../helpers/routes';
import { Link } from 'react-router-dom';


interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => (
  <div className='fondo1 view'>
    <Header />

    <div className="jf-center div-form">
      <Form tittle="Registrarse">

        <ContentInputs id='c1'>
          <Input
            type="email"
            placeholder="Email"
          />
          <Input
            type="text"
            placeholder="Nombre de usuario"
          />
        </ContentInputs>

        <ContentInputs id='c2'>
          <Input
            type="text"
            placeholder="Nombre"
          />
          <Input
            type="text"
            placeholder="Apellido"
          />
        </ContentInputs>

        <Input
          helperText="la contraseña debe tener entre 4 y 60 caracteres."
          type="password"
          placeholder="Contraseña"
        />

        <p className='text-white'>fecha de nacimiento</p>
        
        <ContentInputs id='c3'>
          <Input
            type="number"
            placeholder="dd"
          />
          <Input
            type="number"
            placeholder="mm"
          />
          <Input
            type="number"
            placeholder="aaa"
          />
        </ContentInputs>

        <ContentInputs id='c4'>
          <Input
            type="text"
            placeholder="Pais"
          />
          <Input
            type="text"
            placeholder="Ciudad"
          />
        </ContentInputs>

        <Input
          type="text"
          placeholder="Tipo de cuenta"
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
);

export default SignUp;
