import github from "../assets/Social/github.svg"
import linkedln from "../assets/Social/linkedin.svg"
import mail from "../assets/Social/mail.svg"


function Contact() {
    return (
        <>
            <section className="flex justify-center items-center gap-6 md:gap-4">
                <a href="https://github.com/josueguido" className="inline-flex items-center py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200 gap-2 md:gap-0">
                    <div className="flex flex-row items-center justify-center">
                        <img src={github} className="w-20 h-10 rounded-md hover:bg-gray-200" />
                        <p className="max-w-xs md:max-w-none">GitHub</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/josué-guido-beteta" className="inline-flex items-center  py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200 ">
                    <div className="flex flex-row justify-center items-center text-center">
                        <img src={linkedln} className="w-20 h-10 rounded-md hover:bg-gray-200 " />
                        <p>Linkedln</p>
                    </div>
                </a>
                <a href="mailto:josuguido@gmail.com" className="inline-flex items-center  py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200 ">
                    <div className="flex flex-row justify-center items-center text-center">
                        <img src={mail} className="w-20 h-10" />
                        <p>Contáctame</p>
                    </div>
                </a>

            </section>
        </>
    );
}

export default Contact;



