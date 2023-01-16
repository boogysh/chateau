import React from "react";
import img1 from "../../assets/images-ext/porte_doree.jpg";
import img2 from "../../assets/images-ext/ext_1.jpg";
import img3 from "../../assets/images-ext/ext_3.jpg";
import img4 from "../../assets/images-ext/canal.jpg";
import img5 from "../../assets/images-ext/parterre.jpg";
import img6 from "../../assets/images-ext/jardin_diane.jpg";

export default function Parc() {
  return (
    <section id="parc">
      <h2>
        Decouvrez le parc du Château, 130 hectares de bonheur avec accès libre
      </h2>
      <div className="porte_doree">
        <article>
          <h3>La porte Dorée</h3>
          <p>
            La porte Dorée remplaça, en 1528, une porte médiévale installée au
            même emplacement. Sa superposition de loggias, aux voûtes reposant
            sur des colonnes angulaires, ainsi que son ordonnance de pilastres
            et de frontons, en fait l'un des ouvrages architecturaux les plus
            novateurs des premiers remaniements de Fontainebleau par François
            Ier. D'un aspect tenant à la fois du châtelet médiéval français et
            des résidences des princes italiens, elle témoignait du souhait du
            roi de magnifier l'entrée de sa résidence rénovée. Ouvrant
            directement sur la cour ovale par un porche d'entrée orné des
            fresques de Primatice, cette porte resta, durant des siècles,
            l'entrée principale du château.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
        <a href="images-ext/porte_doree.jpg">
          <img src={img1} alt="porte dorée" />
        </a>
      </div>
      <div className="etang">
        <a href="images-ext/ext_1.jpg">
          <img src={img2} alt="lac" />
        </a>
        <article className="article_lac">
          <h3>L'étang aux Carpes.</h3>
          <p>
            Ouvrant sur le midi, l'étang aux carpes doit son nom aux fameuses
            carpes dont la présence à Fontainebleau est attestée depuis Henri
            IV. À l'est, les eaux de l'étang sont retenues par une digue que
            l'on nomma « chaussée de l'étang » avant qu'elle ne fût rebaptisée «
            allée de Maintenon ». Dès le XVIe siècle, la pièce d'eau de 6
            hectares, créée au Moyen-Âge pour drainer l'eau des jardins, servit
            de cadre aux somptueuses festivités nautiques de la cour des Valois.
            Le pavillon à pans fut édifié par Louis Le Vau sous Louis XIV, en
            1662, et restauré en 1807, lors des aménagements préalables à la
            création du jardin anglais. Il fut construit à peu près dans
            l'alignement du grand canal et du Grand Parterre, ouvrant une large
            perspective vers l'est.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
      </div>
      <div className="cour">
        <article>
          <h3>La cour d'Honneur</h3>
          <p>
            Fermée sur trois côtés et regardant à l'ouest sur la ville depuis la
            destruction de la quatrième aile et la création d'une grille en
            1809-1810, cette « grande basse cour » au plan régulier du XVIe
            siècle s'est progressivement imposée comme la cour principale du
            château. Appelée « cour du Cheval Blanc » depuis l'installation, au
            XVIe siècle, d'un cheval de plâtre en son centre, elle est bordée à
            l'est par l'emblématique aile de l'escalier en Fer-à-cheval rythmée
            par cinq pavillons dont la construction s'est étalée du XVIe au XIXe
            siècle. Au nord, l'aile des Ministres, édifiée dans les années 1530
            porte haut les chiffres de François Ier et sa salamandre. Face à
            elle, l'aile Louis XV, plus haute, arbore des façades de brique et
            de pierre maintenant l'harmonie colorée de la cour. Cette aile Louis
            XV fut édifiée dès 1739 sur les décombres de la galerie d'Ulysse
            afin d'y abriter des logements de cour, et sa construction ne
            s'acheva que dans les années 1773-1774. Depuis les adieux de
            Napoléon Ier à sa vieille garde, le 20 avril 1814, cette cour
            devenue la vue la plus célèbre du château de Fontainebleau, est
            aussi appelée « cour des adieux ».
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
        <a href="images-ext/ext_3.jpg">
          <img src={img3} alt="cour d'honneur" />
        </a>
      </div>
      <div className="canal">
        <a href="images-ext/canal.jpg">
          <img src={img4} alt="canal du chateau" />
        </a>
        <article>
          <h3>Le canal du parc</h3>
          <p>
            Étendu au-delà du dénivelé du bassin des Cascades, le parc marquait
            autrefois à l'est les limites du domaine royal. Depuis le village
            d'Avon, il était traversé par la principale voie d'accès au château.
            Sa configuration actuelle, l'organisation du réseau de cascatelles
            et d'allées en étoile, résulte de la création, sous Henri IV, d'un
            grand canal long de près de 1200 mètres (1606-1609) pour 40 mètres
            de large. Planté initialement de plus de soixante mille arbres où
            croissaient les rangées de peupliers blancs, les chênes et les
            arbres fruitiers, ce « parc fermé » et son canal étaient la fierté
            du roi, qui en suivit le chantier. En 1609, il fallut plus d'une
            semaine pour le remplir et, dès l'automne, le roi y naviguait.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
      </div>
      <div className="parterre">
        <article>
          <h3>Le grand Parterre</h3>
          <p>
            La création du Grand Parterre de 1660 à 1664 - le plus vaste
            d'Europe, avec ses 14 hectares - par André Le Nôtre et Louis Le Vau,
            témoigne de la clarification de l'espace voulue par Louis XIV à
            Fontainebleau. Les broderies de buis de ce jardin à la française ont
            disparu sous Louis XV. Subsistent le tracé général des compartiments
            d'herbe, les bassins ornés de statues, dont celui des Cascades
            (XVIIe et XIXe siècles), regardant à l'est vers le Canal d'Henri IV.
            Depuis 1817, une large vasque, dite « le pot bouillant », prend
            place en son centre tandis qu'au midi, du côté de la forêt, le rond
            d'eau est orné d'une statue du Tibre. Quatre sphinges en grès,
            déesses léonines sculptées par Lespagnandelle en 1664, marquent
            depuis Louis XIV la frontière entre le Parterre et le parc.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
        <a href="images-ext/parterre.jpg">
          <img src={img5} alt="parterre" />
        </a>
      </div>
      <div className="jardin_diane">
        <a href="images-ext/jardin_diane.jpg">
          <img src={img6} alt="jardin de diane" />
        </a>
        <article>
          <h3>Le jardin de Diane</h3>
          <p>
            Ancien jardin réservé de la Reine, il est bordé des espaces les plus
            intimes des souveraines (Petits Appartements de l'Impératrice,
            boudoir Turc de Marie-Antoinette). En effet, ce jardin était,
            jusqu'au XIXe siècle, fermé par des bâtiments dont la destruction,
            suivie de l'achat d'une bande de terrain complémentaire, a permis
            l'agrandissement du côté de la ville. Réaménagé en jardin paysager à
            l'Anglaise, planté d'arbres remarquables tels qu'un catalpa ou un
            tulipier de Virginie, il tire son nom d'une fontaine ornée d'une
            statue de Diane chasseresse. Seule survivante des riches fontaines
            créées sous Henri IV, elle est positionnée au centre d'un bassin
            circulaire à gradins. Sur la partie basse d'un piédestal présentant
            en majesté la déesse armée de son carquois, quatre têtes de cerfs en
            bronze, exécutés par Pierre Biard, ainsi que quatre chiens,
            rappellent que Fontainebleau était considéré comme le « temple de
            Diane », château de chasse prisé par les souverains.
          </p>
          <p className="source">Source: https://www.chateaudefontainebleau.fr</p>
        </article>
      </div>
    </section>
  );
}
