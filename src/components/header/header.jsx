import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import iconCart from "../../assets/icons/shopping-cart.png";
import "../../style.css";

export default function Header() {
  return (
    <div className="container_header">
      <nav id="nav">
        <ul>
          <li className="menu">
            <HashLink smooth to="/#accueil">
              Accueil
            </HashLink>
            <HashLink smooth to="/#appartements">
              Les chambres
            </HashLink>
            <HashLink smooth to="/#parc">
              Le parc
            </HashLink>
            <HashLink smooth to="/#tarifs">
              Tarifs
            </HashLink>
            <HashLink smooth to="/#horaires">
              Horaires
            </HashLink>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
            <Link to="/panier" className="shopping-cart-link">
              <img className="shopping-cart" src={iconCart} alt="panier" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
