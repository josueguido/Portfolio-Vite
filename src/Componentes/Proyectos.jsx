import Countries from "../assets/Proyectos/Countries.avif"
import Gallery from "../assets/Proyectos/Gallery.avif"
import Loopstudios from "../assets/Proyectos/Loopstudios.avif"
import Tailwind from "../../public/tailwind.svg"
import React from "../../public/react.svg"
import Vite from "../../public/vite.svg"
import HTML from "../../public/HTML.svg"
import CSS from "../../public/CSS.svg"
import Vitest from "../../public/Vitest.svg"
import githubactions from "../../public/githubactions.svg"
import Testing from "../../public/Testing-library.svg"
import JavaScript from "../../public/JavaScript.svg"
import Card from "./Cards";
function Proyectos() {

    
    return (
        <>
            <h1 className="flex  text-black font-light text-3xl px-20 mt-20" id="proyectos">Portfolio</h1>
            <section className="flex flex-col gap-10 py-10 px-10 justify-center items-center text-start md:justify-center md:items-center">

                    <Card
                        image={Countries}
                        title="REST API Countries"
                        description=" El Explorador de Países es una aplicación web que te permite explorar información detallada sobre países de todo el mundo. Conectado a una API de países REST, esta aplicación proporciona datos precisos y actualizados sobre diversos aspectos de cada país, incluyendo su nombre, capital, población, idioma, moneda, región y bandera."
                        codeLink="https://github.com/josueguido/countries-api"
                        previewLink="https://super-gnome-102ab1.netlify.app/"
                        Tecnologias={[Vite, React, Tailwind, Vitest, Testing, githubactions]}
                    />

                    <Card
                        image={Gallery}
                        title="Galería Parques Nacionales"
                        description="La Galería de Parques Nacionales es una plataforma web dedicada a explorar la belleza natural de los parques nacionales de Estados Unidos y Canadá. A través de una interfaz visualmente atractiva y fácil de usar,te ofrece una experiencia inmersiva para descubrir y aprender sobre los parques nacionales más emblemáticos de América del Norte."
                        codeLink="https://github.com/josueguido/Galeria-National-Parks/tree/master"
                        previewLink="https://ephemeral-tanuki-435594.netlify.app/"
                        Tecnologias={[React, Vite, Tailwind]}
                    />

                    <Card
                        image={Loopstudios}
                        title="LoopStudios"
                        description="Página relaciona con la tecnología, una landing sencilla creada con HTML, CSS y JavaScript "
                        codeLink="https://github.com/josueguido/Loopstudios"
                        previewLink="https://courageous-gumdrop-d5f534.netlify.app/"
                        Tecnologias={[HTML, CSS, JavaScript]}

                    />
            </section>

        </>
    );
}

export default Proyectos;

