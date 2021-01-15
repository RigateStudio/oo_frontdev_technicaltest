import "./index.scss";
import React from 'react';
import MediaQuery from 'react-responsive'

//import Slider from "react-slick";

const OffersPatch = () => (
  <div>
    <MediaQuery minWidth={1224}>
      <MediaQuery minWidth={769}>
      <section className="MyContainer OffersPatchGlobal">
        <div className="OffersPatchGreen">
          <div className="OffersPatchLignOne"> VOTRE STUDIO
          </div>
          <div className="OffersPatchLignTwo">
            <span className="Lign"> </span>
            <div> À PARTIR DE </div>
            <span className="Lign"> </span>
          </div>
          <div className="OffersPatchLignThree">
            <div className="OffersPatchLignThreePrice"> 390€ </div>
            <div className="OffersPatchLignThreePerMonths"> /MOIS </div>
          </div>
        </div>

        <div className="OffersPatchTurquoize">
          <div className="OffersPatchLignOne"> VOTRE 2 PIECES </div>
          <div className="OffersPatchLignTwo">
            <span className="Lign"> </span>
            <div> À PARTIR DE </div>
            <span className="Lign"> </span>
          </div>
          <div className="OffersPatchLignThree">
            <div className="OffersPatchLignThreePrice"> 570 € </div>
            <div className="OffersPatchLignThreePerMonths"> /MOIS </div>
          </div>
        </div>
        
        <div className="OffersPatchPurple">
          <div className="OffersPatchLignOne"> VOTRE 3 PIECES </div>
          <div className="OffersPatchLignTwo">
            <span className="Lign"> </span>
            <div className="OffersPatchLignTwo"> À PARTIR DE </div>
            <span className="Lign"> </span>
          </div>
          <div className="OffersPatchLignThree">
            <div className="OffersPatchLignThreePrice"> 814 € </div>
            <div className="OffersPatchLignThreePerMonths"> /MOIS </div>
          </div>
        </div>

        <div className="OffersPatchOrange">
          <div className="OffersPatchLignOne"> VOTRE 4 PIECES </div>
          <div className="OffersPatchLignTwo">
            <span className="Lign"> </span>
            <div className="OffersPatchLignTwo"> À PARTIR DE </div>
            <span className="Lign"> </span>
          </div>
          <div className="OffersPatchLignThree">
            <div className="OffersPatchLignThreePrice"> 972 € </div>
            <div className="OffersPatchLignThreePerMonths"> /MOIS </div>
          </div>
        </div>
      </section>
     </MediaQuery>
    </MediaQuery>
      <MediaQuery minResolution="2dppx">
        <div>
          <div className="OffersPatchTurquoize">
            <div className="OffersPatchLignOne"> VOTRE 2 PIECES </div>
            <div className="OffersPatchLignTwo">
              <span className="Lign"> </span>
              <div> À PARTIR DE </div>
              <span className="Lign"> </span>
            </div>
            <div className="OffersPatchLignThree">
              <div className="OffersPatchLignThreePrice"> 570 € </div>
              <div className="OffersPatchLignThreePerMonths"> /MOIS </div>
            </div>
          </div>
        </div>
    </MediaQuery>
  </div>
);

export default OffersPatch;
