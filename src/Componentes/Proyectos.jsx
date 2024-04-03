import Card from "./Cards";
import Countries from "../assets/Proyectos/Countries.png"
import Gallery from "../assets/Proyectos/Gallery.png"
import Loopstudios from "../assets/Proyectos/Loopstudios.png"


function Proyectos() {
    return (
        <>
            <h1 className="flex text-black font-light text-3xl py-10 px-10">Portfolio</h1>
            <section className="flex flex-col gap-10 py-10 px-10">

                <Card
                    image={Countries}
                    title="REST API Countries"
                    description="Descripción del componente"
                />

               
                <Card
                    image={Countries}
                    title="REST API Countries"
                    description="El Explorador de Países es una aplicación web que te permite explorar información detallada sobre países de todo el mundo. Conectado a una API de países REST, esta aplicación proporciona datos precisos y actualizados sobre diversos aspectos de cada país, incluyendo su nombre, capital, población, idioma, moneda, región y bandera."
                    codeLink="https://super-gnome-102ab1.netlify.app/"
                    previewLink="https://github.com/josueguido/countries-api"
                />

                <Card
                    image={Gallery}
                    title="Galeria Parques Nacionales"
                    description="La Galería de Parques Nacionales es una plataforma web dedicada a explorar la belleza natural de los parques nacionales de Estados Unidos y Canadá. A través de una interfaz visualmente atractiva y fácil de usar, esta galería te ofrece una experiencia inmersiva para descubrir y aprender sobre los parques nacionales más emblemáticos de América del Norte."
                    codeLink="https://github.com/josueguido/Galeria-National-Parks/tree/master"
                    previewLink="https://ephemeral-tanuki-435594.netlify.app/"
                />

                <Card
                    image={Loopstudios}
                    title="LoopStudios"
                    description="Página relaciona con la tecnología, una landing sencilla creada con HTML, CSS y JavaScript "
                    codeLink="https://github.com/josueguido/Loopstudios"
                    previewLink="https://courageous-gumdrop-d5f534.netlify.app/"
                />
            </section>

        </>
    );
}

export default Proyectos;