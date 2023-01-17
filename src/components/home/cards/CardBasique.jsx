import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CardBasique() {
  const {priceBasique}=useSelector((state)=> ({
    ...state.AddCartReducer,
  }))
  const [isQuantityBasique, setQuantityBasique] = useState(0);
  const [isPriceBasique, setIsPriceBasique] = useState(0);

  const handleInput = (e) => {
    if (e.target.value >= 0) {
      setQuantityBasique(e.target.value);
      setIsPriceBasique(e.target.value * priceBasique);
    }
  };
  useEffect(() => {
    const select = document.getElementById("select_card_basique");
    for (let i = 0; i <= 100; i++) {
      select.options[i] = new Option(i);
    }
  }, []);

  const dispatch = useDispatch();

  const addToCartFuncBasique = () => {
    dispatch({
      type: "ADDCART_BASIQUE_QUANTITY",
      payload: isQuantityBasique
    });
    dispatch({
        type: "ADDCART_BASIQUE_PRICE",
      payload: isPriceBasique
    })
  };

  return (
    <div className="cartes" id="Basique">
      <h4>Basique</h4>
      <span className="price">{priceBasique}€</span>
      <ul>
        <li>
          <span role="img" aria-label="v">
            ✔️
          </span>
          <p> Visite du château</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ❌
          </span>
          <p> Spectacle au château</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ❌
          </span>
          <p> Visite de la ville</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ❌
          </span>
          <p> Restaurant tipique d'exeption</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ❌
          </span>
          <p>Visite sur plusieurs jours</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ❌
          </span>
          <p>Accès à des lieux interdits au public</p>
        </li>
      </ul>
      <div className="quantity">
        <h5 className="h5_quantity">Quantité :</h5>
        <select
          id="select_card_basique"
          onChange={handleInput}
          value={isQuantityBasique}
        ></select>

        {/* <input
          className="cartes_input"
          type="number"
          value={isQuantityBasique}
          onInput={handleInput}
        /> */}
      </div>
      <div className="quantity_price">
        <h5 className="h5_quantity">Prix :</h5>
        <div className="price_card">{isPriceBasique}€</div>
      </div>

      <button onClick={addToCartFuncBasique}>Ajouter au panier</button>
    </div>
  );
}
