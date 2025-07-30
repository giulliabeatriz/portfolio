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
          Aqui você escreve o primeiro parágrafo da sua biografia. O texto irá 
          automaticamente contornar a forma da imagem que está flutuando à esquerda,
          graças à mágica do CSS shape-outside que vamos definir a seguir.
        </p>
        <p className="mb-4">
          Este é o segundo parágrafo. Continue escrevendo sobre suas paixões, 
          habilidades e experiências. Note como o fluxo do texto é natural e se 
          adapta perfeitamente à sua silhueta, criando um layout muito mais 
          interessante e profissional do que um simples quadrado.
        </p>
        <p>
          Você pode adicionar quantos parágrafos forem necessários, e eles continuarão
          a seguir o contorno definido pela imagem.
        </p>
      </div>
    </div>
  );
};

export default Sobre;