import Countries from "../assets/Proyectos/Countries.avif"
import Gallery from "../assets/Proyectos/Gallery.avif"
import TaskBoard from "../assets/Proyectos/Task-Board.avif"
import WeatherApp from "../assets/Proyectos/WeatherApp.avif"
import Tailwind from "../../public/tailwind.svg"
import ReactLogo from "../../public/react.svg"
import Vite from "../../public/vite.svg"
import Vitest from "../../public/Vitest.svg"
import githubactions from "../../public/githubactions.svg"
import Testing from "../../public/Testing-library.svg"
import Card from "./Cards";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"

function Proyectos() {

    const words = [
        {
            text: "Portfolio.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <>
            <TypewriterEffectSmooth words={words} className="flex text-black font-light text-3xl px-4 sm:px-10 mt-10 sm:mt-20" />

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 py-10 px-4 sm:px-10  justify-center items-center text-start min-w-0 mx-10" id="proyectos">

                <Card
                    image={WeatherApp}
                    title="Weather App"
                    description="Nuestra Weather App te mantiene un paso adelante de las condiciones climáticas cambiantes. Con una interfaz intuitiva y funciones poderosas, te ofrece información detallada sobre el clima en tiempo real, en cualquier lugar y momento, pronósticos confiables: Respaldados por la confiable API de WeatherAPI.com."
                    codeLink="https://github.com/josueguido/Weather-App"
                    previewLink="https://weatherapp-npw.netlify.app/"
                    Tecnologias={[Vite, ReactLogo, Tailwind]}
                />

                <Card
                    image={TaskBoard}
                    title="Task-Board"
                    description="El Task-board es una aplicación web versátil diseñada para simplificar la gestión de tareas y mejorar la productividad. Equipado con funciones clave como filtrado por prioridad, modo oscuro, creación y eliminación de notas, el Task-board es una herramienta indispensable para mantenerse organizado y enfocado en tus objetivos."
                    codeLink="https://github.com/josueguido/Task-Board"
                    previewLink="https://task-board-web.netlify.app/"
                    Tecnologias={[Vite, ReactLogo, Tailwind, Vitest, Testing]}
                />

                <Card
                    image={Countries}
                    title="Countries App"
                    description="El Explorador de Países es una aplicación web que te permite explorar información detallada sobre países de todo el mundo. Conectado a un JSON de países, esta aplicación proporciona datos precisos y actualizados sobre diversos aspectos de cada país, incluyendo su nombre, capital, población, idioma, moneda, región y bandera."
                    codeLink="https://github.com/josueguido/countries-api"
                    previewLink="https://countrys-apps.netlify.app/"
                    Tecnologias={[Vite, ReactLogo, Tailwind, Testing, githubactions]}
                />

                <Card
                    image={Gallery}
                    title="Galería Parques Nacionales"
                    description="La Galería de Parques Nacionales es un sitio web dedicada a explorar la belleza natural de los parques nacionales de Estados Unidos y Canadá. A través de una interfaz visualmente atractiva y fácil de usar, te ofrece una experiencia inmersiva para descubrir sobre los parques nacionales más emblemáticos de América del Norte."
                    codeLink="https://github.com/josueguido/Galeria-National-Parks/tree/master"
                    previewLink="https://national-parks-gallery.netlify.app/"
                    Tecnologias={[ReactLogo, Vite, Tailwind]}
                />
            </section>
        </>
    );
}

export default Proyectos;
