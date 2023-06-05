import React, { FC, useContext, useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import SectionResults from '../SectionResult/SectionResult';
import Input from '../../component/Input/Input';
import Table from '../../component/Table/Table';

import InscripcionContext from '../../context/inscripcion/inscripcionContext';
import AuthContext from '../../context/authentication/authContext';


interface InscriptionProps { }

const data = [
  {
    name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
    codigo: '324324',
    fecha: '06/03/23',
    participants: 10,
    state: 'active'
  },
  {
    name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
    codigo: '324324',
    fecha: '07/03/23',
    participants: 8,
    state: 'active'
  },
  {
    name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
    codigo: '324324',
    fecha: '08/03/23',
    participants: 100,
    state: 'active'
  },
  {
    name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
    codigo: '324324',
    fecha: '09/03/23',
    participants: 12,
    state: 'active'
  },
  {
    name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
    codigo: '324324',
    fecha: '10/03/23',
    participants: 6,
    state: 'active'
  }

];

const columns = {
  name: "Nombre",
  codigo: 'Codigo',
  fecha: 'Fecha',
  state: 'Estado'
};

const rows = data.map((item) => ({ row: item }));



const Inscription: FC<InscriptionProps> = () => {

  const authContext = useContext(AuthContext);
  const { autenticado , signUp, usuario, usuarioAutenticado } = authContext;

  const inscripcionContext = useContext(InscripcionContext);
  const { registroInscripcion } = inscripcionContext;

  const [torneu, setTorneu] = useState(0);

  useEffect(()=> {
    //usuarioAutenticado()
  },[])

  const [dataS, setData] = useState({
    fee: 1,
    code: torneu,
    code_participant: 4,   //usuario?.id_usuario,
    status: 1
  });

  const onChange = (e: any) => {
    setTorneu(e.target.value);
  };

  const handlerInscription = (e: any): void => {
    e.preventDefault();
    registroInscripcion(dataS)
  }

  return (
    <div className='results-view view'> <Header inicio={true} perfil={true} />
      {/* <Outlet/> */}
      <div className='section-result'>
        <div className="section-content">
            <div >
                <div className='section-title'>
                    <h2>{"Nombre del torneo"}</h2>
                    <Input
                      type="text"
                      id="cod_tor"
                      placeholder="Codigo del torneo"
                      name="codigo"
                      value={torneu}
                      onChange={onChange}
                    />
                    <button onClick={handlerInscription}>Solicitar Inscripcion</button>
                </div>
                <h3>{"Participantes"}</h3>
            </div>
            <div>
                <Table rows={rows} columns={columns} />
            </div>
        </div>
    </div>
     
    </div>
  );
};

export default Inscription;
