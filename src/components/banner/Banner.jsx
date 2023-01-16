import React from 'react'
import iconChateau from "../../assets/icons/chateau_f3.png";
import "../../style.css"


export default function Banner() {
  return (
    <header id="header">
        <div className="bg-header"></div>
        <div className="titre">
          <img src={iconChateau} alt="icon chateau" />
          <h1>Chateau de Fontainebleau</h1>
        </div>
        <h2>Petit guide d'un belifontain pour faciliter votre visite</h2>
        <p>Designed by Buga Victor</p>
    </header>
  )
}
