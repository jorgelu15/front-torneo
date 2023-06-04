import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Form from '../../component/Form/Form';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';


interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="fondo1 view">
    <Header />

    <div className="jf-center div-form">
      <div>
        <h2 className='text-white fs40'>Juegos y torneos ilimitados y mucho más</h2>
        <div className='mt20 mb20' style={{"height":"40px"}}>
          <input type="email" className='input-transparent' placeholder='Email'/>
          <Button display='inline-block' height='100%' margin='0 0 0 10px'>
            Comenzar
          </Button>
        </div>
        <div className='mt20 mb20 jf-sb'>
          <div className="card fd-col">
            <img src="/img/card1.png" alt="" /> 
            <p className='text-white text-bold fs20'>Gana premios increíbles todos los días</p>
            <p className='text-white fs12'>Todos los días millones de jugadores se reúnen para competir y llevarse la gloria</p>
          </div>
          <div className="card">
            <img src="/img/card2.png" alt="" />
            <p className='text-white text-bold fs20'>Descarga la app para estar enterado de todo</p>
            <p className='text-white fs12'>Mira los competidores que hay en cualquier momento</p>
          </div>
          <div className="card">
            <img src="/img/card3.png" alt="" />
            <p className='text-white text-bold fs20'>Compite donde quieras</p>
            <p className='text-white fs12'>Battle royale, tactical shooter, FIFA en tu tablet, computadora o telefono</p>
          </div>
        </div>
        <div className='df-col ai-c'>
          <p className='text-white fs40'>¿Alguna pregunta?</p>
          <p className='text-white'>Visite nuestro centro de ayuda para saber más.</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Home;