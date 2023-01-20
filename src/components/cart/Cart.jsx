import React from "react";
//import { useState } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Banner from "../home/banner";
import Contact from "../home/contact";
import CartCard from "./cartCard";
// import { DELETE, ADD} from "../../redux/action";
import TotalCart from "./totalCart";
import { v4 as uuidv4 } from "uuid";

export default function Cart() {
  // const { carts, solde } = useSelector((state) => ({ ...state.cartReducer }));
  // const carts = useSelector((state) => state.cartReducer.carts);
  const { carts, solde, codeSolde } = useSelector((state) => state.cartReducer);

  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setData(carts);
  }, [carts]);

  //-------Total Price-----------------------
  const totals = () => {
    let totalPrice = 0;
    data.map((e) => {
      // console.log(totalPrice);
      return (totalPrice = e.price * e.qty + totalPrice);
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    totals();
  }, [totals]);

  //--------------------------------------------
  const dispatch = useDispatch();
  // delete cart
  const delet = (id) => {
    // dispatch(DELETE(id));
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  // incr cart
  const increment = (item) => {
    // dispatch(ADD(item));
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  const decrement = (item) => {
    // dispatch(ADD(item));
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  };

  //-------Set the class "emty" to the empty cart---------
  const cartEmpty = data.length === 0;
  let emty = "";
  data.length === 0 ? (emty = "emty") : (emty = "");

  //-------Solde-----------------------------------------
  // const [isSolde, setSolde]=useState(0)
  const soldePrice = (e) => {
      //dispatch(SOLDE(e))

    const codeValue = e.target.value;
    // console.log(e.target.value)
    codeValue === "CODE5" &&
      dispatch({
        type: "SOLDE",
        payload: (totalPrice * 5) / 100,
      }) &&
      dispatch({
        type: "CODE_SOLDE",
        payload: codeValue,
      });

    codeValue !== "CODE5" &&
      dispatch({
        type: "SOLDE",
        payload: 0,
      }) &&
      dispatch({
        type: "CODE_SOLDE",
        payload: codeValue,
      });
  };

  const btnSolde = () => {
    const updatePayload = (totalPrice * 5) / 100
    console.log(codeSolde)
    codeSolde === "CODE5" &&
      dispatch({
        type: "SOLDE",
        payload: updatePayload,
      });
    // &&
    // dispatch({
    //   type: "SOLDE",
    //   payload: (totalPrice * 5) / 100,
    // })
  };
  const dsblButtons = () => {
    // const incrr = document.querySelectorAll('.btn_incr')
    // incrr.classList.add("dsblSolde");
    // const decrrr = document.getElementsByClassNam("btn_decr");
    //const incr = document.getElementsByClassName("btn_incr");
    // soldeInput.addEventListener("click", function () {
    //   decrrr.classList.add("dsblSolde");
    // });
  };

  return (
    <main id="main_cart">
      <Banner />
      <section id="panier">
        <h3 id="h3">Récapitulatif de mon panier</h3>
        <div className="container_page_panier">
          <div className={`container_panier ${emty}`}>
            {cartEmpty && (
              <h4 className="cart_empty_h3">Votre panier est vide</h4>
            )}
            <h3>solde: {solde} </h3>
            <h3>codeSolde: {codeSolde} </h3>
            {data.map((item) => {
              // Price for one type of cards
              const priceCard = item.qty * item.price;
              //Then quantity=1, disable the button "-" :
              let dsbl = "";
              item.qty === 1 ? (dsbl = "dsbl") : (dsbl = "");
              //Then codeSolde inserted, disable the buttons "-" and "+"

              return (
                <CartCard
                  key={uuidv4()}
                  src={item.img}
                  title={item.title}
                  priceUnite={item.price}
                  changeQty={item.qty}
                  changePrice={priceCard}
                  deleteCard={() => delet(item.id)}
                  incr={() => increment(item)}
                  decr={() => decrement(item)}
                  dsblDecr={dsbl}
                  // dsblSolde={dsblSolde}
                />
              );
            })}
          </div>
          <TotalCart
            finalPrice={totalPrice - solde}
            totalPrice={totalPrice}
            solde={soldePrice}
            soldeTotal={solde}
            btnSolde={btnSolde}
            dsblButtons={dsblButtons}
          />
        </div>
      </section>
      <Contact />
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Cart);
