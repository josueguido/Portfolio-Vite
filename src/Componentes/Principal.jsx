"use client";
import { Boxes } from "../Componentes/ui/background-boxes";
import Contact from "../Componentes/Contact"
import { cn } from "../utils/cn";


export function BackgroundBoxesDemo() {
    return (
        <>
        <section className="h-96 relative w-full overflow-hidden bg-slate-100 flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-start py-10 px-10 md:mt-20 gap-6">
            <Boxes />

            <div className="max-w-xl">
                <div className="flex gap-4 mb-4 justify-center md:justify-start">
                    <img
                        className={cn("rounded-full shadow-lg size-16 relative z-20")}
                        src=""
                    />
                </div>
                <h1 className={cn("text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl md:text-4xl relative z-20")}>
                    Hey, soy Josue Guido
                </h1>
                <p className={cn("mt-6 text-xl text-gray-700 text-balance relative z-20")}>
                    +1 año de experiencia. <strong>Desarrollador Web</strong> de San Ramon, Costa Rica. Especializado en el desarrollo de aplicaciones web tanto del lado del cliente como del servidor.
                </p>
            </div>
            <Contact />
        </section>
        </>
    );
}

export default BackgroundBoxesDemo