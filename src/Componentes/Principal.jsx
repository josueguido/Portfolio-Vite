"use client";
import Contact from "../Componentes/Contact"
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";


export function Principal() {
    return (
        <>
            {/* <section className="h-96 relative w-full overflow-hidden bg-slate-300 flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-start py-10 px-10  gap-6" id="home">
       
            <div className="max-w-xl pt-20">
                <h1 className={cn("text-4xl font-bold tracking-tight text-black-700 sm:text-5xl md:text-4xl relative z-20")}>
                    Hey, soy Josue Guido
                </h1>
                <p className={cn("mt-6 text-xl text-black text-balance relative z-20")}>
                    +1 año de experiencia. <strong>Desarrollador Web</strong> de San Ramon, Costa Rica. Especializado en el desarrollo de aplicaciones web tanto del lado del cliente como del servidor.
                </p>
            </div>
            <Contact />
        </section> */}




            <div className="h-96 relative  overflow-hidden bg-slate-300 flex flex-col items-start justify-center text-start px-10 gap-6">
                <div className="absolute inset-0 w-full h-full bg-slate-400 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1 className={cn("md:text-4xl text-xl text-black relative z-20")}>
                    Hey, soy Josue Guido
                </h1>
                <p className="mt-6 text-xl text-black text-balance relative z-20">
                    +1 año de experiencia. <strong>Desarrollador Web</strong> de San Ramon, Costa Rica. Especializado en el desarrollo de aplicaciones web tanto del lado del cliente como del servidor.
                </p>
                <Contact/>
            </div>


        </>
    );
}

export default Principal