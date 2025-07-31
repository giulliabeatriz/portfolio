import React from "react";
const inputClasses = "w-full bg-secondary-light dark:bg-secondary-dark/60 border border-secondary/20 dark:border-secondary-light/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300";

const FormContato = () => {
  return (
    <div>
      <form
        action="https://formspree.io/f/mwpqqawe"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2"
          >
            Assunto
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block font-sans text-sm font-medium text-secondary-dark dark:text-secondary-light mb-2"
          >
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className={inputClasses}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full font-heading text-lg bg-accent hover:bg-accent-dark text-secondary-dark font-bold py-3 px-6 rounded-full transition-colors shadow-lg"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContato;
