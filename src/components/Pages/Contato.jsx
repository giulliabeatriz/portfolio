
import React from 'react';
import FormContato from '../FormContato/FormContato';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contato = () => {

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Título da Página */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-2xl text-lg-5xl text-primary">Vamos construir algo incrível juntos?</h1>
          <p className="font-sans text-lg text-secondary-dark dark:text-secondary-light mt-4 max-w-2xl mx-auto">
            Adoraria ouvir sobre seu projeto ou oportunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-xs-center text-lg-3xl text-secondary-dark dark:text-white mb-4">Entre em Contato</h2>
              <p className="text-secondary dark:text-secondary-light leading-relaxed">
                Prefere um contato mais direto ou quer se conectar? Você pode me encontrar nestes canais. Estou sempre online e pronta para responder.
              </p>
            </div>

            <div className="space-y-4 grid-col-3">
              <a href="mailto:giulliabeatrizrsilva@gmail.com" className="flex items-center gap-4 group flex-col">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">E-mail</span>
              </a>
              <a href="https://linkedin.com/in/giullia-beatriz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group flex-col">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
              <a href="https://github.com/giulliabeatriz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group flex-col">
                <FontAwesomeIcon icon={faGithub} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a href="https://www.instagram.com/giullia.brs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group flex-col">
                <FontAwesomeIcon icon={faInstagram} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white group-hover:text-primary transition-colors">Instagram</span>
              </a>
              <a href="https://wa.link/hun4gq" className="flex items-center gap-4 flex-col">
                <FontAwesomeIcon icon={faWhatsapp} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white">Whatsapp</span>
              </a>
              <div className="flex items-center gap-4 flex-col">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-xl" />
                <span className="font-sans text-secondary-dark dark:text-white">Cuiabá, MT, Brasil</span>
              </div>              
            </div>
          </div>
          <FormContato/>
        </div>
      </div>
    </section>
  );
};

export default Contato;