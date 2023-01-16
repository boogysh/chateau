import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CardException() {
  const { priceException } = useSelector((state) => ({
    ...state.AddCartReducer,
  }));

  const [isQuantityException, setQuantityException] = useState(0);
  const [isPriceException, setIsPriceException] = useState(0);

  const handleInput = (e) => {
    if (e.target.value >= 0) {
      setQuantityException(e.target.value);
      setIsPriceException(e.target.value * priceException);
    }
  };
  useEffect(() => {
    const select = document.getElementById("select_card_exception");
    for (let i = 0; i <= 100; i++) {
      select.options[i] = new Option(i);
    }
  }, []);

  const dispatch = useDispatch();

  const addToCartFuncException = () => {
    dispatch({
      type: "ADDCART_EXCEPTION_QUANTITY",
      payload: isQuantityException,
    });
    dispatch({
      type: "ADDCART_EXCEPTION_PRICE",
      payload: isPriceException,
    });
  };

  return (
    <div className="cartes" id="Exception">
      <h4>Exception</h4>
      <span className="price">{priceException}€</span>
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
            ✔️
          </span>
          <p>Visite sur plusieurs jours</p>
        </li>
        <li>
          <span role="img" aria-label="x">
            ✔️
          </span>
          <p>Accès à des lieux interdits au public</p>
        </li>
      </ul>

      <div className="quantity">
        <h5 className="h5_quantity">Quantité :</h5>
        <select
          id="select_card_exception"
          onChange={handleInput}
          value={isQuantityException}
        ></select>
        {/* <input
        className="cartes_input"
        type="number"
        value={cartDataException}
        onInput={(e) =>
          e.target.value >= 0 ? setCartDataException(e.target.value) : 0
        }
      /> */}
      </div>
      <div className="quantity_price">
        <h5 className="h5_quantity">Prix :</h5>
        <div className="price_card">{isPriceException}€</div>
      </div>
      <button onClick={addToCartFuncException}>Ajouter au panier</button>
    </div>
  );
}
