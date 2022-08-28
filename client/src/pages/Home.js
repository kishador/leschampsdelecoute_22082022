import Booklet from "../components/booklet";
import Journey from "../components/home/journey";
import Method from "../components/home/method";
import News from "../components/home/news";
import Offer from "../components/home/offer";
import Testimony from "../components/home/testimony";
import Welcome from "../components/home/welcome";


function Home() {
    return (
        <div>
            < Welcome />
            < Journey />
            < Method />
            < Testimony />
            < Booklet />
            < Offer />
            < News />
        </div>
    );
  }
  
  export default Home;