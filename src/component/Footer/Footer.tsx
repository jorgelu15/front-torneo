import React, { FC } from 'react';


interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className='footer jf-center fd-column text-bold'>
    <div className="jf-center w-fit">
      <span className='footer-div'>Términos de Uso</span>
      <span className='footer-div footer-div-medium'>Política de Privacidad</span>
      <span className='footer-div'>Acerca de Nosotros</span>
    </div>
    <div className='footer-div margin-button20px'>HyperPlay, SAS todos los derechos reservados</div>
  </div>
);

export default Footer;
