import React, { FC, useState } from 'react';
import Header from '../../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';

interface ResultsProps {}

const Results: FC<ResultsProps> = () => {

  return (
    <div className='results-view view'>
      <Header inicio={true} perfil={true} />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Results;
