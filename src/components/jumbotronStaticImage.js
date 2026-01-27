import React from 'react';
import fidelityCard from '../img/fidelity-card.jpg';


export const JumbotronStaticImage = () => {
  return (
    <div className="jumbotron-static-image">
      <section>
        
        <div className="container-left">
          <img src={fidelityCard} alt="fidelity-card" />
        </div>
        
        <div className="container-right">
          
          <div className="text">
          
            <h2>
              &#11088; THE SUPER STAR PIZZA PASS
            </h2>
            
            <h3>
              More than a card, it's a Power-Up for your hunger!
            </h3>
            
          </div>
          
          <p>
            Become a legend in our pizzeria with the Super Star Pizza Pass! Every time you order a fresh pizza, present your pass to our staff to earn a digital Star. 
            Once you’ve collected 10 Stars, your next pizza of any size or choice is on the house. 
            Your mission, should you choose to accept it, lasts for 3 months from the date of issuance. 
            Please note that this card is non-transferable and must be presented at the time of purchase to receive your validation. 
            Level up your lunch and start earning today!
          </p>
          
          <div className="btn-container">
            <button type="button" className="my-button-first" style={{margin: "3em 0em 0em 0em"}}>
              GET CARD!
            </button>
          </div>
          
          
        </div>
        
      </section>
    </div>
  )
}