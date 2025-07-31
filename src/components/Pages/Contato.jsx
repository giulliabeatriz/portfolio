
import React from 'react';
import FormContato from '../FormContato/FormContato';
import FormasContato from '../FormasContato/FormasContato.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contato = () => {

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-heading text-2xl text-lg-5xl dark:text-primary-light text-primary">Vamos construir algo incrível juntos?</h1>
          <p className="font-sans text-lg text-secondary-dark dark:text-secondary-light mt-4 max-w-2xl mx-auto">
            Adoraria ouvir sobre seu projeto ou oportunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <FormasContato/>
          <FormContato/>
        </div>
      </div>
    </section>
  );
};

export default Contato;