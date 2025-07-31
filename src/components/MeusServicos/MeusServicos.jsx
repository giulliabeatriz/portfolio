import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode } from '@fortawesome/free-solid-svg-icons'; 

const servicos = [
  {
    icon: faPalette,
    title: 'UX/UI Design',
    description: 'Crio interfaces intuitivas e visualmente agradáveis, focadas na experiência do usuário. Do wireframe ao protótipo final, meu objetivo é construir produtos que as pessoas amem usar.',
  },
  {
    icon: faCode,   
    title: 'Desenvolvimento Front-End',
    description: 'Transformo designs em código funcional e performático. Construo aplicações web responsivas e interativas com foco em código limpo, semântico e nas melhores práticas do mercado.',
  }
];

const MeusServicos = () => {
  return (
    <section className="py-20 bg-secondary-light dark:bg-secondary-dark/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-primary font-bold">O que eu Faço</h2>
          <p className="font-sans text-lg text-secondary-dark dark:text-secondary-light mt-4 max-w-2xl mx-auto">
            Minha paixão reside na interseção entre design e tecnologia, criando soluções completas e coesas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {servicos.map((servico) => (
            <div 
              key={servico.title} 
              className="bg-white dark:bg-secondary-dark p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                <FontAwesomeIcon 
                  icon={servico.icon} 
                  className="h-10 w-10 text-primary" 
                />
              </div>

              <h3 className="font-heading text-2xl text-secondary-dark dark:text-white mb-3">
                {servico.title}
              </h3>

              <p className="font-sans text-base text-secondary dark:text-secondary-light leading-relaxed">
                {servico.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MeusServicos;