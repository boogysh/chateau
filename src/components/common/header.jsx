import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import iconCart from "../../assets/icons/shopping-bag.png";
import "../../style/style.css";

export default function Header() {
  return (
    <div className="container_header">
      <nav id="nav">
        <ul>
          <li className="menu">
            <HashLink smooth to="/#accueil" className="nav_item">
              Accueil
            </HashLink>
            <HashLink smooth to="/#appartements" className="nav_item">
              Les chambres
            </HashLink>
            <HashLink smooth to="/#parc" className="nav_item">
              Le parc
            </HashLink>
            <HashLink smooth to="/#tarifs" className="nav_item">
              Tarifs
            </HashLink>
            <HashLink smooth to="/#horaires" className="nav_item">
              Horaires
            </HashLink>
            <HashLink smooth to="/#contact" className="nav_item">
              Contact
            </HashLink>
            <Link to="/panier" className="nav_item shopping-cart-link">
              <HashLink smooth to="/panier#panier" className="nav_item_panier">
              <div className="shopping-cart">
                <img className="shopping_cart_img" src={iconCart} alt="panier" />
                <h5 className="shopping-cart_h5">MON PANIER</h5>
              </div>
              </HashLink>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
