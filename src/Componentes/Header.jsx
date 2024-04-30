


function Header() {


    return (
        <header className="md:fixed md:top-0 md:left-0 md:right-0 md:z-10 flex justify-between items-center px-5 py-5 md:px-20 bg-gray-200 border-b border-gray-500 ">
            <div>
                <img src="shell.png" className="w-10" alt="Logo" />
            </div>
            <nav>
                <ul className="flex flex-row justify-center items-center text-center gap-3">
                    <li><a href="#home" className="hover:bg-gray-400 py-2 px-4 rounded-md">Home</a></li>
                    <li><a href="#about" className="hover:bg-gray-400 py-2 px-4 rounded-md">About</a></li>
                    <li><a href="#proyectos" className="hover:bg-gray-400 py-2 px-4 rounded-md">Portfolio</a></li>
                    <li><a href="#Skills" className="hover:bg-gray-400 py-2 px-4 rounded-md">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
