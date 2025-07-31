// src/pages/Contato.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contato = () => {
  // Estilos reutilizáveis para os inputs, para manter o código limpo
  const inputClasses = "w-full bg-secondary-light dark:bg-secondary-dark/60 border border-secondary/20 dark:border-secondary-light/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300";

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Título da Página */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl text-primary">Vamos construir algo incrível juntos?</h1>
          <p className="font-sans text-lg text-secondary-dark dark:text-secondary-light mt-4 max-w-2xl mx-auto">
            Adoraria ouvir sobre seu projeto ou oportunidade.
          </p>
        </div>

        {/* Container principal com layout de duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* --- Coluna da Esquerda (Informações) --- */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl text-secondary-dark dark:text-white mb-4">Entre em Contato</h2>
              <p className="text-secondary dark:text-secondary-light leading-relaxed">
                Prefere um contato mais direto ou quer se conectar? Você pode me encontrar nestes canais. Estou sempre online e pronta para responder.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:giulliabeatrizrsilva@gmail.com" className="flex items-center gap-4 group">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">seu-email@exemplo.com</span>
              </a>
              <a href="https://linkedin.com/in/giullia-beatriz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
              <a href="https://github.com/giulliabeatriz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <FontAwesomeIcon icon={faGithub} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a href="https://www.instagram.com/giullia.brs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <FontAwesomeIcon icon={faInstagram} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">Instagram</span>
              </a>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white">Cuiabá, MT, Brasil</span>
              </div>
            </div>
          </div>

          {/* --- Coluna da Direita (Formulário) --- */}
          <div>
            <form action="https://formspree.io/f/SUA_URL_UNICA" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2">Nome</label>
                <input type="text" name="name" id="name" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2">E-mail</label>
                <input type="email" name="email" id="email" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="subject" className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2">Assunto</label>
                <input type="text" name="subject" id="subject" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2">Mensagem</label>
                <textarea name="message" id="message" rows="5" required className={inputClasses}></textarea>
              </div>
              <div>
                <button type="submit" className="w-full font-heading text-lg bg-accent hover:bg-accent-dark text-secondary-dark font-bold py-3 px-6 rounded-full transition-colors shadow-lg">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;