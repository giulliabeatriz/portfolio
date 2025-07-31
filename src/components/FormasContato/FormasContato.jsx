import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";

// 1. Centralize os dados em um array
const contactMethods = [
  {
    icon: faEnvelope,
    title: 'E-mail',
    value: 'Enviar e-mail',
    href: 'mailto:giulliabeatrizrsilva@gmail.com',
  },
  {
    icon: faLinkedin,
    title: 'LinkedIn',
    value: 'Ver Perfil',
    href: 'https://linkedin.com/in/giullia-beatriz',
  },
  {
    icon: faGithub,
    title: 'GitHub',
    value: 'Ver Projetos',
    href: 'https://github.com/giulliabeatriz',
  },
  {
    icon: faInstagram,
    title: 'Instagram',
    value: '@giullia.brs',
    href: 'https://www.instagram.com/giullia.brs/',
  },
  {
    icon: faWhatsapp,
    title: 'WhatsApp',
    value: 'Enviar Mensagem',
    href: 'https://wa.link/hun4gq',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Localização',
    value: 'Cuiabá, MT, Brasil',
    isLink: false, 
  },
];

const FormasContato = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl text-secondary-dark dark:text-white mb-4 text-center sm:text-left">
          Entre em Contato
        </h2>
        <p className="text-secondary dark:text-secondary-light leading-relaxed text-center sm:text-left">
          Prefere um contato mais direto ou quer se conectar? Você pode me encontrar nestes canais. Estou sempre online e pronta para responder.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {contactMethods.map((item) => (
          item.isLink === false ? (
            <div key={item.title} className="bg-secondary-light dark:bg-secondary-dark/60 p-6 rounded-xl flex flex-col items-center justify-center text-center">
              <FontAwesomeIcon icon={item.icon} className="h-10 w-10 text-primary" />
              <h3 className="font-sans font-bold text-lg mt-4 text-secondary-dark dark:text-white">{item.title}</h3>
              <p className="text-xs text-secondary dark:text-secondary-light">{item.value}</p>
            </div>
          ) : (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"
              className="bg-secondary-light dark:bg-secondary-dark/60 p-6 rounded-xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:!bg-primary hover:shadow-lg hover:-translate-y-2">
              <FontAwesomeIcon icon={item.icon} className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              <h3 className="font-sans font-bold text-lg mt-4 text-secondary-dark dark:text-white group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-xs text-secondary dark:text-secondary-light group-hover:text-white/80 transition-colors">{item.value}</p>
            </a>
          )
        ))}

      </div>
    </div>
  );
};

export default FormasContato;