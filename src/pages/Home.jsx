import React from 'react';
import Sites from "../components/sites/Sites";
import Introduction from "../components/accueil/Introduction";
import Apparements from "../components/appartements/Apparements";
import Parc from "../components/parc/Parc";
import Tarifs from "../components/tarifs/Tarifs";
import Horaires from "../components/horaires/Horaires";
import Contact from "../components/contact/Contact";
import Banner from "../components/banner/Banner";
import "../style.css";

export default function Home() {
  return (
    <main id='accueil' className="container_page">
      <Banner />
      <div className="separateur_1"></div>
      <Sites />
      <div id="parallax"></div>
      <Introduction />
      <Apparements />
      <Parc />
      <Tarifs />
      <Horaires />
      <Contact />
    </main>
  );
}
