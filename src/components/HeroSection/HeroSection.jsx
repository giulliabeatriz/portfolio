import React from 'react';
import { Link } from 'react-router-dom'; 
import profileImage from '../../assets/navbar/profile.jpg'; 

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);
    

const HeroSection = () => {
  return (
     <section className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.28))] px-4">

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Foto de Giullia Beatriz"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-primary/20"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <p className="font-sans text-xl md:text-2xl text-secondary-dark dark:text-secondary-light">
              Olá, eu sou a
            </p>

            <h1 className="font-heading text-5xl md:text-7xl text-primary font-bold my-2">
              GIULLIA BEATRIZ
            </h1>

            <p className="font-sans text-lg md:text-xl text-secondary dark:text-secondary-light mb-8">
              UX/UI Designer / Front-End Dev
            </p>

            <div className="flex items-center gap-4">

              <a
                href="public\documents\CURRICULO Ux - GIULLIA BEATRIZ RAMOS E SILVA .pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base font-heading transition-colors shadow-lg"
              >
                <DownloadIcon />
                Currículo
              </a>

              <Link
                to="/contato"
                className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base font-heading transition-colors shadow-lg"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;