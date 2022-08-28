import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faMailForward, faMailReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <section>
            <h3>Renseignez vous</h3>
            <p><strong>06 99 29 30 09</strong></p>
            <NavLink to="/"><FontAwesomeIcon icon={faFacebook} /><p>Facebook</p></NavLink>
            <NavLink to="/"><FontAwesomeIcon icon={faBlog} /><p>Blog</p></NavLink>
            <NavLink to="/"><FontAwesomeIcon icon={faMailReply} /><p>Contact</p></NavLink>
        </section>
    );
  }
  
  export default Contact;