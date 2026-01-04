import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container d-flex align-items-center">
                <span className="navbar-brand fs-4 mb-0">
                    Мир кино
                </span>

                <ul className="navbar-nav flex-row gap-4 ms-auto">
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link text-black p-0"
                            onClick={() => changeLocation('home')}
                        >Home</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                           className="nav-link text-black p-0"
                            onClick={() => changeLocation('about')}
                        >About</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link text-black p-0"
                            onClick={() => changeLocation('contacts')}
                        >Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
