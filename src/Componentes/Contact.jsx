import github from "../assets/Social/github.svg"
import LinkedIn from "../assets/Social/linkedin.svg"
import mail from "../assets/Social/mail.svg"
import SocialLink from "./SocialLink";

function Contact() {
    return (
        <>
            <section className="flex justify-center items-center text-start pt-10 gap-6 md:gap-4 ">
                <SocialLink url="https://github.com/josueguido" icon={github} text="GitHub" />
                <SocialLink url="https://www.linkedin.com/in/josué-guido-beteta" icon={LinkedIn} text="LinkedIn" />
                <SocialLink url="mailto:josuguido@gmail.com" icon={mail} text="Contácteme" />
            </section>
        </>
    );
}

export default Contact;



