import React from "react";
//import  { useEffect } from "react";
import imgCorbeille from "../../assets/icons/corbeille.png";
import imgCarteBasique from "../../assets/images_cartes/cart_basique.jpg";
import imgCarteClassique from "../../assets/images_cartes/cart_classique.jpg";
import imgCarteDecouvrez from "../../assets/images_cartes/cart_decouvrez.jpg";
import imgCarteException from "../../assets/images_cartes/cart_exception.jpg";

import { useSelector } from "react-redux";
import { useState } from "react";

export default function CartCard(props) {
  //   useEffect(() => {
  //     const select = document.getElementById(`quantite_${props.title}`);
  //     for (let i = 1; i <= 100; i++) {
  //       select.options[i] = new Option(i);
  //     }
  //   }, []);

  const {
    priceBasique,
    priceClassique,
    priceDecouvrez,
    priceException,
    stateCartBasiqueQuantity,
    stateCartBasiquePrice,
    stateCartClassiqueQuantity,
    stateCartClassiquePrice,
    stateCartDecouvrezQuantity,
    stateCartDecouvrezPrice,
    stateCartExceptionQuantity,
    stateCartExceptionPrice
    
    
  } = useSelector((state) => ({
    ...state.AddCartReducer,
  }));

  const optionBasiqueHandle = (e) => {
    setChangeQuantityBasique(e.target.value);
    setChangePriceBasique(e.target.value * priceBasique);
    // dispatch({
    //   type: "ADDCART_BASIQUE_QUANTITY",
    //   payload: isChangeQuantityBasique,
    // });
    // dispatch({
    //   type: "ADDCART_BASIQUE_PRICE",
    //   payload: isChangePriceBasique,
    // });
  };
  const optionClassiqueHandle = (e) => {
    setChangeQuantityClassique(e.target.value);
    setChangePriceClassique(e.target.value * priceClassique);
  };
  const optionDecouvrezHandle = (e) => {
    setChangeQuantityDecouvrez(e.target.value);
    setChangePriceDecouvrez(e.target.value * priceDecouvrez);
  };
  const optionExceptionHandle = (e) => {
    setChangeQuantityException(e.target.value);
    setChangePriceException(e.target.value * priceException);
  };

  const [isChangeQuantityBasique, setChangeQuantityBasique] = useState(
    stateCartBasiqueQuantity
  );
  const [isChangePriceBasique, setChangePriceBasique] = useState(
    stateCartBasiquePrice
  );
  const [isChangeQuantityClassique, setChangeQuantityClassique] = useState(
    stateCartClassiqueQuantity
  );
  const [isChangePriceClassique, setChangePriceClassique] = useState(
    stateCartClassiquePrice
  );
  const [isChangeQuantityDecouvrez, setChangeQuantityDecouvrez] = useState(
    stateCartDecouvrezQuantity
  );
  const [isChangePriceDecouvrez, setChangePriceDecouvrez] = useState(
    stateCartDecouvrezPrice
  );
  const [isChangeQuantityException, setChangeQuantityException] = useState(
    stateCartExceptionQuantity
  );
  const [isChangePriceException, setChangePriceException] = useState(
    stateCartExceptionPrice
  );
  

  const generateOptions = () => {
    const select = document.getElementById(`quantite_${props.title}`);
    for (let i = 1; i <= 100; i++) {
      select.options[i] = new Option(i);
    }
  };

  const srcBasique = props.title === "Basique" ? imgCarteBasique : null;
  const srcClassique = props.title === "Classique" ? imgCarteClassique : null;
  const srcDecouvrez = props.title === "Decouvrez" ? imgCarteDecouvrez : null;
  const srcException = props.title === "Exception" ? imgCarteException : null;

  const $isChangeQuantityBasique =
    props.title === "Basique" ? isChangeQuantityBasique : null;
  const $isChangeQuantityClassique =
    props.title === "Classique" ? isChangeQuantityClassique : null;
    const $isChangeQuantityDecouvrez =
    props.title === "Decouvrez" ? isChangeQuantityDecouvrez : null;
    const $isChangeQuantityException =
    props.title === "Exception" ? isChangeQuantityException : null;
  
    const $isChangePriceBasique =
    props.title === "Basique" ? isChangePriceBasique : null;
  const $isChangePriceClassique =
    props.title === "Classique" ? isChangePriceClassique : null;
    const $isChangePriceDecouvrez =
    props.title === "Decouvrez" ? isChangePriceDecouvrez : null;
    const $isChangePriceException =
    props.title === "Exception" ? isChangePriceException : null;

  const $optionBasiqueHandle =
    props.title === "Basique" ? optionBasiqueHandle : null;
  const $optionClassiqueHandle =
    props.title === "Classique" ? optionClassiqueHandle : null;
    const $optionDecouvrezHandle =
    props.title === "Decouvrez" ? optionDecouvrezHandle : null;
    const $optionExceptionHandle =
    props.title === "Exception" ? optionExceptionHandle : null;

  return (
    <div
      id={props.title}
      className="container_article_panier"
      key={props.title}
    >
      <img src={srcBasique || srcClassique || srcDecouvrez || srcException} alt={`Carte ${props.title}`} />
      <div className="panier_produit">
        <h3 className="cart_card_title">{props.title}</h3>
        <select
          onFocus={generateOptions}
          onChange={$optionBasiqueHandle || $optionClassiqueHandle || $optionDecouvrezHandle || $optionExceptionHandle}
          id={`quantite_${props.title}`}
        >
          <option
            value={$isChangeQuantityBasique || $isChangeQuantityClassique || $isChangeQuantityDecouvrez || $isChangeQuantityException}
            selected={$isChangeQuantityBasique || $isChangeQuantityClassique || $isChangeQuantityDecouvrez || $isChangeQuantityException}
          >
            {$isChangeQuantityBasique || $isChangeQuantityClassique || $isChangeQuantityDecouvrez || $isChangeQuantityException}
          </option>
        </select>

        <span>{$isChangePriceBasique || $isChangePriceClassique || $isChangePriceDecouvrez || $isChangePriceException}€</span>
      </div>
      <p className="prix_produit">{props.priceUnity} € / unité </p>
      <img
        id={`corbeille_${props.title}`}
        src={imgCorbeille}
        alt="image_corbeille"
      />
    </div>
  );
}
