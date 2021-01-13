import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Introimage from './components/introimage';
import Introtext from './components/introtext';
import OffersPatch from './components/offerspatchs';
import CityPresentation from './components/city';
import Footer from './components/footer';

const App = () => (
    <div>
      <Header />
      <Introimage />
      <Introtext />
      <OffersPatch />
      <CityPresentation />
      <Footer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

  