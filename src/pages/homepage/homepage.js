import React from 'react';
import { UnderHeader } from "../../components/underHeader.js";
import { Jumbotron } from "../../components/jumbotron.js";
import { Banner } from "../../components/banner.js";
import { JumbotronContainer } from "../../components/jumbotronContainer.js";
import { UnderGridContainer } from "../../components/underGridContainer.js";
import '../../style-homepage.css';
import favicon from '../../img/favicon-homepage.png';

const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = favicon;
}

export const HomePage = () => {
  return (
    <div>
      <UnderHeader />
      <Jumbotron />
      <Banner />
      <JumbotronContainer />
      <UnderGridContainer />
    </div>
  )
}