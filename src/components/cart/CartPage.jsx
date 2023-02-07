import React, { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import tickets from "../../assets/icons/tickets.png";
import CartCard from "./cartCard";
// import { DELETE, ADD} from "../../redux/action";
import { SOLDE_AMOUNT } from "../../redux/action";
import AsideCart from "./asideCart";
import { v4 as uuidv4 } from "uuid";
import OrderList from "../order/orderList";
import Banner from "../home/banner";

export default function Cart() {
  const { carts, solde, codeSolde, inputCodeSolde, findEmail } = useSelector(
    (state) => state.cartReducer
  );
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setData(carts);
  }, [carts]);

  //------- Price without solde----------------------
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

  //-------CART OPERATIONS--------------------------------
  const dispatch = useDispatch();
  // delete one card
  const delet = (id) => {
    // dispatch(DELETE(id));
    dispatch({
      type: "REMOVE_CARD",
      payload: id,
    });
  };
  // incr cart
  const increment = (item) => {
    // dispatch(ADD(item));
    if (item.qty <= 99) {
      dispatch({
        type: "ADD_ITEM",
        payload: item,
      });
    }
  };
  const decrement = (item) => {
    // dispatch(ADD(item));
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  };
  //-------------------------------------------------------
  //Set the class "emty" to the empty cart
  const cartEmpty = data.length === 0;
  let emty = "";
  data.length === 0 ? (emty = "emty") : (emty = "");

  //-------Solde-----------------
  const soldePrice = (e) => {
    dispatch({
      type: "INPUT_CODE_SOLDE",
      payload: e.target.value,
    });
    if (codeSolde === e.target.value) {
      dispatch(SOLDE_AMOUNT(totalPrice, 5, e)); //5percents
    } else {
      dispatch(SOLDE_AMOUNT(totalPrice, 0)); //expected payload: 0
      //   type: "SOLDE",
      //   payload: 0,
      // });
    }
  };
  const btnSolde = () => {
    const updatePayload = (totalPrice * 5) / 100;
    if (codeSolde === inputCodeSolde) {
      dispatch({
        type: "SOLDE",
        payload: updatePayload,
      });
    } else {
      dispatch({
        type: "SOLDE",
        payload: 0,
      });
    }
  };
  //-----///  PRICE & SOLDE = total price///---------
  useEffect(() => {
    const orderPrice = totalPrice - solde;
    dispatch({
      type: "PRICE",
      payload: orderPrice,
    });
  }, [totalPrice, solde]);
  //--------------------------------------

  //----------------------------------
  const createOrderDetails = () => {
    dispatch({
      type: "ORDER_DETAILS",
      payload: carts,
    });
  };
  // const [isClosed, setIsClosed] = useState("hidden");
  // const closeOrderList = () => {
  //   setIsClosed(isClosed === "hidden" ? "" : "hidden");
  // };
  // const openOrderList = () => {
  //   setIsClosed("");
  // };
  const [isClosed, setIsClosed] = useState(false);
  const closeOrderList = () => {
    setIsClosed(!isClosed);
  };
  const openOrderList = () => {
    setIsClosed(true);
  };

  return (
    <main id="main_cart">
      <Banner />
      <section id="panier">
        <h3 id="h3_cart">Récapitulatif de mon panier</h3>
        <div className="container_page_panier">
          <div className="container_panier_and_aside">
            <div className={`container_panier ${emty}`}>
              {cartEmpty && (
                <div className="emty_content">
                  <h4 className="cart_empty_h3">Votre panier est vide</h4>

                  <HashLink smooth to="/#tarifs" className="cart_nav_item">
                    {/* Tarifs */}
                    <div className="tickets">
                      <img
                        className="tickets_img"
                        src={tickets}
                        alt="tickets"
                      />
                    </div>
                  </HashLink>
                  <h4 className="cart_empty_h3">Voir les tarifs</h4>
                </div>
              )}
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
                  />
                );
              })}
            </div>
            <AsideCart
              finalPrice={totalPrice - solde}
              totalPrice={totalPrice}
              solde={soldePrice}
              soldeTotal={solde}
              btnSolde={btnSolde}
              createOrderDetails={createOrderDetails}
              openOrderList={openOrderList}
            />
          </div>
          <OrderList
            email={findEmail}
            closeOrderList={closeOrderList}
            isClosed={isClosed}
          />
        </div>

        {console.log("findEmail:", findEmail)}
      </section>
      {/* <Contact /> */}
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Cart);
