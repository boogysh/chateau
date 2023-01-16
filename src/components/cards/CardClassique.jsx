import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CardClassique() {
  const { priceClassique } = useSelector((state) => ({
    ...state.AddCartReducer,
  }));
  const [isQuantityClassique, setQuantityClassique] = useState(0);
  const [isPriceClassique, setIsPriceClassique] = useState(0);
  const handleInput = (e) => {
    if (e.target.value >= 0) {
      setQuantityClassique(e.target.value);
      setIsPriceClassique(e.target.value * priceClassique);
    }
  };
  useEffect(() => {
    const select = document.getElementById("select_card_classique");
    for (let i = 0; i <= 100; i++) {
      select.options[i] = new Option(i);
    }
  }, []);

  const dispatch = useDispatch();

  const addToCartFuncClassique = () => {
    dispatch({
      type: "ADDCART_CLASSIQUE_QUANTITY",
      payload: isQuantityClassique,
    });
    dispatch({
      type: "ADDCART_CLASSIQUE_PRICE",
      payload: isPriceClassique,
    });
  };
  return (
    <div className="cartes" id="Classique">
      <h4>Classique</h4>
      <span className="price">{priceClassique}€</span>
      <ul>
        <li>
          <span role="img" aria-label="v">
            ✔️
          </span>
          <p> Visite du château</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ✔️
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
          id="select_card_classique"
          onChange={handleInput}
          value={isQuantityClassique}
        ></select>
        {/* <input
              className="cartes_input"
              type="number"
              value={isQuantityClassique}
              onInput={handleInput}
            /> */}
      </div>

      <div className="quantity_price">
        <h5 className="h5_quantity">Prix :</h5>
        <div className="price_card">{isPriceClassique}€</div>
      </div>
      <button onClick={addToCartFuncClassique}>Ajouter au panier</button>
    </div>
  );
}
