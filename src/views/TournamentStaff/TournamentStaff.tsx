import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import Form from '../../component/Form/Form';
import ContentInputs from '../../component/ContentInputs/ContentInputs';


interface TournamentStaffProps {}

const TournamentStaff: FC<TournamentStaffProps> = () => (
  <div className='fondo-negro view'>
    <Header inicio={true} perfil={true}/>

    <div className="jf-center div-form">
      <Form tittle="Personal a cargo del torneo" 
      description={<>
        Proporciona tu información de contacto, para que los participantes de los torneos de tu organización puedan comunicarse contigo en caso de alguna PQRS.<br />
        -<b>El propietario </b>creó la organización y puede hacer cualquier cosa acerca de esta.<br />
        -<b>Los administradores </b>pueden hacer todo lo que hace un propietario, exceptuando eliminar la organización.<br />
        -<b>Los moderadores </b>pueden crear y editar torneos para la organización, pero no pueden hacer cambios a la organización en si.<br />
        -<b>Los supervisores </b>de torneo pueden reportar y resolver disputas cambiando puntajes en lso torneos de la organización.<br />
        </>}>

        <div className='jf-center w100'>
          <p className='text-gray w50'>Nombre de usuario</p>
          <p className='text-gray w50'>Rol</p>
        </div>
        <hr className='hr'/>
        <div className='jf-center w100'>
          <p className='text-gray w50'>JORGUE GUARDO ESTUDIANTE ACTIVO</p>
          <p className='text-gray w50'>Propietario</p>
        </div>
        <div className="w100 jf-center">
          <div className="w50">
            <ContentInputs id='c11' width="96%">
              <Input
                type="text"
                placeholder="Nombre estudiante a agregar"
              />
            </ContentInputs>    
          </div>  
          <div className="w50">
            <ContentInputs id="c2">
              <Input
                type="text"
                placeholder="Organizador"
              />
              <Input
                type="text"
                placeholder="Agregar"
              />
            </ContentInputs>    
          </div>  
        </div>
        
        
        <div className="form-div text-bold w100 margin-top20px">
          <Button width='100%'>Terminar</Button>
        </div>
      </Form>
    </div>
    
    <Footer />
  </div>
);

export default TournamentStaff;
