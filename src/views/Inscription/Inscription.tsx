import React, { FC, useState } from 'react';
import Header from '../../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import SectionResults from '../SectionResult/SectionResult';
import Table from '../../component/Table/Table';

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

  return (
    <div className='results-view view'> <Header inicio={true} perfil={true} />
      {/* <Outlet/> */}
      <div className='section-result'>
        <div className="section-content">
            <div >
                <div className='section-title'>
                    <h2>{"Nombre del torneo"}</h2>
                    <button>Solicitar Inscripcion</button>
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
