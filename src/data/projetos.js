import { faReact, faJs, faFigma, faGitAlt, faHtml5, faCss3Alt, faCss, faBootstrap, faAccessibleIcon, faW3c, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCloudArrowUp, faCube, faCubes, faRoute } from '@fortawesome/free-solid-svg-icons';

const projetos = [
  { // PROJETO CALCULADORA DO DIFAL 
    titulo: "🥇 Calculadora do DIFAL",
    objetivo: "Desenvolver uma ferramenta que auxilie os contribuintes na apuração do Diferencial de Alíquotas sobre o ICMS.",
    descricao:
      "A 'Calculadora do DIFAL' é uma ferramenta on-line gratuita que auxilia cidadãos contribuintes e não contribuintes a garantirem a conformidade fiscal. A ferramenta conta com campos de entrada de dados e calcula condicionalmente, retornando o valor da Base de Cálculo, do Diferencial de Alíquotas e (caso haja) do FECEP. ",
    tecnologias:[
    { name: 'Liferay', icon: faCube },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss },
    { name: 'Javascript', icon: faJs }
  ],
    data: "Junho de 2024 - desenvolvido enquanto estagiária da SEFAZ-MT",
    imagens: [     
      "/images/calculadoraDifal/calc1.jpeg",
      "/images/calculadoraDifal/calc3.png",
      "/images/calculadoraDifal/calc4.png",
      "/images/calculadoraDifal/calc5.jpeg",
      "/images/calculadoraDifal/calc5.png",
      "/images/calculadoraDifal/calc6.png", 
    ],
    curiosidade: "A Calculadora do DIFAL foi premiada em 1º lugar no 2º Prêmio de Eficiência e Inovação do Governo de Mato Grosso.",
    link: "https://www.portaldoconhecimento.mt.gov.br/sobre-diferencial-de-aliquotas",
    tituloLink: "Acesse as calculadoras"
  },

  // PROJETO VIVENDO DE FREELA 
  {
    titulo: "🎯 Vivendo de Freela",
    objetivo: "Desenvolver um app para freelancers, focado em usabilidade e acessibilidade.",
    descricao:
      "O 'Vivendo de Freela' foi criado na plataforma Adalo com o intuito de conectar freelancers e clientes. Conta com funcionalidades como login, feed de projetos, favoritos, chat, criação de posts e edição de perfil. O design segue boas práticas de UX/UI, com aplicação de conceitos estudados na disciplina de Sistemas Multimídia.",
    curiosidade: 'O aplicativo, por mais que tenha sido desenvolvido com fins educativos, é 100% funcional.',
    tecnologias: [{ name: 'Adalo (no-code)'}, 
      { name: 'UX/UI Design'} ],
    data: "Agosto de 2024 - desenvolvido para a matéria de Sistemas Multimídias na graduação de Sistemas de Informação -- UFMT",
    imagens: [
      "/images/VivendoDeFreela/freela1.png",
      "/images/VivendoDeFreela/freela2.png",
      "/images/VivendoDeFreela/freela3.png",
      "/images/VivendoDeFreela/freela4.png",
      "/images/VivendoDeFreela/freela5.png",
      "/images/VivendoDeFreela/freela6.png",
      "/images/VivendoDeFreela/freela7.png",
      "/images/VivendoDeFreela/freela8.png" 
    ],
    link: "https://giullia-silvas-team.adalo.com/social-media-app",
    tituloLink: "Acesse o aplicativo"
  },

  //PROJETO PORTAL DO CONHECIMENTO
  {
    titulo: "🧑‍💻 Refinamento da Experiência do Usuário no Portal do Conhecimento: Aplicação de Metodologias Ux/UI com Foco na Acessibilidade",
    objetivo: "O objetivo do projeto de estágio foi refinar a experiência do usuário no 'Portal do Conhecimento'. A meta principal foi modernizar o design do portal para que fosse focado na usabilidade, acessível e centrado no usuário.",
    descricao:
      "Este projeto consistiu no aprimoramento da experiência do usuário no 'Portal do Conhecimento' da SEFAZ-MT. Foram aplicadas metodologias de UX/UI Design com foco em usabilidade e acessibilidade, trazendo conceitos como Heurísticas de Nielsen, Design Thinking, Princípios de Gestalt, entre outros. Foram criados novos layouts, widgets e portlets com um design moderno, funcional, escalável e acessível.",
    tecnologias: [
      { name: 'Liferay', icon: faCube },
      { name: 'HTML', icon: faHtml5 },
      { name: 'CSS', icon: faCss },
      { name: 'Javascript ', icon: faJs },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'jQuery', icon: faCube },
      { name: 'Figma', icon: faFigma },
      { name: 'Google Lighthouse', icon: faCubes },
      { name: 'Git & GitHUb', icon: faGitAlt },
      { name: 'Design System'  },
      { name: 'UsableNet AQA', icon: faAccessibleIcon },
      { name: 'W3C', icon: faW3c },
    ],
    curiosidade: "Este projeto é o meu Trabalho de Conclusão de Curso, sendo meu projeto mais longo e mais enriquecedor - em conhecimento, claro",    
    data: "Dezembro de 2023 à maio de 2025",
    imagens: [
      "/images/portalConhecimento/pc1.png",
      "/images/portalConhecimento/pc2.png",
      "/images/portalConhecimento/pc4.png",
      "/images/portalConhecimento/pc3.png",      
      "/images/portalConhecimento/pc5.png",      
    ],
    link: "https://www.portaldoconhecimento.mt.gov.br/inicio",
    tituloLink: "Acesse o Portal do Conhecimento"
  },
  
  // PORTFOLIO
  {
    titulo: 'Portfólio Pessoal | UX/UI & Front-End',
    objetivo: 'Desenvolver uma plataforma pessoal para centralizar e apresentar meus projetos, habilidades e jornada profissional de forma coesa e atraente.',
    descricao: 'Este é o projeto que você está navegando no momento! Ele foi concebido como um estudo de caso completo, desde a prototipagem no Figma até a implementação com as tecnologias mais modernas do ecossistema React. O foco foi criar um Design System customizado e escalável com Tailwind CSS, garantindo uma identidade visual única e uma experiência de usuário totalmente responsiva, acessível e performática, incluindo funcionalidades como tema dark/light, um carrossel (swiper) interativo e animações suaves.',
    tecnologias: [
      { name: 'React', icon: faReact },
      { name: 'Vite', icon: faBolt },
      { name: 'Tailwind CSS', icon: faCss3Alt },
      { name: 'React Router', icon: faRoute },
      { name: 'Font Awesome', icon: faFontAwesome },
      { name: 'Figma', icon: faFigma },
      { name: 'Git', icon: faGitAlt },
      { name: 'Vercel', icon: faCloudArrowUp },
    ],
    data: 'Julho de 2025',
    curiosidade: 'O portfólio já existia, porém apenas no Figma. Em uma noite, sonhei que desenvolvia-o em React. No outro dia, comecei a codar. Em menos de uma semana, havia terminado as partes principais ',
        imagens: [
      "/images/portfolio/port1.png",
      "/images/portfolio/port2.png",
      "/images/portfolio/port3.png",
      "/images/portfolio/port4.png",
      "/images/portfolio/port5.png",       
      "/images/portfolio/port7.png",
      "/images/portfolio/port8.png",
      "/images/portfolio/port6.png",
    ],
    link: "https://portfolio-iota-ivory-73.vercel.app/", 
    tituloLink: 'Acesse o portfólio'
  },
];

export default projetos;
