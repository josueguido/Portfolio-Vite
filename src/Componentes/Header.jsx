import { IconCloud } from "@tabler/icons-react"

function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-center px-6 md:px-10 py-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <IconCloud size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Cloud</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <button 
                        onClick={() => scrollToSection('skills')} 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        Skills
                    </button>
                    <button 
                        onClick={() => scrollToSection('experience')} 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        Experience
                    </button>
                    <button 
                        onClick={() => scrollToSection('proyectos')} 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        Projects
                    </button>
                    <button 
                        onClick={() => scrollToSection('certifications')} 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        Certifications
                    </button>
                </nav>

                <a 
                    href="mailto:josuedguido866@gmail.com" 
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}

export default Header;
