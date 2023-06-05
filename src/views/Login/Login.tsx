import { FC, useContext, useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Button from "../../component/Button/Button";
import Input from "../../component/Input/Input";
import Form from "../../component/Form/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../../helpers/routes";

import AuthContext from "../../context/authentication/authContext";

interface LoginProps { }

const Login: FC<LoginProps> = () => {
  const authContext = useContext(AuthContext);
  const { autenticado, signIn } = authContext;

  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || routes.login;

  //useEffect para validar si existe una sesion abierta
  useEffect(() => {
    if (autenticado) navigate(routes.home);
  }, [autenticado, navigate, from]);

  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const { email, password } = datos;

  const onChange = (e: any) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSignIn = (e:any): void => {
    e.preventDefault();
    signIn(datos)
  }

  return (
    <div className="fondo1 view">
      <Header />

      <div className="jf-center div-form">
        <Form tittle="Iniciar Sesión" onSubmit={handlerSignIn}>
          <Input
            className="w100 input"
            type="text"
            placeholder="Usuario"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <Input
            helperText="la contraseña debe tener entre 4 y 60 caracteres."
            className="w100 input"
            type="password"
            placeholder="Contraseña"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
          <div className="form-div text-bold w100 margin-top20px">
            <Button width='100%'>Iniciar Sesión</Button>
          </div>
          <p>
            <span className="text-gray">¿Primera vez en HyperPlay? </span>
            <Link to={routes.signup} className="text-white">Registrate Ahora</Link>
          </p>
        </Form>
      </div>
      <Footer />
    </div>
  )
};

export default Login;
