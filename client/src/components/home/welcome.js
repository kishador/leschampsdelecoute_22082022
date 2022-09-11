import React from 'react'
import ReactPlayer from 'react-player'
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

function Welcome() {
const externalSource = 'https://www.youtube.com/watch?v=4xcKuc_Nykg'
   
    return (
        <div className='welcome-box'>
            <div className='title-box'>
                <div className='title'>
            <h1>Les champs de l'écoute</h1>
            </div>
         
  <figure className="ball"><span className="shadow"></span></figure>
  <figure className="ball buble-1"><span className="shadow"></span></figure>
  <figure className="ball buble-2"><span className="shadow"></span></figure>
  <figure className="ball buble-3"><span className="shadow"></span></figure>
  <figure className="ball buble-4"><span className="shadow"></span></figure>
  <figure className="ball buble-5"><span className="shadow"></span></figure>
  <figure className="ball buble-6"><span className="shadow"></span></figure>
  <figure className="ball buble-7"><span className="shadow"></span></figure>
            </div>
            <h2>Méthode Tomatis, musicothérapie - Formation à l'écoute & coaching - Toulouse, Ariège, Bretagne</h2>
            <p><strong>La méthode Tomatis </strong>chez vous, associé à <strong> un coaching personnel</strong>: unique !!</p>
            <ReactPlayer url={externalSource} width="100%" height="auto"/>
            <p>Dans cette courte vidéo je vous explique:</p>
            <ul>
                <li><p>⭐ Que les freins à votre épanouissement peuvent être inscrits dans votre façon d'écouter et que cela impacte votre vie en la limitant, sur différents plans</p></li>
                <li><p>⭐ Comment la méthode Tomatis, peut vous ouvrir au delà de ces freins et ce que ça crée dans votre vie</p></li>
                <li><p>⭐ Quel est mon programme original, <strong>en ligne ou en présentiel, </strong>pour vous</p></li>
            </ul>
            <div className='programLink-box'>
            <FontAwesomeIcon icon={faCircleArrowDown} className="faCircleArrowDown"/>
            <NavLink to="/" className="link-neon" >Le programme original "Ouvrir l'écoute"</NavLink>
            </div>
        </div>
    );
  }
  
  export default Welcome;