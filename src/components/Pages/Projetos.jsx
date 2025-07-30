import React from "react";
import ProjetoCard from "../Projetos/ProjetoCard";
import projetos from "../../data/projetos";

const Projetos = () => {
  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center dark:text-primary-light text-primary-dark mb-6">Meus Projetos</h1>
      {projetos.map((proj, index) => (
        <ProjetoCard key={index} {...proj} />
      ))}
    </div>
  );
};

export default Projetos;
