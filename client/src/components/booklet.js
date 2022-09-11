import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Booklet() {
    return (
        <article className="booklet-box">
            <h2><span className="orange-char">C</span>omment <span className="orange-char">é</span>coutez vous ?</h2>
            <p>Découvrez quels Sont vos filtres, l'impact qu'ils ont dans votre vie, et des clés pour aller au delà.</p>
            <p>🎁 Livret offert avec inscription à la newsletter </p>
            <FontAwesomeIcon icon={faArrowDown} className="faArrowDown"/>
            <NavLink to="/"><img src=".\img\images\booklet.png" alt="livret offert" className="booklet-img"/></NavLink>
        </article>
    );
  }
  
  export default Booklet;