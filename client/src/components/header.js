import Navbar from "./header/navbar";
import Logo from "./header/logo";
import Presentation from "./header/presentation";

function Header() {
    function changeBg(){
        const images = [
            'url(./img/backgrounds/record-playing-music.jpg)',
            'url(./img/backgrounds/musical-instruments-for-folk-music.jpg)',
            'url(./img/backgrounds/listening-to-music.jpg)',
            'url(./img/backgrounds/harp-top-music-sheet.jpg)',
            'url(./img/backgrounds/silver-cornet-instrument-on-sheet-music.jpg)'
        ]
        const header = document.querySelector('header')
        const bg = images[Math.floor(Math.random() * images.length)];
        header.style.backgroundImage = bg;        
    }
    setInterval(changeBg, 6000)
    return (
        <header>< Navbar/>< Logo/>< Presentation/>
        </header>
    );
  }
  
  export default Header;