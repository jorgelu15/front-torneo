import React, { FC } from 'react';
import Button from '../Button/Button';


interface HeaderProps {
  inicio?: boolean;
  perfil?: boolean;
}

const Header: FC<HeaderProps> = ({inicio= false, perfil=false}) => (
  <div className="jf-se margin-top20px">
    <div className="logo">
      <img src="./img/HyperPlay.png" alt="" />
    </div>
    <div className="jf-center">
        {inicio && <a href="/" className='header-right-a'>Inicio</a>}
        {perfil && <a href="/" className='header-right-a'>Perfil</a>}
        <Button padding='0px 10px'>Iniciar Sesión</Button>
    </div>
  </div>
);

export default Header;
