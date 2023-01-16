import React from 'react'
import imgInfo from "../../assets/icons/info.png";
import imgCB from "../../assets/cartes_bancaires/cb.jpg";
import imgCbMaster from "../../assets/cartes_bancaires/master.jpg";
import imgCbVisa from "../../assets/cartes_bancaires/visa.jpg";
import imgCbPayPal from "../../assets/cartes_bancaires/paypal.jpg";
import imgCbAmericanExpress from "../../assets/cartes_bancaires/american_express.jpg";

import '../../style.css'


export default function TotalCart() {
  return (
    <aside id="total">
            <h4>Total</h4>
            <hr />
            <div className="sous_total">
              <h5>Sous-total</h5>
              <p>111 €/t.t.c.</p>
            </div>
            <div className="remise">
              <h5>Remise</h5>
              <p>
                <img src={imgInfo} alt="information" />
              </p>
            </div>
            <div className="bon_reduction">
              <form  method="POST">
                <input
                 className='remise_input'
                  type="text"
                  name="remise"
                  id="remise"
                  placeholder="Introduiser un code de reduction"
                />
              </form>
              <span>☆</span>
            </div>
            <button className='payment'>PAIEMENT</button>
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
  )
}
