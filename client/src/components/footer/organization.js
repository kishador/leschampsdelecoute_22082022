import { NavLink } from "react-router-dom";

function Organization() {
    return (
        <section>
            <NavLink to='http://charteethique.eu/'><img  src=".\img\images\charte.png" alt="Charte des professionnels"/></NavLink>
            <NavLink to='https://www.afipapp-tomatis.com/'><img  src=".\img\images\afipap.png" alt="logo afipap"/></NavLink>
            <p>Membre fondateur de l'association française des praticiens en Audio Psycho Phonologie</p>
        </section>
    );
  }
  
  export default Organization;