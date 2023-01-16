import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import CartCard from "../components/cards/CartCard";
import Error500 from "../components/errors/Error500";
import { UseFetch } from "../hooks/useFetch";
import Loader from "../components/loader/loader";
import TotalCart from "../components/totalCart/TotalCart";

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
  } = useSelector((state) => ({
    ...state.AddCartReducer,
  }));

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

  const dispatch = useDispatch();

  const optionBasiqueHandle = (e) => {
    setChangeQuantityBasique(e.target.value);
    setChangePriceBasique(e.target.value * priceBasique);
    dispatch({
      type: "ADDCART_BASIQUE_QUANTITY",
      payload: isChangeQuantityBasique,
    });
    dispatch({
      type: "ADDCART_BASIQUE_PRICE",
      payload: isChangePriceBasique,
    });
  };

  const optionClassiqueHandle = (e) => {
    setChangeQuantityClassique(e.target.value);
    setChangePriceClassique(e.target.value * priceClassique);
    dispatch({
      type: "ADDCART_CLASSIQUE_QUANTITY",
      payload: isChangeQuantityClassique,
    });
    dispatch({
      type: "ADDCART_CLASSIQUE_PRICE",
      payload: isChangePriceClassique,
    });
  };
  const optionDecouvrezHandle = (e) => {
    setChangeQuantityDecouvrez(e.target.value);
    setChangePriceDecouvrez(e.target.value * priceDecouvrez);
    dispatch({
      type: "ADDCART_DECOUVREZ_QUANTITY",
      payload: isChangeQuantityDecouvrez,
    });
    dispatch({
      type: "ADDCART_DECOUVREZ_PRICE",
      payload: isChangePriceDecouvrez,
    });
  };
  const optionExceptionHandle = (e) => {
    setChangeQuantityException(e.target.value);
    setChangePriceException(e.target.value * priceException);
    dispatch({
      type: "ADDCART_EXCEPTION_QUANTITY",
      payload: isChangeQuantityException,
    });
    dispatch({
      type: "ADDCART_EXCEPTION_PRICE",
      payload: isChangePriceException,
    });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <main id="main_cart">
      <Banner />
      <section id="panier">
        <h3 id="h3">Récapitulatif de mon panier</h3>
        <div className="container_page_panier">
          <div className="container_panier">
            {data.map((card) => {
              const { title, img, price } = card;

              const $isChangeQuantityBasique =
                title === "Basique" && isChangeQuantityBasique
                // && dispatch({
                //   type: "ADDCART_BASIQUE_QUANTITY",
                //   payload: isChangeQuantityBasique,
                // }) 
                
              const $isChangeQuantityClassique =
                title === "Classique" && isChangeQuantityClassique;
              const $isChangeQuantityDecouvrez =
                title === "Decouvrez" && isChangeQuantityDecouvrez;
              const $isChangeQuantityException =
                title === "Exception" && isChangeQuantityException;

              const $isChangePriceBasique =
                title === "Basique" && isChangePriceBasique;
                // dispatch({
                //   type: "ADDCART_BASIQUE_PRICE",
                //   payload: isChangePriceBasique,
                // });
              const $isChangePriceClassique =
                title === "Classique" && isChangePriceClassique;
              const $isChangePriceDecouvrez =
                title === "Decouvrez" && isChangePriceDecouvrez;
              const $isChangePriceException =
                title === "Exception" && isChangePriceException;

              const $optionBasiqueHandle =
                title === "Basique" && optionBasiqueHandle;
              const $optionClassiqueHandle =
                title === "Classique" && optionClassiqueHandle;
              const $optionDecouvrezHandle =
                title === "Decouvrez" && optionDecouvrezHandle;
              const $optionExceptionHandle =
                title === "Exception" && optionExceptionHandle;

              const deleteCard = () => {
                title === "Basique" &&
                  setChangeQuantityBasique(0) 
                  // &&
                  // dispatch({
                  //   type: "ADDCART_BASIQUE_QUANTITY",
                  //   payload: isChangeQuantityBasique,
                  // }) &&
                  // dispatch({
                  //   type: "ADDCART_BASIQUE_PRICE",
                  //   payload: isChangePriceBasique,
                  // });

                title === "Classique" &&
                  setChangeQuantityClassique(0) &&
                  dispatch({
                    type: "ADDCART_CLASSIQUE_QUANTITY",
                    payload: isChangeQuantityClassique,
                  }) &&
                  dispatch({
                    type: "ADDCART_CLASSIQUE_PRICE",
                    payload: isChangePriceClassique,
                  });

                title === "Decouvrez" &&
                  setChangeQuantityDecouvrez(0) &&
                  dispatch({
                    type: "ADDCART_DECOUVREZ_QUANTITY",
                    payload: isChangeQuantityDecouvrez,
                  }) &&
                  dispatch({
                    type: "ADDCART_DECOUVREZ_PRICE",
                    payload: isChangePriceDecouvrez,
                  });

                title === "Exception" &&
                  setChangeQuantityException(0) &&
                  dispatch({
                    type: "ADDCART_EXCEPTION_QUANTITY",
                    payload: isChangeQuantityException,
                  }) &&
                  dispatch({
                    type: "ADDCART_EXCEPTION_PRICE",
                    payload: isChangePriceException,
                  });
              };
              return (
                <CartCard
                  title={title}
                  src={img}
                  price={price}
                  isChangeQuantity={
                    $isChangeQuantityBasique ||
                    $isChangeQuantityClassique ||
                    $isChangeQuantityDecouvrez ||
                    $isChangeQuantityException
                  }
                  isChangePrice={
                    $isChangePriceBasique ||
                    $isChangePriceClassique ||
                    $isChangePriceDecouvrez ||
                    $isChangePriceException
                  }
                  optionHandle={
                    $optionBasiqueHandle ||
                    $optionClassiqueHandle ||
                    $optionDecouvrezHandle ||
                    $optionExceptionHandle
                  }
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
