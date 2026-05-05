import { useState } from "react"
import { IconMenu2, IconX, IconDownload } from "@tabler/icons-react"
import CV from "../assets/CV_Josue_Guido.docx.pdf"

const NAV_LINKS = [
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "proyectos" },
    { label: "Certifications", id: "certifications" },
];

function Header() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        setOpen(false);
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            {/* Desktop pill */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg shadow-black/5">
                {NAV_LINKS.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-all"
                    >
                        {link.label}
                    </button>
                ))}
                <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1" />
                <a
                    href={CV}
                    download="CV_Josue_Guido.pdf"
                    className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-all"
                >
                    <IconDownload size={14} />
                    Resume
                </a>
                <a
                    href="mailto:josuedguido866@gmail.com"
                    className="px-4 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                    Contact
                </a>
            </nav>

            {/* Mobile pill */}
            <div className="md:hidden w-full">
                <div className="flex justify-end">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg text-gray-700 dark:text-gray-300"
                        aria-label="Toggle menu"
                    >
                        {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
                    </button>
                </div>

                {open && (
                    <div className="mt-2 mx-auto w-fit flex flex-col gap-1 px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-all text-left"
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href={CV}
                            download="CV_Josue_Guido.pdf"
                            className="flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                        >
                            <IconDownload size={14} />
                            Resume
                        </a>
                        <a
                            href="mailto:josuedguido866@gmail.com"
                            className="mt-1 px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors text-center"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
