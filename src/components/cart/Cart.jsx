import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Banner from "../home/banner";
import Contact from "../home/contact";
import CartCard from "./cartCard";
import Error500 from "../errors/Error500";
import { UseFetch } from "../../hooks/useFetch";
import Loader from "../common/loader/loader";
import TotalCart from "./totalCart";

export default function Cart() {
  const { data, isLoading, error } = UseFetch(
    `https://boogysh.github.io/chateau-api/dataCartCard.json`
    // `dataCartCard.json`
  );
  if (error) return <Error500 />;

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
    stateCartExceptionPrice,
    stateSolde,
    stateSoldeText,
  } = useSelector((state) => ({
    ...state.AddCartReducer,
  }));

  const dispatch = useDispatch();

  return isLoading ? (
    <Loader />
  ) : (
    <main id="main_cart">
      <Banner />
      <section id="panier">
        <h3 id="h3">Récapitulatif de mon panier</h3>
        <div className="container_page_panier">
          <div className="container_panier">
            <h3>
              Quantity Basique: {stateCartBasiqueQuantity}{" "}
              {stateCartBasiquePrice},
            </h3>
            <h3>
              Quantity Classique: {stateCartClassiqueQuantity}{" "}
              {stateCartClassiquePrice}
            </h3>
            <h3>
              Quantity Decouvrez: {stateCartDecouvrezQuantity}{" "}
              {stateCartDecouvrezPrice}
            </h3>
            <h3>
              Quantity Exception: {stateCartExceptionQuantity}{" "}
              {stateCartExceptionPrice}
            </h3>
            <h3>SOLDE: {stateSolde}</h3>
            <h3>SOLDEtext: {stateSoldeText}</h3>
            {data.map((card) => {
              const { title, img, price } = card;

              const $isChangeQuantity =
                (title === "Basique" && stateCartBasiqueQuantity) ||
                (title === "Classique" && stateCartClassiqueQuantity) ||
                (title === "Decouvrez" && stateCartDecouvrezQuantity) ||
                (title === "Exception" && stateCartExceptionQuantity);

              const $isChangePrice =
                (title === "Basique" && stateCartBasiquePrice) ||
                (title === "Classique" && stateCartClassiquePrice) ||
                (title === "Decouvrez" && stateCartDecouvrezPrice) ||
                (title === "Exception" && stateCartExceptionPrice);

              const optionHandle = (e) => {
                (title === "Basique" &&
                  dispatch({
                    type: "ADDCART_BASIQUE_QUANTITY",
                    payload: e.target.value,
                  }) &&
                  dispatch({
                    type: "ADDCART_BASIQUE_PRICE",
                    payload: e.target.value * priceBasique,
                  })) ||
                  (title === "Classique" &&
                    dispatch({
                      type: "ADDCART_CLASSIQUE_QUANTITY",
                      payload: e.target.value,
                    }) &&
                    dispatch({
                      type: "ADDCART_CLASSIQUE_PRICE",
                      payload: e.target.value * priceClassique,
                    })) ||
                  (title === "Decouvrez" &&
                    dispatch({
                      type: "ADDCART_DECOUVREZ_QUANTITY",
                      payload: e.target.value,
                    }) &&
                    dispatch({
                      type: "ADDCART_DECOUVREZ_PRICE",
                      payload: e.target.value * priceDecouvrez,
                    })) ||
                  (title === "Exception" &&
                    dispatch({
                      type: "ADDCART_EXCEPTION_QUANTITY",
                      payload: e.target.value,
                    }) &&
                    dispatch({
                      type: "ADDCART_EXCEPTION_PRICE",
                      payload: e.target.value * priceException,
                    }));
              };

              const deleteCard = () => {
                (title === "Basique" &&
                  dispatch({
                    type: "ADDCART_BASIQUE_QUANTITY",
                    payload: 0,
                  }) &&
                  dispatch({
                    type: "ADDCART_BASIQUE_PRICE",
                    payload: 0,
                  }) &&
                  dispatch({
                    type: "SOLDE",
                    payload: 0,
                  })) ||
                  (title === "Classique" &&
                    dispatch({
                      type: "ADDCART_CLASSIQUE_QUANTITY",
                      payload: 0,
                    }) &&
                    dispatch({
                      type: "ADDCART_CLASSIQUE_PRICE",
                      payload: 0,
                    }) &&
                    dispatch({
                      type: "SOLDE",
                      payload: 0,
                    })) ||
                  (title === "Decouvrez" &&
                    dispatch({
                      type: "ADDCART_DECOUVREZ_QUANTITY",
                      payload: 0,
                    }) &&
                    dispatch({
                      type: "ADDCART_DECOUVREZ_PRICE",
                      payload: 0,
                    }) &&
                    dispatch({
                      type: "SOLDE",
                      payload: 0,
                    })) ||
                  (title === "Exception" &&
                    dispatch({
                      type: "ADDCART_EXCEPTION_QUANTITY",
                      payload: 0,
                    }) &&
                    dispatch({
                      type: "ADDCART_EXCEPTION_PRICE",
                      payload: 0,
                    }) &&
                    dispatch({
                      type: "SOLDE",
                      payload: 0,
                    }));
              };
              return (
                <CartCard
                  title={title}
                  src={img}
                  price={price}
                  isChangeQuantity={$isChangeQuantity}
                  isChangePrice={$isChangePrice}
                  optionHandle={optionHandle}
                  deleteCard={deleteCard}
                />
              );
            })}
          </div>

          <TotalCart />
        </div>
      </section>
      <Contact />
    </main>
  );
}
