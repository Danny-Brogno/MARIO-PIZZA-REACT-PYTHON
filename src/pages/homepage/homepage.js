import React, { useEffect } from 'react';

// COMPONENTS
import { UnderHeader } from "../../components/underHeader.js";
import { Jumbotron } from "../../components/jumbotron.js";
import { Banner } from "../../components/banner.js";
import { JumbotronScrollingCarousel } from "../../components/jumbotronScrollingCarousel.js";
import { ThreeBoxContainerHomepage } from "../../components/threeBoxContainerHomepage.js"
import { JumbotronStaticImage } from "../../components/jumbotronStaticImage.js";

// CSS
import '../../style-global.css';
import '../../style-homepage.css';

// FAVICON
import favicon from '../../img/favicon-homepage.png';

// --------------------------
export const HomePage = () => {
  
  useEffect(() => {
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Set Title
    document.title = "Mario Pizza | Homepage";

    // Set Favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    }
  }, []);
  
  return (
    
    <div id="homepage">
      <UnderHeader />
      <Jumbotron />
      <JumbotronScrollingCarousel />
      <Banner />
      <ThreeBoxContainerHomepage />
      <Banner />
      <JumbotronStaticImage />
    </div>
  )
}