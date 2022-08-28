import { NavLink } from "react-router-dom";

function Offer() {
    return (
        <section>
            <article>
                <h2>Le Bilan Tomatis de l'écoute et de la voix</h2>
                <p>Etonnant! Découvrez une façon unique d'écouter et des conseils pour vous développer</p>
                <p>Vous allez découvrir si votre écoute est limitée par des filtres et les conséquences dans votre vie et voir que votre potentiel est aussi inscrit dans vos oreilles! </p>
                <img src=".\img\images\image.png" alt="audiometre" width="100%" />
                <ul>
                    <li><NavLink to="/">Voir les tarifs</NavLink></li>
                    <li><NavLink to="/">Lieux et dates sur demande</NavLink></li>
                    <li><NavLink to="/">En savoir plus</NavLink></li>
                </ul>
            </article>
            <article>
                <h2>RDV gratuit: "diagnostic de votre écoute et clés"</h2>
                <h3>Comment se serait si vous étiez vraiment écouté?</h3>
                <p>J'ai décidé d'offrir mon écoute et mon soutien. Parce que ça apporte de l'apaisement? de la clarté, du lien... Que ça détend et nourri la confiance nécéssaire à un nouvel élan! <br/>Un temps privilégié (environ 1h) pour plonger en vous, avoir une bouffée d'oxygene... <br/>Et un tems pour voir si vous pourriez bénéficier du programme "Ouvrir l'écoute"</p>
                
                <figure>
                <img src=".\img\images\butterfly.jpg" alt="butterfly" width="100%"/>
                <figcaption><p>Un temps privilégié pour vous</p></figcaption>
                
            </figure>
            <p>Pour réserver (peu de places disponibles),<br/>c'est ici!</p>
            <NavLink to="/">Demande RDV gratuit!</NavLink>

            </article>


        </section>
    );
}

export default Offer;