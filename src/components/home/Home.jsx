import React from "react";
//import Sites from "./sites";
import Introduction from "./introduction";
import Parc from "./parc";
import Tarifs from "./tarifs";
import Horaires from "./horaires";
import Contact from "./contact";
import Banner from "./banner";
import "../../style/style.css";
import Apparements from "./apparements";

export default function Home() {
  return (
    <main id="accueil" className="container_page">
      <Banner />
      <div className="separateur_1"></div>
      {/* <Sites /> */}
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
