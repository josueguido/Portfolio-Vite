import Contact from "./Contact";

function Principal() {
    return (
        <section className="flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-start py-10 px-10 mt-20 gap-6">
            <div className="max-w-xl">
                <div className="flex gap-4 mb-4 justify-center md:justify-start">
                    <img
                        className="rounded-full shadow-lg size-16"
                        src=""
                    />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl ">
                    Hey, soy Josue Guido
                </h1>
                <p className="mt-6 text-xl text-gray-800 text-balance ">
                    +1 año de experiencia. <strong>Desarrollador Web</strong> de San Ramon, Costa Rica. Especializado en el desarrollo de aplicaciones web tanto del lado del cliente como del servidor.
                </p>
            </div>
            <Contact />
        </section>
    );
}

export default Principal;