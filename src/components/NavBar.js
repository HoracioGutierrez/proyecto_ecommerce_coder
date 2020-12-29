import React from 'react'
import M from "materialize-css"
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems,{});
    });

    return (
        <>
        <nav className="yellow accent-2">
            <div className="nav-wrapper">
            <NavLink to="/" exact className="brand-logo black-text">CoderLibre</NavLink>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/category/1" className="black-text">computacion</NavLink>
                </li>
                <li>
                    <NavLink to="/category/2" className="black-text">dvds</NavLink>
                </li>
            </ul>
            <CartWidget/>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li>
                <NavLink to="/category/1" className="black-text">categoria 1</NavLink>
            </li>
            <li>
                <NavLink to="/category/2" className="black-text">categoria 2</NavLink>
            </li>
        </ul>
        </>
    )
}

export default NavBar
