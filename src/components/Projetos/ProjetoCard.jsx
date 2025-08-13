import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjetoCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const ProjetoCard = ({
  titulo,
  objetivo,
  descricao,
  tecnologias,
  data,
  imagens,
  curiosidade,
  link,
  tituloLink,
}) => {
  return (
    <div className="card-proj dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-2">{titulo}</h2>

      <p className="text-gray-700 dark:text-gray-300 font-sans">
        <strong>Objetivo:</strong>
        <span> {objetivo}</span>
      </p>
      <p className="text-gray-700 dark:text-gray-300 font-sans">
        <span> {descricao}</span>
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        <strong className="">Desenvolvimento:</strong>
        <span> {data}</span>
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        <strong className="">Curiosidade:</strong>
        <span> {curiosidade}</span>
      </p>

    <ul className="list-disc list-inside space-y-2">
       <li className="list-none">
          <strong className="text-gray-700 dark:text-gray-300">Tecnologias:</strong>
            <div className="flex justify-center flex-wrap gap-2 mt-2">
              {Array.isArray(tecnologias) && tecnologias.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center gap-2 bg-secondary-light dark:bg-secondary-dark rounded-full px-3 py-1"
                >
                  <FontAwesomeIcon icon={tech.icon} className="h-4 w-4 text-primary" />
                  <span className="font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light">
                    {tech.name}
                  </span>
                </div>
             ))}
          </div>
      </li>
    </ul>

      {imagens && imagens.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          slidesPerView={2}
          className="rounded"
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Imagem do projeto ${index + 1}`}
                className="w-fit max-h-96 object-contain shadow"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-stretch bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-4 py-2"
        >
          <span className="no-underline">🔗 </span>{tituloLink}
        </a>
      )}
    </div>
  );
};

export default ProjetoCard;
