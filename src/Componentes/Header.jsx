

function Header() {
    return (
        <header className="flex justify-between items-center py-5 px-20 bg-gray-100 border-b border-gray-500">
            <div>
                <img src="shell.png" className="w-10" />
            </div>
            <nav>
                <ul className="flex flex-row justify-center items-center text-center gap-3">
                    <li className="hover:bg-gray-200 py-2 px-4 rounded-md">Home</li>
                    <li className="hover:bg-gray-200 py-2 px-4 rounded-md">About</li>
                    <li className="hover:bg-gray-200 py-2 px-4 rounded-md">Portfolio</li>
                    <li className="hover:bg-gray-200 py-2 px-4 rounded-md" >Contact</li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;