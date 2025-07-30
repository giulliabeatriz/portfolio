import React from "react";
import ProjetoCard from "../Projetos/ProjetoCard";
import projetos from "../../data/projetos";

const Projetos = () => {
  return (
     <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="font-heading text-5xl mb-12 dark:text-primary-light text-primary">Meus Projetos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-6 w-7xl mx-auto">
        {projetos.map((proj, index) => (
        <ProjetoCard key={index} {...proj} />
      ))} </div>
    </div>
    </section>
  );
};

export default Projetos;
