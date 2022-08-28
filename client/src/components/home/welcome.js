import React from 'react'
import ReactPlayer from 'react-player'
import { faStar, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

function Welcome() {
const externalSource = 'https://www.youtube.com/watch?v=4xcKuc_Nykg'
   
    return (
        <div>
            <h1>Les champs de l'écoute</h1>
            <h2>Méthode Tomatis, musicothérapie</h2>
            <h2>- Formation à l'écoute & coaching -</h2>
            <p>Toulouse, Ariège, Bretagne</p>
            <p><strong>La méthode Tomatis </strong>chez vous, associé à <strong> un coaching personnel</strong>: unique !!</p>
            <ReactPlayer url={externalSource} width="100%" height="auto"/>
            <p>Dans cette courte vidéo je vous explique:</p>
            <ul>
                <li><FontAwesomeIcon icon={faStar} /><p>Que les freins à votre épanouissement peuvent être inscrits dans votre façon d'écouter et que cela impacte votre vie en la limitant, sur différents plans</p></li>
                <li><FontAwesomeIcon icon={faStar} /><p>Comment la méthode Tomatis, peut vous ouvrir au delà de ces freins et ce que ça crée dans votre vie</p></li>
                <li><FontAwesomeIcon icon={faStar} /><p>Quel est mon programme original, <strong>en ligne ou en présentiel, </strong>pour vous</p></li>
            </ul>
            <FontAwesomeIcon icon={faCircleArrowDown} />
            <NavLink to="/" >Le programme original "Ouvrir l'écoute"</NavLink>
        </div>
    );
  }
  
  export default Welcome;