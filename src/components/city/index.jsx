import "./index.scss";
import React from 'react';
import city_photo from '../../assets/img/city_photo.png';

const CityPresentation = () => (
    <section className="Header">
      <img src={city_photo} alt="Ville de Chalifert" />
      <li>
        Gare RER/TGV de Chessy à 10 minutes par le bus ligne 24.
      </li>
      <li>
        Paris porte de Bercy à 35 minutes par l’autoroute A4.
      </li>
      <li>
        Centre commercial Val d’Europe à 8 minutes en voiture.
      </li>
      <p> Les trajets </p>
{/*
      <li>
        Un charmant village briard bordé par la Marne
      <li>
        Ses vieilles pierres, son église et son écluse.
      </li>
      <li>
        Ses infrastructures scolaires, culturelles et sportives.
      </li>
      <p> La ville </p>
*/}
    </section>
);
  
  export default CityPresentation;
  