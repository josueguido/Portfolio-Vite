import github from "../assets/Social/github.svg"
import linkedln from "../assets/Social/linkedin.svg"
import mail from "../assets/Social/mail.svg"



function Contact() {
    return (
        <>
            <section className="flex justify-center items-center gap-2">
                <a href="https://github.com/josueguido" className="inline-flex items-center  py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200">
                    <img src={github} className="w-20 h-10  rounded-md hover:bg-gray-200 " />
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/josué-guido-beteta" className="inline-flex items-center  py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200 ">
                    <img src={linkedln} className="w-20 h-10 rounded-md hover:bg-gray-200 " />
                    Linkedln
                </a>
                <a href="mailto:josuguido@gmail.com" className="inline-flex items-center  py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200 ">
                    <img src={mail} className="w-20 h-10" />
                    Contáctame
                </a>
            </section>
        </>
    );
}

export default Contact;