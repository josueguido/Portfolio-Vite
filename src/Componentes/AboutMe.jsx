function About() {
    return (
        <>
            <section className="grid grid-cols-2 py-10 px-10">
                <div>

                </div>
                <div className="gap-x-10">
                    <div className="flex justify-start text-center my-4">
                        <h1 className=" bg-gray-300 py-3 px-3 rounded-md">Sobre Mi</h1>

                    </div>

                    <p className="font-extralight text-pretty text-black">
                        <strong> Con una base sólida en desarrollo y un ardiente deseo de ampliar mis habilidades,
                            Listo para afrontar nuevos desafíos y contribuir a proyectos de desarrollo.
                            Mi interés abarca todos los aspectos del proceso de desarrollo, desde el frontend hasta el backend, incluyendo pruebas y colaboración.
                            Comprometido con el aprendizaje y crecimiento continuo en el mundo del desarrollo web, con énfasis específico en React.</strong>
                    </p>


                    <p className="font-extralight text-pretty text-black py-6">
                        <strong>Me encanta el testing, creo en su importancia, y me gusta compartir mi conocimiento sobre ello.</strong>
                    </p>


                    <p>
                        Cuento con experiencia desarrollando aplicaciones, tanto del lado del cliente como del servidor
                    </p>


                    <div
                        className=" font-light text-pretty text-xl py-10 my-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <a href="img/resume/resume.jpg" className="text-white py-4 px-4 bg-black" download>
                            Download CV
                        </a>
                    </div>
                </div>

            </section>

        </>
    );
}

export default About;