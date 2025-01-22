import React, { useState } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Bouton Burger */}
            <button
                onClick={toggleMenu}
                className="flex flex-col space-y-1.5 w-8 h-8 justify-center items-center focus:outline-none"
                aria-label="Toggle menu"
            >
                <div
                    className={`h-1 w-8 bg-gray-800 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                ></div>
                <div
                    className={`h-1 w-8 bg-gray-800 transition-opacity ${isOpen ? 'opacity-0' : ''
                        }`}
                ></div>
                <div
                    className={`h-1 w-8 bg-gray-800 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                ></div>
            </button>

            {/* Menu déroulant */}
            <nav
                className={`absolute right-0 mt-4 bg-white shadow-lg rounded-lg w-48 transition-transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                <ul className="flex flex-col p-4 space-y-3">
                    <li>
                        <a
                            href="/association"
                            className="block text-gray-800 hover:text-blue-600"
                        >
                            L'association
                        </a>
                    </li>
                    <li>
                        <a
                            href="/activites"
                            className="block text-gray-800 hover:text-blue-600"
                        >
                            Les activités
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="block text-gray-800 hover:text-blue-600"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;
