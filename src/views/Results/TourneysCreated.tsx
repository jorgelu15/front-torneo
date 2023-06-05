import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import Header from '../../component/Header/Header';
import Table from '../../component/Table/Table';
import SectionResults from '../SectionResult/SectionResult';

const data = [
    {
        name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
        format: '5vs5',
        fecha: '06/03/23',
        participants: 10,
        state: 'active'
    },
    {
        name: <img src="../img/icon-valorant.png" alt="icon-valorant" />,
        format: '2vs2',
        fecha: '07/03/23',
        participants: 8,
        state: 'active'
    },
    {
        name:  <img src="../img/icon-valorant.png" alt="icon-valorant" />,
        format: 'Solo',
        fecha: '08/03/23',
        participants: 100,
        state: 'active'
    },
    {
        name:  <img src="../img/icon-valorant.png" alt="icon-valorant" />,
        format: '6vs6',
        fecha: '09/03/23',
        participants: 12,
        state: 'active'
    },
    {
        name:  <img src="../img/icon-valorant.png" alt="icon-valorant" />,
        format: '3vs3',
        fecha: '10/03/23',
        participants: 6,
        state: 'active'
    }

];

const columns = {
    name: "Nombre",
    format: 'Formato',
    fecha: 'Fecha',
    participants: "Participantes",
    state: 'Estado'
};

const rows = data.map((item) => ({ row: item }));
interface ResultsProps { }

const Results: FC<ResultsProps> = ({ }) => {

    return (
        <SectionResults
            sectionTitle={"Nombre de la organización"}
            tableTitle={"Torneos Creados"}
            rows={rows} columns={columns} />)
};

export default Results;
