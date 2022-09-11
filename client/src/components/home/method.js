import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMusic, faCheck, faShare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

function Method() {
    const externalSource = 'https://www.youtube.com/watch?v=YVIOYXFzm8c'
    return (
        
        <section>
            <article>
            <h3>La musicothérapie Tomatis</h3>
            <NavLink className="filter-text-icons flex-between" to="/"><div className="filter-icons flex-center"><FontAwesomeIcon icon={faMusic} className="flex-center faMusic" /></div>
            <div className="filter-text flex-center"><p>Dévérouiller ses blocages</p></div>
            </NavLink>
            <p>Nouvelles connexions neuronales, libération des tensions, stimulation et optimisation du potentiel: l'énergie du changement</p>
            </article>
            <article>
                <h3>Le coaching individuel de l'écoute</h3>
                
                <NavLink className="filter-text-icons flex-between" to="/"><div className="filter-icons flex-center"><FontAwesomeIcon icon={faMusic} className="flex-center faMusic" /></div>
                <div className="filter-text flex-center">Transformer ses perceptions</div>
                </NavLink>
                <p>Nouveau savoir être, nouveau faire <br/>Transformer la relation à soi même et aux autres, à sa voix, enrichir sa communication: incarner le changement</p>
            </article>
            <figure className="methodCard">
            <div className="methodImg-box"><img src=".\img\images\music-5190768_640.jpg" alt="women listening music" width="100%"/></div>
                <figcaption><p>Programme personnel d'écoute</p></figcaption>
            </figure>
            <figure className="methodCard">
                <div className="methodImg-box"><img src=".\img\images\winning-1529402_640.jpg" alt="child winning and jumping" width="100%"/></div>
                <figcaption><p>Outils concrèts quotidiens</p></figcaption>
            </figure>
            <figure className="methodCard">
            <div className="methodImg-box"><img src=".\img\images\woman-570883_640.jpg" alt="women winning and jumping" width="100%"/></div>
                <figcaption><p>Ouvrir son écoute pour ouvrir tout son être</p></figcaption>
            </figure>
            
            <h4><FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>Une expérience unique de rencontre avec vous même, l'énergie et l'accompagnement de votre transformation intérieure</h4>
            <p>Ce qui permet un changement concret et durable?<br/>une action simultanée sur 2 plans:</p>
            <p><FontAwesomeIcon icon={faCheck} className="faCheck"/>Sur le corps et le système nerveux <strong>avec la méthode Tomatis</strong> + </p>
            <p><FontAwesomeIcon icon={faCheck} className="faCheck"/>Sur les comportements <strong>avec la pédagogie d'un savoir faire avec soi même et les autres</strong></p>
            <article>
                <h3>Les conséquences d'une écoute fermée... et qui s'ouvre!</h3>
                <p>Ecouter les autres plus que soi-même, être envahi par les émotions, ou réactif, ou tendu. Se protéger à l'excès, se dévaloriser, être fatigué, déprimé, freiné. Avoir l'impression de tourner en rond... </p>
                
                <p><FontAwesomeIcon icon={faShare} className="faShare"/>Voilà des conséquences d'une <strong>écoute "fermée"</strong></p>
                <p>Pouvoir être attentif, se prendre en compte, être ouvert aux autres, créatif, intuitif, détendu, clair, confiant.<br/>Pouvoir s'affirmer naturellement, en accord avec soi et mieux communiquer ...</p>
                <p><FontAwesomeIcon icon={faShare} className="faShare"/>Voici quelques-unes des qualités qui apparaissent lorsque <strong>l'écoute s'ouvre</strong></p>
            </article>
            <article>
                <h3>Comment savoir quels sont les freins qui vous limitent?:</h3>
                <ul>
                    <li><NavLink to="/">1 - Réservez un RDV téléphonique gratuit</NavLink></li>
                    <li><NavLink to="/">2 - Faites un bilan de l'écoute et de la voix</NavLink></li>
                    <li><NavLink to="/">3 - Téléchargez le livret gratuit</NavLink></li>
                </ul>
            </article>
            <article className="method-video">
                <h3>Voici comment et pourquoi j'ai enrichi ma pratique de la méthode Tomatis</h3>
                <ReactPlayer url={externalSource} width="100%" height="auto"/>
            </article>
            <article>
            <h3>Et les enfants?</h3>
            <img src=".\img\images\child-music.jpg" alt="boy listening music and drawing " width="100%"/>
            
            <p>Du fait que la pratique a lieu <NavLink to="/">à distance</NavLink> ou <NavLink to="/">en semi résidentiel</NavLink>, j'ai choiside ne plus accompagner les enfants avec la méthode Tomatis. Par contre, les enfants des personnes qui suivent le programme "Ouvrir l'écoute" peuvent en bénéficier, parce que nous agissons ensemble, avec un tarif avantageux</p>
            </article>
        </section>
    )
};

export default Method;