import React from 'react';
import TecnologiasSwiper from '../TecnologiasSwiper/TecnologiasSwiper';
import MeusServicos from '../MeusServicos/MeusServicos.jsx'; 
import HeroSection from '../HeroSection/HeroSection.jsx';


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <MeusServicos/>
      <TecnologiasSwiper />
    </div>
  );
};

export default Home;