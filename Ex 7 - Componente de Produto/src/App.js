//Style
import './App.css';
//Components
import Product from './components/Product';
//Images
import Missha from "./assets/missha.jpg";
import InnisfreeGreen from "./assets/innisfree-green.jpg";
import Claire from "./assets/claire.jpg";
import TonyMoly from "./assets/tonymoly.jpg";
import Skin79 from "./assets/skin79.jpeg";
import Cosrx from "./assets/cosrx.jpg";
import InnisfreeCanola from "./assets/innisfree-canola.jpg";
import Scinic from "./assets/scinic.jpg";

function App() {
  return (
    <>
      <Product
        name="Missha All Around Safe Block Sebum Zero Sun"
        photo={Missha}
        price="$4.00"
      />
      <Product
        name="Innisfree Green Tea Balancing Cream"
        photo={InnisfreeGreen}
        price="$18.00"
      />
      <Product
        name="Claire's Cloud 9 Blanc De Whitening Cream"
        photo={Claire}
        price="$20.00"
      />
       <Product
        name="Tonymoly Pure Eco Snail Moisture Gel"
        photo={TonyMoly}
        price="$8.00"
      />
       <Product
        name="Skin79 Fresh Garden Mask - Snail"
        photo={Skin79}
        price="$2.00"
      />
       <Product
        name="Cosrx Advanced Snail 92 All in One Cream"
        photo={Cosrx}
        price="$24.00"
      />
       <Product
        name="Innisfree Canola Honey Mask"
        photo={InnisfreeCanola}
        price="$14.00"
      />
       <Product
        name="Scinic Honey Banana Cleansing Foam"
        photo={Scinic}
        price="$4.00"
      />    
    </>
  );
}

export default App;
