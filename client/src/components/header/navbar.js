import { NavLink } from "react-router-dom";
import { useState } from "react"

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const [showSubLinks, setShowSubLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    const handleShowSubLinks = () => {
        setShowSubLinks(!showSubLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>

            <ul className="navbar__links show-nav">
                <li className={`navbar__item ${showSubLinks ? "show-subNav" : "hide-subNav"}`}><NavLink className="navbar__link" to="/">Bienvenue</NavLink>
                <ul className="item__subLinks" >
                    <li className="subItem"><NavLink className="subItem__link" to="/">Demande livret profil d'écoute</NavLink></li>
                    <li className="subItem"><NavLink className="subItem__link" to="/">Livrets profils d'écoute</NavLink></li>
                    <li className="subItem"><NavLink className="subItem__link" to="/">Lieux de pratique et suivi</NavLink></li>
                </ul> 
                        <button className="item__button" onClick={handleShowSubLinks}>
                            <span className="item__bar"></span>
                        </button>
                    </li>

                <li className={`navbar__item ${showSubLinks ? "show-subNav" : "hide-subNav"}`}><NavLink className="navbar__link" to="/">Apprendre à écouter</NavLink>                <ul className={`item__subLinks ${showSubLinks ? "show-subNav" : "hide-subNav"}`}>
                    <li><NavLink to="/">La méthode A. Tomatis</NavLink></li>
                    <li><NavLink to="/">Le bilan de l'écoute</NavLink></li>
                    <li><NavLink to="/">Le coaching de l'écoute</NavLink></li>
                    <li><NavLink to="/">Déroulement du programme</NavLink></li>
                    <li><NavLink to="/">Ecouter son intuition</NavLink></li>
                    <li><NavLink to="/">Rdv être écouté avec empathie</NavLink></li>
                </ul>
                        <button className="item__button" onClick={handleShowSubLinks}>
                            <span className="item__bar"></span>
                        </button>
                    </li>

                <li className={`navbar__item ${showSubLinks ? "show-subNav" : "hide-subNav"}`}><NavLink className="navbar__link" to="/">Sylvie Petitjean</NavLink>  <ul className="item__subLinks">
                    <li><NavLink to="/">Conférences</NavLink></li>
                    <li><NavLink to="/">Vidéos</NavLink></li>
                </ul>
                        <button className="item__button" onClick={handleShowSubLinks}>
                            <span className="item__bar"></span>
                        </button>
                    </li>

                <li className="navbar__item"><NavLink className="navbar__link" to="/">Avis & témoignages</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">Tarifs</NavLink></li>
                <li className={`navbar__item ${showSubLinks ? "show-subNav" : "hide-subNav"}`}><NavLink className="navbar__link" to="/">Blog</NavLink>         <ul className="item__subLinks">
                    <li><NavLink to="/">Tomatis: lieux de pratique</NavLink></li>
                    <li><NavLink to="/">Coaching de la relation et puissance de l'écoute</NavLink></li>
                    <li><NavLink to="/">Musicothérapie</NavLink></li>
                    <li><NavLink to="/">Méthode Tomatis</NavLink></li>
                </ul> 
                        <button className="item__button" onClick={handleShowSubLinks}>
                            <span className="item__bar"></span>
                        </button>
                    </li>

                <li className="navbar__item"><NavLink className="navbar__link" to="/">Contact</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to="/">Rdv diagnostique offert</NavLink></li>
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