import React, { useState, useEffect } from 'react';
import promotions1 from '../img/promotions1.jpg';
import promotions2 from '../img/promotions2.jpg';
import promotions3 from '../img/promotions3.jpg';
import promotions4 from '../img/promotions4.jpg';
import promotions5 from '../img/promotions5.jpg';
import promotions6 from '../img/promotions6.jpg';

export const Banner2 = () => {
  
  // ENLARGE IMAGES
  // ENLARGE IMAGES
  // ENLARGE IMAGES
  
  // State to track which image is enlarged
  const [enlargedImg, setEnlargedImg] = useState(null);

  // Function to open the overlay
  const handleImageClick = (imgSrc) => {
    setEnlargedImg(imgSrc);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setEnlargedImg(null);
  };

  return (
    <div className="banner two">

      {enlargedImg && (
        <div 
          onClick={closeOverlay}
          style={{
            background: `RGBA(0,0,0,.9) url(${enlargedImg}) no-repeat center`,
            backgroundSize: 'contain',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: '99999',
            top: '0',
            left: '0',
            cursor: 'pointer'
          }}
        />
      )}
      <div className="top">
        <h2>
          Discover our promotions
        </h2>
      </div>

      <section className="banner-slider">

        <div className="group">
          <div className="card" onClick={() => handleImageClick(promotions1)}>
            <img src={promotions1} alt="promo1"/>
          </div>
          <div className="card" onClick={() => handleImageClick(promotions2)}>
            <img src={promotions2} alt="promo2"/>
          </div>
          <div className="card" onClick={() => handleImageClick(promotions3)}>
            <img src={promotions3} alt="promo3"/>
          </div>
          <div className="card" onClick={() => handleImageClick(promotions4)}>
            <img src={promotions4} alt="promo4"/>
          </div>
          <div className="card" onClick={() => handleImageClick(promotions5)}>
            <img src={promotions5} alt="promo5"/>
          </div>
          <div className="card" onClick={() => handleImageClick(promotions6)}>
            <img src={promotions6} alt="promo6"/>
          </div>
        </div>
        <div aria-hidden className="group">
        
          <div className="card" onClick={() => handleImageClick(promotions1)}>
            <img src={promotions1} alt="promo1"/>
          </div>
          
          <div className="card" onClick={() => handleImageClick(promotions2)}>
            <img src={promotions2} alt="promo2"/>
          </div>
          
          <div className="card" onClick={() => handleImageClick(promotions3)}>
            <img src={promotions3} alt="promo3"/>
          </div>
          
          <div className="card" onClick={() => handleImageClick(promotions4)}>
            <img src={promotions4} alt="promo4"/>
          </div>
          
          <div className="card" onClick={() => handleImageClick(promotions5)}>
            <img src={promotions5} alt="promo5"/>
          </div>
          
          <div className="card" onClick={() => handleImageClick(promotions6)}>
            <img src={promotions6} alt="promo6"/>
          </div>
          
        </div>
      </section>
    </div>
  );
};