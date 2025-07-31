import React from 'react';
import imgColacao from '../../../public/images/img-colacao.png';
import TecnologiasSwiper from '../../components/TecnologiasSwiper/TecnologiasSwiper'; // Importe o novo componente
import './sobre.css';

const Sobre = () => {
  return (
    <div className="p-8 md:p-16">
      <h1 className="font-heading  text-center text-5xl dark:text-primary-light text-primary mb-8">Criando experiências digitais com propósito!</h1>

      <div className="text-lg items-start justify-center text-secondary-dark dark:text-secondary-light">
        <img
          src={imgColacao}
          alt="Giullia Beatriz"
          className="float-left w-1/2 md:w-1/3 mr-6 h-auto shape-image"
        />

        <section>
          <p className="mt-16 text-primary-dark dark:text-primary-light text-2xl mb-1">
            Olá, eu sou a Giullia! 👋
          </p>
          <p className="mb-6 text-sm font-sans">
            Tenho 21 anos e sou Bacharel em Sistemas de Informação pela Universidade Federal de Mato Grosso (UFMT).
            Sou uma UX/UI Designer e Desenvolvedora Front-End apaixonada por transformar ideias complexas em experiências digitais intuitivas, acessíveis e visualmente cativantes.
            Meu objetivo é criar pontes entre as necessidades dos usuários e os objetivos de negócio, utilizando um design centrado no ser humano e um código limpo e eficiente.
          </p>

        </section>

        <p className="mb-2 mt-4 text-2xl font-bold font-heading text-primary">
          MAS POR QUÊ?
        </p>
        <p className="mb-4 text-sm">
          Acredito que um <span className="text-primary font-bold">bom design</span> começa com a empatia. Mergulho para entender o comportamento e as insatisfações do usuário.
          Para mim, construir uma interface de sucesso não se baseia apenas na estética, mas também em sua utilidade e funcionalidade.
        </p>
        <p className="mb-4 text-sm"> No front-end, minha missão é dar vida a essa visão com precisão e performance. Valorizo código semântico, escalável, responsivo e que garanta que a experiência projetada seja entregue perfeitamente para todos os utilizadores.
          Acredito que a colaboração entre <span className="text-primary font-bold">design e desenvolvimento </span>é a chave para criar não somente produtos, mas experiências.</p>
      </div>


        <TecnologiasSwiper />
    </div>
  );
};

export default Sobre;