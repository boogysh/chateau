import React from "react";

import img1 from "../../assets/images_int/int_napoleon.jpg";
import img2 from "../../assets/images_int/int_napoleon_2.jpg";
import img3 from "../../assets/images_int/int_pape.jpg";

export default function Apparements() {
  return (
    <section id="appartements">
      <h2 id="appartements-h1">Les grands appartements</h2>
      <div className="petite_chambre">
        <article>
          <h3>Petite chambre à coucher de l'Empereur</h3>
          <p>
            D'abord bibliothèque particulière de l'Empereur, cette pièce fut
            transformée en petite chambre à coucher sur l'ordre de son occupant.
            L'Empereur y fit placer le petit lit en fer avec couronnement en
            bronze doré, et les rideaux verts, couleur de prédilection de
            l'Empire. Le grand bureau plat en acajou, avec ornements de bronze
            ciselé et doré par Jacob, permettait à l'Empereur d'alterner, durant
            ses nuits, courts sommeils et séances de travail. A côté du lit, à
            droite, une porte dérobée conduit à l'escalier d'acajou que Napoléon
            empruntait pour descendre dans la bibliothèque de ses Petits
            Appartements.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
        <a href="images_int/int_napoleon.jpg">
          <img src={img1} alt="chambre roy" />
        </a>
      </div>
      <div className="chambre_coucher">
        <a href="images_int/int_napoleon_2.jpg">
          <img src={img2} alt="chambre_a_coucher_" />
        </a>
        <article>
          <h3>Chambre à coucher de l'Empereur</h3>
          <p>
            Il s'agit de la pièce la plus importante de l'appartement. Installée
            dans l'ancien « cabinet à la poudre » de Louis XVI (servant à la
            toilette), cette chambre d'apparat richement remeublée en 1808,
            s'orne d'un lit sculpté et doré, flanqué de colonnes avec frontons
            présentant les figures de la Noblesse et de la Gloire, de
            l'Abondance et de la Justice. Les portes et les panneaux du lambris
            sont dorés et ornés de Victoires, rehaussant la prestance de la
            chambre impériale. C'est pourtant dans cet écrin de son ancienne
            Majesté que, la nuit du 12 au 13 avril 1814, Napoléon aurait tenté
            de s'empoisonner suite à son abdication. Secouru, il aurait repris
            ses sens et, étonné de vivre, se serait exclamé : « Dieu ne le veut
            pas ! »
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
      </div>
      <div className="chambre_pape">
        <article>
          <h3>L'appartement du pape</h3>
          <p>
            Après les Grands Appartements des souverains, cet appartement
            d'invités riche de onze salles est l'espace d'habitation le plus
            somptueux du palais. Il résulte, depuis 1804, de la réunion en une
            seule enfilade de deux appartements construits dans des corps de
            bâtiments accolés. S'il conserve l'appellation d'appartement du Pape
            depuis les deux séjours qu'y effectua Pie VII en 1804 et en
            1812-1814, c'est bien en double appartement princier du Second
            Empire qu'il est aujourd'hui présenté.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
        <a href="images_int/int_pape.jpg">
          <img src={img3} alt="appartement pape" />
        </a>
      </div>
    </section>
  );
}
