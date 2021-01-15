import "./index.scss";
import React from 'react';
import city_photo from '../../assets/img/city_photo.png';

class CityPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_one_laville: true,
      button_two_lestrajets: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
      if (e.target.id === "button_one_laville") {
        this.setState({
          button_one_laville: true,
          color: "#86cebb",
        })
        this.setState({
          button_two_lestrajets: false,
          color: "#000000",
        })
      }
      if (e.target.id === "button_two_lestrajets") {
        this.setState({
          button_one_laville: false,
          color: "#000000",          
        })
        this.setState({
          button_two_lestrajets: true,
          color: "#86cebb",
        })
      }
    }

  choosenTownStyle = {border: '1px solid black'};

  
   render() {
     return(
      <section className="Header MyContainer">
      <img src={city_photo} alt="Ville de Chalifert" className="CityPhoto"/>
        <section className="CityDescription">
          <div className="CityDescriptionTitle">
            <div className="MainTitle"> CHALIFERT, </div>
            <div className="Description"> UN PETIT VILLAGE AUTHENTIQUE AU COEUR DE LA VERDURE </div>
          </div>
          <div className="conditional-render-section">
         {
          this.state.button_one_laville 
             ? 
          (<ul className="Robotosmall list-decoration list-decoration--svg">
            <li> Un charmant village briard bordé par la Marne</li>
            <li> Ses vieilles pierres, son église et son écluse.</li>
            <li> Ses infrastructures scolaires, culturelles et sportives.</li>
            </ul>) 
            :
          (<div></div>)
         }
         {
          this.state.button_two_lestrajets
             ? 
          (<ul className="Robotosmall list-decoration list-decoration--svg">
            <li>Gare RER/TGV de Chessy à 10 minutes par le bus ligne 24.</li>
            <li>Paris porte de Bercy à 35 minutes par l’autoroute A4.</li>
            <li>Centre commercial Val d’Europe à 8 minutes en voiture.</li>
          </ul>) 
             :
          (<div></div>)
         }
         </div>
         <div className="ListChoice">
           <div id="button_one_laville" className="ListChoiceOne"
           onClick={this.handleClick}>La ville</div>
          
           <div id="button_two_lestrajets" className="ListChoiceTwo"
           style={{color: this.state.color }}
           onClick={this.handleClick}>Les trajets</div>
         </div>
         </section>
    </section>
    )
   }
}

export default CityPresentation;
  