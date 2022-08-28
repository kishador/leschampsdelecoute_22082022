import { NavLink } from "react-router-dom";

function Journey() {
    return (
        <section>
            <h2>Bienvenue aux champs de l'écoute!</h2>
            <img src=".\img\images\star.png" alt="star" width="100%"/>
            <p>Mon offre?</p>
            <ul>
                <li>La quintessence de mon expérience personnelle et professionnelle de 30 années.</li>
                <li>Ma sensibilité particulière à détecter les limitations internes qui réduisent votre épanouissement, limite votre écoute.</li>
                <li>Des outils pour vous connecter à votre richesse intérieure, à votre créativité, votre joie.</li>
            </ul>
            <img src=".\img\images\SylviePetitjean.jpg" alt="Sylvie Petitjean" width="100%"/>
            <NavLink to="/"><p>Mon parcours</p></NavLink>
            <span></span>
            <p>C'est avec présence et soin que j'ai à coeur de vous accompagner vers une meilleure écoute de vous même et de sautres. Mon enthousiasme est nourri par tous les changements positifs, les ouvertures, que j'ai pu observer chez les "écoutants".</p>
            <p>Ma vision?</p>
            <p><q>"Du coeur de l'orille...<br/>à l'oreille du coeur"</q><span>Sylvie Petitjean</span></p>
            <p>Pour le sécurité de tous, lors des rendez-vous, les mesures de précaution sanitaires sont respectées: matériel désinfecté, distances respectées.</p>


        </section>
    );
  }
  
  export default Journey;