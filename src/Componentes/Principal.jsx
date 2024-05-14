import Contact from "../Componentes/Contact"
import { Vortex } from "../assets/ui/vortex";
export function Principal() {
    return (
        <>
            <section className="h-96 relative w-full overflow-hidden bg-slate-300 flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-start py-10 px-10  gap-6" id="home">
            <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
                    <div className="max-w-xl pt-20">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl relative z-20">
                            Hey, soy Josue Guido
                        </h1>
                        <p className="mt-6 text-xl text-white text-balance relative z-20">
                            +1 año de experiencia. <strong>Desarrollador Web</strong> de San Ramon, Costa Rica. Especializado en el desarrollo de aplicaciones web tanto del lado del cliente como del servidor.
                        </p>
                    </div>
                    <Contact />
                </Vortex>
            </section>

        </>
    );
}

export default Principal