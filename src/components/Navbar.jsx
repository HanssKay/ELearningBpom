import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect} from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false);
    useEffect(() => {
        function handleClickOutside(event) {
          if (!event.target.closest(".bi-x-lg")) {
            setIsOpen(false);
          }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
    
      // Tutup menu ketika pindah halaman
      useEffect(() => {
        setIsOpen(false);
      }, [location.pathname]);
    return (
        
        <header className="w-full bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 rounded-b-lg">
            {/* Logo */}
            <button className="absolute z-20 text-white-800 top-3.5 right-4 text-3xl font-bold md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>
            <div className="flex items-center gap-3">
                <img
                    src="src/assets/diagram.png"
                    alt="Logo"
                    className="md:h-12 h-9  object-contain"
                />
                <h1 className="text-[13px] md:text-xl md:ms-0 ms-[-3px] font-bold">
                    BBPOM Palangka Raya
                </h1>
            </div>
            <nav>
                <ul className={`absolute md:gap-4 md:py-0 py-3 items-center rounded-md md:top-0 md:right-[70px] right-[50px] md:w-full w-[100px] text-center top-[70px] md:relative md:flex md:bg-transparent bg-blue-900 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                    <li>
                        <Link to="/" className="text-white font-bold hover:text-blue-500 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white font-bold hover:text-blue-500 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white font-bold hover:text-blue-500 transition duration-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="bg-green-500 font-bold md:flex hidden text-black px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                            Login
                        </Link>
                    </li>
                </ul>
                <ul className="flex me-8">
                    <li className='md:hidden font-bold rounded-lg p-2 text-black bg-green-400 hover:bg-green-600 text-xs'>
                        <Link to="/login">Login</Link>
                    </li>
                    {/* <li className='md:hidden font-bold  top-4 hover:bg-green-500 text-xs'>
                        <Link to="/sign" >Sign Up</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
