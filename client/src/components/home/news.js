import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import ReactPlayer from "react-player";

function News() {
  const firstExternalSource = 'https://www.youtube.com/watch?v=rAqPUV0ZWHQ&t=1s'
  const secondExternalSource = 'https://www.youtube.com/watch?v=vtQjxnCExeE&t=1s'
  const thirdExternalSource = 'https://www.youtube.com/watch?v=ypatlCFzHIA&t=3s'
  return (
    <section>
      <article>
        <p>rejoignez ma chaine <FontAwesomeIcon icon={faYoutube} />:<br />des vidéos maison pour comprendre l'écoute et s'éxercer.</p>
        <ReactPlayer url={firstExternalSource} width="100%" height="auto" />
        <h3>Nouvelles dates en Bretagne</h3>
        <p><strong>Fin octobre</strong>: réservez votre place!</p>
        <img src=".\img\images\SylviePetitjean-sea.png" alt="Sylvie Petitjean at sea" width="100%" />
      </article>
      <article>
        <h3>Nouveau bureau à Foix</h3>
        <img src=".\img\images\newOfice.png" alt="Sylvie Petitjean and her new local" width="100%" />
      </article>
      <article>
        <p>Dans ce cours en vidéo, vous allez découvrir les conséquences tragiques d'une mauvaise écoute et des pistes pour en sortir.beaucoup d'infos...</p>
        <ReactPlayer url={secondExternalSource} width="100%" height="auto" />
        <p>prenez de quoi noter!</p>
      </article>
      <figure><p>Voici, en image et en musique comment fonctionne <cite>"l'effet Tomatis"</cite>, super clair!</p>
        <figcaption>Réalisé par Tomatis Développement</figcaption>
        <blockquote>
          <ReactPlayer url={thirdExternalSource} width="100%" height="auto" />
        </blockquote>
      </figure>
      <figure><p>La méthode Tomatis: tout un chapitre dans <cite>"Guérir grâce à la neuroplasticité"</cite>, super clair!</p>
        <figcaption>de Norman Doidge</figcaption>
        <blockquote>
          <img src=".\img\images\drDoidge.jpg" alt="Dr Norman Doidge" width="100%" />
        </blockquote>
      </figure>
      <figure><p>Dans ce <cite>"Cerveau & psycho"</cite> découvrez les bienfaits de la musique</p>
        <figcaption>(mai 2021)</figcaption>
        <blockquote>
          <img src=".\img\images\cerveauEtPsycho.jpg" alt="Cerveau et psycho pages" width="100%" />
        </blockquote>
      </figure>

    </section>
  );
}

export default News;