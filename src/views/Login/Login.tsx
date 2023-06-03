import { FC } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Button from "../../component/Button/Button";
import Input from "../../component/Input/Input";
import Form from "../../component/Form/Form";

interface LoginProps { }

const Login: FC<LoginProps> = () => (
  <div className="fondo1 view">
    <Header />

    <div className="jf-center div-form">
      <Form tittle="Iniciar Sesión">
        <Input
          className="w100 input"
          type="text"
          placeholder="Usuario"
        />
        <Input
          helperText="la contraseña debe tener entre 4 y 60 caracteres."
          className="w100 input"
          type="password"
          placeholder="Contraseña"
        />
        <div className="form-div text-bold w100 margin-top20px">
          <Button width='100%'>Iniciar Sesión</Button>
        </div>
        <p>
          <span className="text-gray">¿Primera vez en HyperPlay? </span>
          <span className="text-white">Registrate Ahora</span>
        </p>
      </Form>
    </div>

    <Footer />
  </div>
);

export default Login;
