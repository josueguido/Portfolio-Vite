"use client";
import Contact from "../Componentes/Contact"
import TypingAnimation from "./ui/typing-animation";
import GridPattern from "./ui/animated-grid-pattern";

export function Principal() {
    return (
        <>
            <section className="relative flex  items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl  flex-col  text-center md:items-start md:justify-start md:text-start px-10 gap-6" id="home">
                <div className="flex flex-col gap-4">
                    <TypingAnimation
                        className="text-start text-4xl font-bold "
                        text="Hey, soy Josue Guido"
                    />
                    <span className="mt-6 text-xl text-balance relative">
                        +1 año de experiencia. <strong>Desarrollador Web</strong> de San Ramon, Costa Rica. Especializado en el desarrollo de aplicaciones web tanto del lado del cliente como del servidor.
                    </span>
                </div>
                <Contact />
                <GridPattern />
            </section>

        </>
    );
}

export default Principal