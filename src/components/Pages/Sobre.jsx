import React from 'react';
import imgColacao from '../../../public/images/img-colacao.png';
import './sobre.css';

const Sobre = () => {
  return (
    <div className="p-8 md:p-16">
      <h1 className="font-heading text-center text-5xl dark:text-primary-light text-primary mb-8">Sobre Mim</h1>

      <div className="text-lg items-start border justify-center text-secondary-dark dark:text-secondary-light">
        <img 
          src={imgColacao} 
          alt="Giullia Beatriz" 
          className="float-left w-1/2 md:w-1/3 mr-6 h-auto shape-image" 
        />
        
        <p className="mt-2 mb-0">
          Olá, eu sou a Giullia! 👋 
        </p>
        <p className="mb-4 font-corpo">
          Tenho 21 anos e sou Bacharel em Sistemas de Informação pela Universidade Federal de Mato Grosso (UFMT). 
          Sou natural de Cuiabá-MT (de chapa e cruz!) e uma das minhas características mais imperceptíveis é que sou Corinthiana roxa e amo escutar música, principalmente o gênero rap/hip-hop e as suas vertentes. 
          Sou movida pela curiosidade e pelo desejo constante de aprender, sendo apaixonada por criar experiências digitais que realmente façam a diferença. 
        </p>
        <p>
          teste
        </p>
      </div>
    </div>
  );
};

export default Sobre;