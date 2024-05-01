function About() {
    return (
        <section className="flex flex-col md:grid md:grid-cols-2 py-10 px-10 " id="about">
            <div className="gap-x-10">
                <header className="flex justify-start text-center my-4">
                    <h1 className=" bg-gray-300 py- px-3 rounded-md">Sobre Mí</h1>
                </header>
                <div className="flex flex-col py-8">
                    <p className="font-extralight text-pretty text-black ">
                        <strong>
                            Listo para afrontar nuevos desafíos y contribuir a proyectos de desarrollo.
                            Mi interés abarca todos los aspectos del proceso de desarrollo, desde el frontend hasta el backend, incluyendo pruebas y colaboración.
                            Comprometido con el aprendizaje y crecimiento continuo en el mundo del desarrollo web, con énfasis específico en React.
                        </strong>
                    </p>
                    <p className="font-extralight text-pretty text-black py-6">
                        <strong className="text-yellow-400 font-semibold">Me interesa el testing, creo en su importancia para poder tener una buena calidad de código y me gusta compartir mi conocimiento sobre ello.</strong>
                    </p>
                    <p>Me encanta enfocarme en la parte del rendimiento, para ofrecer la mejor experiencia al usuario.</p>
                </div>
                <aside>
                    <a href="../assets/curriculum.avif" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" download>
                        Descargar CV
                    </a>
                </aside>
            </div>
        </section>
    );
}

export default About;
