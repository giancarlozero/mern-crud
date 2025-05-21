import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link active" aria-current="page">MERN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Criar posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all" className="nav-link active" aria-current="page">Todos os posts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;