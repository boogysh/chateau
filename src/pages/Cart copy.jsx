import React from "react";
//import  { useState } from "react";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

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
  );
  if (error) return <Error500 />;
  //const count = useSelector((state) => state.cart);

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
              const { title } = card;
              return <CartCard title={title} />;
            })}
          </div>
          <TotalCart />
        </div>
      </section>
      <Contact />
    </main>
  );
}
