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
        
        <p className="mt-2 mb-1">
          Olá, eu sou a Giullia! 👋 
        </p>
        <p className="mb-6 font-corpo">
          Tenho 21 anos e sou Bacharel em Sistemas de Informação pela Universidade Federal de Mato Grosso (UFMT). 
          Sou natural de Cuiabá-MT (de chapa e cruz!) e uma das minhas características mais imperceptíveis é que sou Corinthiana roxa e amo escutar música, principalmente o gênero rap/hip-hop e as suas vertentes. 
          Sou movida pela curiosidade e pelo desejo constante de aprender, sendo apaixonada por criar experiências digitais que realmente façam a diferença. 
        </p>
        <p className="mb-2 font-xl font-bold mb-0 text-primary">
          Front-End Development x Ux/Ui Design
        </p>
        <p className="mb-4 font-corpo">
          Eu conheci o desenvolvimento front-end no quinto semestre da faculdade e me apaixonei. Logo, iniciei meu estágio na área e me mantive por quase dois anos. Mas, ao final da faculdade, pronta para enfrentar meu TCC, me questionei a mesma coisa que todo estudante pensa: "Qual tema eu escolho?". 
          Após muitos pensamentos conturbantes, decidi me arriscar em uma nova área: o Ux/Ui! Meu tema foi "Refinamento da experiência do usuário no Portal do Conhecimento: aplicação  de metodologias "
        </p>
      </div>
    </div>
  );
};

export default Sobre;