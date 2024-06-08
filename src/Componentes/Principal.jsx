"use client";
import Contact from "../Componentes/Contact"
import { OrbitingCirclesDemo } from "./CircleComponent";
import TypingAnimation from "./ui/typing-animation";
import WordRotate from "./ui/word-rotate";



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
                            text="Hey, Soy Josue Guido"
                        />
                        <p className="mt-6 text-xl text-balance relative">
                            I`m a passionate Full-Stack Dev with an interest in
                        </p>
                        <WordRotate
                            className="text-4xl font-bold text-black dark:text-white"
                            words={["Frontend Frameworks", "React", "Web Development", "Web Performance Optimization"]}
                        />
                        <div className="flex justify-center items-center md:justify-start md:items-start ">
                            <Contact />
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