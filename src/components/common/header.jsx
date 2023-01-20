import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

import iconCart from "../../assets/icons/shopping-bag.png";
import "../../style/style.css";

export default function Header() {
  const dataCart = useSelector((state) => state.cartReducer.carts);

  const [quantity, setQuantity] = useState(0);

  const totals = () => {
    let quantity = 0;
    dataCart.map((e) => {
      return (quantity =(e.qty) + quantity);
    });
    setQuantity(quantity);
  };

  useEffect(() => {
    totals();
  }, [totals]);
  // const dispatch = useDispatch();

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
            <HashLink
              smooth
              to="/panier#panier"
              className="nav_item shopping-cart-link"
            >
              <div className="shopping-cart">
                <img
                  className="shopping_cart_img"
                  src={iconCart}
                  alt="panier"
                />
                <h5 className="shopping-cart_h5">
                 {quantity}
                </h5>
              </div>
              {/* <HashLink className="nav_item_panier"></HashLink> */}
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);
