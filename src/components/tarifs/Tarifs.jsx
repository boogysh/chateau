import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardBasique from "../cards/CardBasique";
import CardClassique from "../cards/CardClassique";

 import CardDecouvrez from "../cards/CardDecouvrez";
 import CardException from "../cards/CardException";

export default function Tarifs() {
  const [cartData, setCartData] = useState(0);

  //const count = useSelector((state) => state.cart);
  const { count, cart } = useSelector((state) => ({
    ...state.AddCartReducer,
    ...state.CounterReducer,
  }));

  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({ type: "INCR" });
  };
  const decrFunc = () => {
    dispatch({ type: "DECR" });
  };

  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  return (
    <section className="tarifs" id="tarifs">
      <div>
        <h1>Vos données: {count}</h1>
        <button onClick={decrFunc}>-1</button>
        <button onClick={incrFunc}>+1</button>

        <h1>Votre panier: {cart}</h1>
        <input
          type="number"
          value={cartData}
          onInput={(e) => setCartData(e.target.value)}
        />
        <button onClick={addToCartFunc}>Ajoter au panier</button>
      </div>
      <h3>Nos tarifs...</h3>
      <div className="container-cartes">
        <CardBasique />
        <CardClassique />
        <CardDecouvrez />
        <CardException />
      </div>
      <div>
        <Link to="/panier" id="valide_panier">
          Voir le panier
        </Link>
      </div>
    </section>
  );
}
