import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjetoCard.css";

const ProjetoCard = ({
  titulo,
  objetivo,
  descricao,
  tecnologias,
  data,
  imagens,
  link,
}) => {
  return (
    <div className="card-proj dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-yellow-800 mb-2">{titulo}</h2>

      <p className="text-gray-700 dark:text-gray-300 font-sans">
        <strong>Objetivo:</strong>
        <span className="font-corpo"> {objetivo}</span>
      </p>
      <p className="text-gray-700 dark:text-gray-300 font-sans">
        <span className="font-corpo"> {descricao}</span>
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        <strong className="">Desenvolvimento:</strong>
        <span className="font-corpo"> {data}</span>
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        <strong className="">Tecnologias/Ferramentas:</strong>
        <span className="font-corpo"> {tecnologias}</span>
      </p>

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
          className="flex justify-center items-stretch bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-4 py-2"
        >
          <span className="no-underline">🔗 </span>Acessar o aplicativo
        </a>
      )}
    </div>
  );
};

export default ProjetoCard;
