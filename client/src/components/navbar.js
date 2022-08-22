import { NavLink } from "react-router-dom";
import { useState } from "react"

function Navbar() {
    const [showLinks, setShowLinks] =useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
   
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>

            <ul className="navbar__links show-nav">
                <li className="navbar__item"><NavLink className="navbar__link" to="/">Bienvenue</NavLink></li>
                <ul className="item__subLinks">
                    <li><NavLink to="/">1</NavLink></li>
                    <li><NavLink to="/">2</NavLink></li>
                    <li><NavLink to="/">3</NavLink></li>
                </ul>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">2</NavLink></li>
                <ul className="item__subLinks">
                    <li><NavLink to="/">1</NavLink></li>
                    <li><NavLink to="/">2</NavLink></li>
                    <li><NavLink to="/">3</NavLink></li>
                    <li><NavLink to="/">4</NavLink></li>
                    <li><NavLink to="/">5</NavLink></li>
                    <li><NavLink to="/">6</NavLink></li>
                </ul>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">3</NavLink></li>
                <ul className="item__subLinks">
                    <li><NavLink to="/">1</NavLink></li>
                    <li><NavLink to="/">2</NavLink></li>
                </ul>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">4</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">5</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">6</NavLink></li>
                <ul className="item__subLinks">
                    <li><NavLink to="/">1</NavLink></li>
                    <li><NavLink to="/">2</NavLink></li>
                    <li><NavLink to="/">3</NavLink></li>
                    <li><NavLink to="/">4</NavLink></li>
                </ul>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">7</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">8</NavLink></li>
            </ul>
            <div className="box-burger">
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
            </div>
        </nav>
    );
}

export default Navbar;