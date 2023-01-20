import React from "react";
//import imgInfo from "../../assets/icons/info.png";
import imgCB from "../../assets/cartes_bancaires/cb.jpg";
import imgCbMaster from "../../assets/cartes_bancaires/master.jpg";
import imgCbVisa from "../../assets/cartes_bancaires/visa.jpg";
import imgCbPayPal from "../../assets/cartes_bancaires/paypal.jpg";
import imgCbAmericanExpress from "../../assets/cartes_bancaires/american_express.jpg";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

export default function TotalCart(props) {
  // const carts = useSelector((state) => state.cartReducer.carts);
  // const { carts } = useSelector((state) => ({ ...state.cartReducer }));

  

  return (
    <aside id="total">
      <div className="total">
      <h4>Total</h4>
      <p>{props.finalPrice} €/t.t.c.</p>
      </div>
      <hr />
      <div className="sous_total">
        <h5>Sous-total</h5>
        <p>{props.totalPrice} €/t.t.c.</p>
      </div>
      <div className="remise">
        <h5>Remise</h5>
        <p>{props.soldeTotal} €/t.t.c.</p>
      </div>
      <div className="bon_reduction_container">
        <div className="bon_reduction">
          <input 
            // onChange={props.solde || props.dsblButtons}
            onChange={props.solde}
            // onChange={props.dsblButtons}
            className="remise_input"
            type="text"
            name="remise"
            id="remise"
            placeholder="Code de reduction"
          />
          <button className="bon_reduction_btn"
          onClick={ props.btnSolde }
          >Verifier</button>
        </div>
        <span className="bon_reduction_span">☆</span>
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
