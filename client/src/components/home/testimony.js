import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faFire } from "@fortawesome/free-solid-svg-icons"
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

function Testimony() {
    const newExternalSource = 'https://www.youtube.com/watch?v=tjFV11p6W_U'
    const firstExternalSource = 'https://www.youtube.com/watch?v=NXxo0UmlhtU'
    const secondExternalSource = 'https://www.youtube.com/watch?v=BCAiUT2sc9I'
    const thirdExternalSource = 'https://www.youtube.com/watch?v=jdawiyUk91c'
    return (
        <section className="testimony">
            <h3 className="testimony-title">témoignages:</h3>
              <figure className="testimony-card"><p className="testimony-new">Nouveau<FontAwesomeIcon icon={faFire} className="faFire"/></p>
            <blockquote className="testimony-videoTxt">
            <ReactPlayer url={newExternalSource} width="80%" height="auto"/>
            <p>"J'ai retrouvé de l'énergie et j'y vois beaucoup plus clair!... Sylvie a su me rejoindre par son écoute fine. C'est précieux, inestimable... Une très belle expèrience."</p>
            </blockquote>
            <figcaption className="testimony-figcaption">Marion, artiste peintre</figcaption>
        </figure>
        <figure className="testimony-card">
            <blockquote className="testimony-videoTxt">
            <ReactPlayer url={firstExternalSource} width="80%" height="auto"/>
            <p>"Mon potentiel était enfoui, il s'est réveillé. ça m'a ouvert de nouvelles possibilités"</p>
            </blockquote>
            <figcaption className="testimony-figcaption">Philippe Ligori, musicien et formateur</figcaption>
        </figure>
        <figure className="testimony-card">
            <blockquote className="testimony-videoTxt">
            <ReactPlayer url={secondExternalSource} width="80%" height="auto"/>
            <p>"C'est une méthode que je recommande avec beaucoup de sincérité... Pour la définir? Essentiel, respect, efficacité"</p>
            </blockquote>
            <figcaption className="testimony-figcaption">Cécile Ybargaray, praticienne en pédagogie neuro-visuelle</figcaption>
        </figure>
        <figure className="testimony-card">
            <blockquote className="testimony-videoTxt">
            <ReactPlayer url={thirdExternalSource} width="80%" height="auto"/>
            <p>"Je sais sortir de mon mental envahissant, je sais m'écouter, ça change tout!"</p>
            </blockquote>
            <figcaption className="testimony-figcaption">Maryline</figcaption>
        </figure>
        <NavLink to="/" className="button">Nombreux autres témoignages ici<FontAwesomeIcon icon={faComments} className="faComments"/></NavLink>

        </section>
    );
  }
  
  export default Testimony;