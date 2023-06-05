import React, { FC } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';


interface HeaderProps {
  inicio?: boolean;
  perfil?: boolean;
}

const Header: FC<HeaderProps> = ({inicio= false, perfil=false}) => (
  <div className="jf-se padding-top20px">
    <Link to={routes.home} className="logo">
      <img src="../img/HyperPlay.png" alt="" />
    </Link>
    <div className="jf-center">
        {inicio && <Link to={routes.home} className='header-right-a'>Inicio</Link>}
        {perfil && <Link to={routes.contact} className='header-right-a'>Perfil</Link>}
        <Link to={routes.login} >Iniciar Sesión</Link>
    </div>
  </div>
);

export default Header;
