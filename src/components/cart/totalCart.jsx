import React from "react";
import imgInfo from "../../assets/icons/info.png";
import imgCB from "../../assets/cartes_bancaires/cb.jpg";
import imgCbMaster from "../../assets/cartes_bancaires/master.jpg";
import imgCbVisa from "../../assets/cartes_bancaires/visa.jpg";
import imgCbPayPal from "../../assets/cartes_bancaires/paypal.jpg";
import imgCbAmericanExpress from "../../assets/cartes_bancaires/american_express.jpg";
import { useSelector, useDispatch } from "react-redux";



export default function TotalCart() {
  const dispatch = useDispatch();

  const {
    // stateTotal,
    stateCartBasiquePrice,
    stateCartClassiquePrice,
    stateCartDecouvrezPrice,
    stateCartExceptionPrice,
    stateSolde,
  } = useSelector((state) => ({
    ...state.AddCartReducer,
  }));
  const total =
    stateCartBasiquePrice +
    stateCartClassiquePrice +
    stateCartDecouvrezPrice +
    stateCartExceptionPrice -
    stateSolde;
  // dispatch({
  //   type: "TOTAL",
  //   payload: total,
  // });

  //else total are negatif with code promo
  //const totalPositif = total > 0 ? total : 0;

  const remise = (e) => {
    // if (stateSolde !== 0) {
    //   return (e.target.value = "");
    // }
    e.target.value === "SOLDE5" &&
      dispatch({
        type: "SOLDE",
        payload: (total * 5) / 100,
      });
    e.target.value === "SOLDE10" &&
      dispatch({
        type: "SOLDE",
        payload: (total * 10) / 100,
      });

    e.target.value !== "SOLDE5" &&
      e.target.value !== "SOLDE10" &&
      dispatch({
        type: "SOLDE",
        payload: 0,
      });
  };

  return (
    <aside id="total">
      <h4>Total</h4>
      <hr />
      <div className="sous_total">
        <h5>Sous-total</h5>
        {/* <p>{totalPositif} €/t.t.c.</p> */}
        <p>{total} €/t.t.c.</p>
      </div>
      <div className="remise">
        <h5>Remise</h5>
        <p>
          <img src={imgInfo} alt="information" />
        </p>
      </div>
      <div className="bon_reduction">
        <form method="POST">
          <input
            // onChange={remise}
            onChange={remise}
            className="remise_input"
            type="text"
            name="remise"
            id="remise"
            placeholder="Introduiser un code de reduction"
          />
        </form>
        <span>☆</span>
      </div>
      <button className="payment">PAIEMENT</button>
      <h5>NOUS ACCEPTON:</h5>
      <div className="cartes_payments">
        <img src={imgCB} alt="carte_cb" />
        <img src={imgCbMaster} alt="mastercard" />
        <img src={imgCbVisa} alt="visa" />
        <img src={imgCbPayPal} alt="pay_pal" />
        <img src={imgCbAmericanExpress} alt="american_express" />
      </div>
      <div className="info_promo">
        <span>☆</span> Vous avez un code promotionnel? Ajoutez-le avant
        d'acceder au paiement.{" "}
      </div>
    </aside>
  );
}
