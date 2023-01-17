import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CardDecouvrez() {
  const {priceDecouvrez}=useSelector((state)=> ({
    ...state.AddCartReducer,
  }))
  
  const [isQuantityDecouvrez, setQuantityDecouvrez] = useState(0);
  const [isPriceDecouvrez, setIsPriceDecouvrez] = useState(0);

  const handleInput = (e) => {
    if (e.target.value >= 0) {
      setQuantityDecouvrez(e.target.value);
      setIsPriceDecouvrez(e.target.value * priceDecouvrez);
    }
  };
  useEffect(() => {
    const select = document.getElementById("select_card_decouvrez");
    for (let i = 0; i <= 100; i++) {
      select.options[i] = new Option(i);
    }
  }, []);

  const dispatch = useDispatch();

  const addToCartFuncDecouvrez = () => {
    dispatch({
      type: "ADDCART_DECOUVREZ_QUANTITY",
      payload: isQuantityDecouvrez
    });
    dispatch({
        type: "ADDCART_DECOUVREZ_PRICE",
      payload: isPriceDecouvrez
    })
  };


  return (
    <div className="cartes" id="Decouvrez">
    <h4>Découvrez</h4>
    <span className="price">{priceDecouvrez}€</span>
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
          ✔️
        </span>
        <p> Visite de la ville</p>
      </li>
      <li>
        <span role="img" aria-label="x">
          ✔️
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
          id="select_card_decouvrez"
          onChange={handleInput}
          value={isQuantityDecouvrez}
        ></select>
      {/* <input
        className="cartes_input"
        type="number"
        value={cartDataDecouvrez}
        onInput={(e) =>
          e.target.value >= 0 ? setCartDataDecouvrez(e.target.value) : 0
        }
      /> */}
    </div>
    <div className="quantity_price">
      <h5 className="h5_quantity">Prix :</h5>
      <div className="price_card">{isPriceDecouvrez}€</div>
    </div>
    <button onClick={addToCartFuncDecouvrez}>Ajouter au panier</button>
  </div>
  )
}
