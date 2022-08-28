import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Booklet() {
    return (
        <article>
            <h2><span>C</span>omment <span>é</span>coutez vous ?</h2>
            <p>Découvrez quels Sont vos filtres, l'impact qu'ils ont dans votre vie, et des clés pour aller au delà.</p>
            <p>Livret offert avec inscription à la newsletter </p>
            <FontAwesomeIcon icon={faArrowDown} />
            <NavLink to="/"><img src=".\img\images\booklet.png" alt="butterfly" width="100%"/></NavLink>
        </article>
    );
  }
  
  export default Booklet;