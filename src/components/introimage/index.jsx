import "./index.scss";
import React from 'react';
import logo_le_village from '../../assets/img/logo_le_village.png';

const Introimage = () => (
  <section className="HeaderIntroduction">
    <div className="HeaderIntroductionText ">
      <div className="Dates"> Les 14 et 15 janvier </div>
      <div className="Title"> GRAND LANCEMENT {/* SI LE TEMPS - AJOUTER INLINE BREAK SUR MOBILE*/} À CHALIFERT </div>
      <div className="Text"> Devenez propriétaire <span>
      aux portes de Val d'Europe </span></div>
      </div>
      <img src={logo_le_village} alt="Le Village" className="HeaderIntroductionLogo"/>
  </section>
);

export default Introimage;
