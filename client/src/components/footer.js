import Contact from "./footer/contact";
import LegalNotice from "./footer/legal-notice";
import Organization from "./footer/organization";

function Footer() {
    return (
        <footer>
            <Organization />
            <Contact />
            <LegalNotice />
        </footer>
    );
  }
  
  export default Footer;