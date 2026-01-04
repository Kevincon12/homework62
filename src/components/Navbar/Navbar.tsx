import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container d-flex align-items-center">
                <span className="navbar-brand fs-4 mb-0">
                    Мир кино
                </span>

                <ul className="navbar-nav flex-row gap-4 ms-auto">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link text-black p-0">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/about' className="nav-link text-black p-0">About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/contacts' className="nav-link text-black p-0">Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
