import { NavLink } from "react-router-dom";

function Journey() {
    return (
        <section>
            <h2 className="journey-title">Bienvenue aux champs de l'écoute!</h2>
            <p>
            Mon offre?</p>
            <ul className="journey-offer">
                <li><img src=".\img\icons\icons8-fleur-de-spa-64.png" alt="flower icon" />La quintessence de mon expérience personnelle et professionnelle de 30 années.</li>
                <li><img src=".\img\icons\icons8-fleur-de-spa-64.png" alt="flower icon"/>Ma sensibilité particulière à détecter les limitations internes qui réduisent votre épanouissement, limite votre écoute.</li>
                <li><img src=".\img\icons\icons8-fleur-de-spa-64.png" alt="flower icon"/>Des outils pour vous connecter à votre richesse intérieure, à votre créativité, votre joie.</li>
            </ul>
           <div className="profilPicture-box"><img src=".\img\images\SylviePetitjean.jpg" className="profilPicture" alt="Sylvie Petitjean"/></div>
            <NavLink className="journey-link" to="/"><p>Mon parcours</p></NavLink>
            <span></span>
            <p className="journey-txt">C'est avec présence et soin que j'ai à coeur de vous accompagner vers une meilleure écoute de vous même et de sautres. Mon enthousiasme est nourri par tous les changements positifs, les ouvertures, que j'ai pu observer chez les "écoutants".</p>
            <p className="journey-txt">Ma vision?</p>
            <p className="journey-txt orange-txt">"Du coeur de l'orille...<br/>    à l'oreille du coeur"</p><p className="signature">Sylvie Petitjean</p>
            <p className="safety-txt">Pour le sécurité de tous, lors des rendez-vous, les mesures de précaution sanitaires sont respectées: matériel désinfecté, distances respectées.</p>
        </section>
    );
  }
  
  export default Journey;