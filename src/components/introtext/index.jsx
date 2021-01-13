import "./index.scss";
import React from 'react';
import icon_sun from '../../assets/img/icon_sun.png';

const Introtext = () => (
  <section className="IntroTextBackground">
    <div className="IntroTextFirstLine">
      <div>PLEIN CIEL </div>
      <img src={icon_sun} className="IntroTextIcon" alt="Icône soleil Chalifert" />
      <div>CHALIFERT </div>
    </div>
    <div className="IntrotextSecondLine"> À 10 MIN DE CHESSY ET DU RER </div>
    <div className="IntrotexThirdLine"> DÉCOUVREZ UNE ADRESSE ET DES PRIX EXCEPTIONNELS </div>
    <div className="IntrotexFourthLine"> SEMAINE DÉCOUVERTE DU 7 AU 13 JANVIER </div>
  </section>
);

export default Introtext;