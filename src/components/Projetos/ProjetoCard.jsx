import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjetoCard.css'

const ProjetoCard = ({
  titulo,
  objetivo,
  descricao,
  tecnologias,
  data,
  curso,
  imagens,
  link
}) => {
  return (
    <div className="card-proj dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-yellow-800 mb-2">{titulo}</h2>
      <p className="text-gray-700 dark:text-gray-300"><strong>Objetivo:</strong> {objetivo}</p>
      <p className="text-gray-700 dark:text-gray-300">{descricao}</p>

      <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
        <li><strong>Desenvolvimento:</strong> {data}</li>
        <li><strong>Curso:</strong> {curso}</li>
        <li><strong>Tecnologias/Ferramentas:</strong> {tecnologias}</li>
      </ul>

       {imagens && imagens.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={2}
          className="rounded-xl"
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Imagem do projeto ${index + 1}`}
                className="w-full max-h-96 object-contain rounded-xl shadow"
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
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-6 py-2 mt-4"
        >
          🔗 Acessar o aplicativo
        </a>
      )}
    </div>
  );
};

export default ProjetoCard;
