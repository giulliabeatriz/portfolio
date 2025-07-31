import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faFigma, faGitAlt, faHtml5, faCss3Alt, faBootstrap, faNotion, faW3c } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const tecnologias = [
    { name: 'React', icon: faReact },
    { name: 'Tailwind CSS', icon: faCss3Alt },
    { name: 'UX / UI', icon: null },
    { name: 'JavaScript', icon: faJs },
    { name: 'Figma', icon: faFigma },
    { name: 'W3C', icon: faW3c },
    { name: 'Design Systems', icon: null },
    { name: 'Git', icon: faGitAlt },
    { name: 'Digital Accessibility', icon: null },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Usabilidade', icon: null },
    { name: 'Notion', icon: faNotion },
    // { name: 'jQuery', icon: faJquery },
    
];

const TecnologiasSwiper = () => {
    return (
        <section className="text-center mt-16">
            <h2 className="font-heading text-4xl lg:text-5xl text-primary font-bold">Habilidades e Ferramentas</h2>
          <p className="font-sans text-lg text-secondary-dark dark:text-secondary-light mt-4 mx-auto">
                Estas são algumas das tecnologias que utilizo para transformar ideias em realidade.
            </p>

            <div className="py-12">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    freeMode={true}
                    loop={true}
                    grabCursor={true}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={4000}
                    className="max-w-7xl mx-auto"
                >
                    {tecnologias.map((tech) => (
                        <SwiperSlide key={tech.name} style={{ width: 'auto' }}>
                            <div className="flex flex-col items-center justify-center gap-3 text-center w-32 h-28">

                                {tech.icon ? (
                                    <FontAwesomeIcon
                                        icon={tech.icon}
                                        className="h-12 w-12 text-secondary-dark dark:text-secondary-light"
                                    />
                                ) : (
                                    // se o icon for null renderiza o nome
                                    <div className="h-12 w-full flex items-center justify-center text-center font-sans  text-lg font-bold text-primary-dark dark:text-primary-light">
                                        {tech.name}
                                    </div>
                                )}

                                {tech.icon && (
                                    <p className="font-sans text-sm text-secondary-dark dark:text-secondary-light">
                                        {tech.name}
                                    </p>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TecnologiasSwiper;