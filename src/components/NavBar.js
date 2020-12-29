import React from 'react'
import M from "materialize-css"

const NavBar = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems,{});
    });

    return (
        <>
        <nav className="yellow accent-2">
            <div className="nav-wrapper">
            <a href="#!" className="brand-logo black-text">CoderLibre</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <a href="#" className="black-text">categoria 1</a>
                </li>
                <li>
                    <a href="#" className="black-text">categoria 2</a>
                </li>
            </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li>
                <a href="#" className="black-text">categoria 1</a>
            </li>
            <li>
                <a href="#" className="black-text">categoria 2</a>
            </li>
        </ul>
        </>
    )
}

export default NavBar
