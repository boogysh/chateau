import React from "react";
import { Link } from "react-router-dom";
import CardBasique from "../cards/CardBasique";
import CardClassique from "../cards/CardClassique";

import CardDecouvrez from "../cards/CardDecouvrez";
import CardException from "../cards/CardException";

export default function Tarifs() {
  return (
    <section className="tarifs" id="tarifs">
      <h3>Nos tarifs...</h3>
      <div className="container-cartes">
        <CardBasique />
        <CardClassique />
        <CardDecouvrez />
        <CardException />
      </div>
      <div>
        <Link to="/panier" id="valide_panier">
          Voir le panier
        </Link>
      </div>
    </section>
  );
}
