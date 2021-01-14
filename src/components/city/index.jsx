import "./index.scss";
import React from 'react';
import city_photo from '../../assets/img/city_photo.png';

const CityPresentation = () => (
    <section className="Header MyContainer">
      <img src={city_photo} alt="Ville de Chalifert" className="CityPhoto"/>
        <section className="CityDescription">
          <div className="CityDescriptionTitle">
            <div className="MainTitle"> CHALIFERT, </div>
            <div className="Description"> UN PETIT VILLAGE AUTHENTIQUE AU COEUR DE LA VERDURE </div>
          </div>

          <ul className="Robotosmall list-decoration list-decoration--svg">
            <li>
              Gare RER/TGV de Chessy à 10 minutes par le bus ligne 24.
            </li>
            <li>
              Paris porte de Bercy à 35 minutes par l’autoroute A4.
            </li>
            <li>
              Centre commercial Val d’Europe à 8 minutes en voiture.
            </li>
              {/*
                <li>
                  Un charmant village briard bordé par la Marne
                <li>
                  Ses vieilles pierres, son église et son écluse.
                </li>
                <li>
                  Ses infrastructures scolaires, culturelles et sportives.
                </li>
              */}
          </ul>
            <div className="ListChoice">
              <div className="ListChoiceOne"> La ville </div>
              <div className="ListChoiceTwo"> Les trajets </div>
            </div>
        </section>
    </section>
);
  
  export default CityPresentation;
  