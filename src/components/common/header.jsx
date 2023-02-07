import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import HeaderBurger from "../../components/common/header-burger/HeaderBurger";

//import iconCart from "../../assets/icons/shopping-bag.png";
import tickets from "../../assets/icons/tickets.png";

import "../../style/style.css";

export default function Header() {
  const dataCart = useSelector((state) => state.cartReducer.carts);

  const [quantity, setQuantity] = useState(0);

  const totals = () => {
    let quantity = 0;
    dataCart.map((e) => {
      return (quantity = e.qty + quantity);
    });
    setQuantity(quantity);
  };

  useEffect(() => {
    totals();
  }, [totals]);

  const [isOpen, setIsOpen] = useState(false);
  //const [isAnimated, setAnimated] = useState("");
  const [isAnimated, setAnimated] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    //setAnimated(isAnimated === "menu_anim" ? "" : "menu_anim");
    setAnimated(!isAnimated);
  };
  //-------------HIDE-NAVBAR-ON-SCROLL-----------------------------
  document.addEventListener("DOMContentLoaded", function () {
    const el_autohide = document.querySelector(".autohide");
    // add padding-top to bady (if necessary)
    const navbar_height = document.querySelector("#nav").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";

    if (el_autohide) {
      let last_scroll_top = 0;
      window.addEventListener("scroll", function () {
        let scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove("scrolled-down");
          el_autohide.classList.add("scrolled-up");
        } else {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
      // window.addEventListener
    }
    // if
  });

  return (
    <div className="container_header">
      <nav id="nav" className="autohide">
        <HeaderBurger toggle={toggleNav} animation={isAnimated} />

        <div className={isOpen ? "menu active " : "menu"}>
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
              <img className="shopping_cart_img" src={tickets} alt="panier" />
              <h5 className="shopping-cart_h5">{quantity}</h5>
            </div>
          </HashLink>
        </div>
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
