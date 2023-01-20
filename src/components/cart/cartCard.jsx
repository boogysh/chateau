import React from "react";
//import  { useState} from "react";
import imgCorbeille from "../../assets/icons/corbeille.png";
//import {useState,useEffect} from "react";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { ADD } from "../../redux/action";

export default function CartCard(props) {
  return (
    <div className="container_article_panier">
      <img src={props.src} alt={`Carte ${props.title}`} />
      <div className="panier_produit">
        <h3 className="cart_card_title">{props.title}</h3>

        <button className={`btn_decr ${props.dsblDecr}`} onClick={props.decr}>
          -
        </button>

        <span className="card_qty">{props.changeQty}</span>

        <button className="btn_incr" onClick={props.incr}>
          +
        </button>

        <span className="panier_produit_span">{props.changePrice}€</span>
        {/* <span className="panier_produit_span">{price}€</span> */}
      </div>
      <p className="prix_produit">{props.priceUnite} € / unité </p>
      <img
        onClick={props.deleteCard}
        id={`corbeille_${props.title}`}
        src={imgCorbeille}
        alt="image_corbeille"
      />
    </div>
  );
}
