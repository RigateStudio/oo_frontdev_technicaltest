import "./index.scss";
import React from 'react';
import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

class PatchsSlider extends React.Component {
	render(){
		let settings = {
      className: "OffersPatchSlider",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplay: true,
		}
		return (
			<Slider {...settings} >
        <div className="OffersPatchGreen">
          <div className="OffersPatchLignOne"> VOTRE STUDIO
          </div>
          <div className="OffersPatchLignTwo">
            <span className="Lign"> </span>
            <div> À PARTIR DE </div>
            <span className="Lign"> </span>
          </div>
          <div className="OffersPatchLignThree">
            <div className="OffersPatchLignThreePrice"> 390 € </div>
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
			</Slider>
			)
	}
}

const OffersPatch = () => (
  <div>
     <MediaQuery minWidth={1224}>
      <MediaQuery minWidth={768}>
      <section className="OffersPatchGlobal">
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
      <Mobile>
        <div className="OffersPatchMobile">
          <PatchsSlider />
        </div>
      </Mobile>
  </div>
);

export default OffersPatch;