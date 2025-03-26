import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 rounded-b-lg">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img
                    src="src/assets/diagram.png"
                    alt="Logo"
                    className="w-12 h-12 object-contain"
                />
                <h1 className="text-lg md:text-xl font-bold">
                    BBPOM Palangka Raya
                </h1>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-500 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-blue-500 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-blue-500 transition duration-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
