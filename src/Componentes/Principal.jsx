"use client";
import Contact from "../Componentes/Contact"
import { OrbitingCirclesDemo } from "./CircleComponent";
import TypingAnimation from "./ui/typing-animation";
import WordRotate from "./ui/word-rotate";
import { IconDownload } from "@tabler/icons-react";
import CV from "../assets/CV_Josue_Guido.docx.pdf";

export function Principal() {
    return (
        <>
            <main
                className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden border bg-background p-20 md:shadow-xl text-center md:text-left md:gap-6 px-10"
                id="home"
            >
                <section className="flex flex-col md:flex-row md:justify-between py-14 gap-4 md:w-full">
                    <div className="md:w-1/2 py-20">
                        <TypingAnimation
                            className="text-center md:text-start text-6xl font-sans"
                            text="Hey, I`m Josue Guido"
                        />
                        <p className="mt-6 text-xl text-balance relative">
                            I`m a passionate DevOps with an interest in
                        </p>
                        <WordRotate
                            className="text-4xl font-bold text-black dark:text-white"
                            words={["Cloud Infrastructure", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration"]}
                        />
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center items-center md:justify-start md:items-start">
                                <Contact />
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <a
                                    href={CV}
                                    download="CV_Josue_Guido.pdf"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
                                >
                                    <IconDownload size={16} />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:justify-end md:w-1/2">
                        <OrbitingCirclesDemo />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Principal