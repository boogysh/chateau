import React from "react";
import imgCorbeille from "../../assets/icons/corbeille.png";

export default function CartCard(props) {
  const generateOptions = () => {
    const select = document.getElementById(`quantite_${props.title}`);
    for (let i = 1; i <= 100; i++) {
      select.options[i] = new Option(i);
    }
  };

  return props.isChangeQuantity > 0 ? (
    <div
      id={props.title}
      className="container_article_panier"
      key={props.title}
    >
      <img src={props.src} alt={`Carte ${props.title}`} />
      <div className="panier_produit">
        <h3 className="cart_card_title">{props.title}</h3>
        <select
          onFocus={generateOptions}
          onChange={props.optionHandle}
          id={`quantite_${props.title}`}
          className='optionHandle'
          
        >
          <option
            value={props.isChangeQuantity}
            selected={props.isChangeQuantity}
          >
            {props.isChangeQuantity}
          </option>
        </select>

        <span>{props.isChangePrice}€</span>
      </div>
      <p className="prix_produit">{props.price} € / unité </p>
      <img
        onClick={props.deleteCard}
        id={`corbeille_${props.title}`}
        src={imgCorbeille}
        alt="image_corbeille"
      />
    </div>
  ) : null;
}
