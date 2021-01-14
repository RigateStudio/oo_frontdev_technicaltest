import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Introimage from './components/introimage';
import Introtext from './components/introtext';
import OffersPatch from './components/offerspatchs';
import CityPresentation from './components/city';
import Footer from './components/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => (
    <div>
      <Header />
      <Introimage />
      <Introtext />
      <OffersPatch />
      {/* <SimpleSlider /> */}
      <CityPresentation />
      <Footer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

  