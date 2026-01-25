import React from 'react';
import pizza1 from '../img/15.jpg';
import pizza2 from '../img/16.jpg';
import pizza3 from '../img/27.jpg';

// --------------------------
export const ThreeBoxContainer = () => {
  return (
    <div className="three-box-container">
    <h1>OUR VALUES</h1>
      <div className="top">
        <div>
          <img src={pizza1} alt="image-here" />
          <h3>Uncompromising Quality</h3>
          <p>
            We believe that a great pizza starts with the integrity of its ingredients. 
            From our 48-hour slow-fermented dough to the sun-ripened San Marzano tomatoes, we never take shortcuts. 
            Every slice is a testament to our commitment to sourcing only the finest, freshest local produce and imported Italian staples, ensuring that the last bite is just as exceptional as the first.
          </p>
        </div>
        
        <div>
          <img src={pizza2} alt="image-here" />
          <h3>Community Connection</h3>
          <p>
            We believe that a great pizza starts with the integrity of its ingredients. 
            From our 48-hour slow-fermented dough to the sun-ripened San Marzano tomatoes, we never take shortcuts. 
            Every slice is a testament to our commitment to sourcing only the finest, freshest local produce and imported Italian staples, ensuring that the last bite is just as exceptional as the first.
          </p>
        </div>
        
        <div>
          <img src={pizza3} alt="image-here" />
          <h3>Mastered Consistency</h3>
          <p>
            A pizzeria is more than just a place to eat—it is a gathering spot for friends, families, and neighbors. 
            We value the relationships we build across the counter and are dedicated to giving back to the community that supports us. 
            We don't just serve pizza; we create a space for shared memories, laughter, and a sense of belonging for everyone who walks through our doors.
          </p>
        </div>

      </div>
      <div className="bottom">
        <h2>
          Beyond the crust: slice your perfect day.
        </h2>
        <p>
          Our doughy delights are just the start. If you need more than a quick bite, explore our savory services: custom topping building, exclusive cheesy deals not found elsewhere, or direct consultation with Mario to match your specific hunger needs with the perfect pizza property.
        </p>
      </div>
    </div>
  )
}