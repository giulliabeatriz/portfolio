import React from 'react';
import imgColacao from '../../../public/images/img-colacao.png';
import './sobre.css';

const Sobre = () => {
  return (
    <div className="p-8 md:p-16">
      <h1 className="font-heading text-center text-5xl text-primary mb-8">Sobre Mim</h1>

      <div className="text-lg items-start text-secondary-dark dark:text-secondary-light leading-relaxed">
        <img 
          src={imgColacao} 
          alt="Giullia Beatriz" 
          className="float-right w-1/2 md:w-1/3 mr-6 mb-4 shape-image" 
        />
        
        <p className="mt-2 mb-4">
          teste
        </p>
        <p className="mb-4">
          teste
        </p>
        <p>
          teste
        </p>
      </div>
    </div>
  );
};

export default Sobre;