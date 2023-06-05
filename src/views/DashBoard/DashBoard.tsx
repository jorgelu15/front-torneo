import React, { FC, useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Carousel from '../../component/Carousel';


interface DashBoardProps { }

const DashBoard: FC<DashBoardProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["https://esports.as.com/2020/06/04/valorant/grupos-Twitch-Rivals-Valorant_1361283862_403051_1440x600.jpg"]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='fondo-negro'>
      <Header inicio={true} perfil={true} />
      <div className="jumbotron" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 212, 255, 0) 100%)')` }}>
        <img
          src={images[currentIndex]}
          alt="Slider Image"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        />
      </div>
      <Carousel />
      <Footer />
    </div>
  )
}

export default DashBoard;
