import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h4>Contactez nous...</h4>
      <div className="container-form">
        <form method="post" action="traitement.php">
          <label for="prenom">Prénom</label>
          <div className="container_input_p">
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              id="prenom"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <label for="nom">Nom</label>
          <div className="container_input_p">
            <input type="text" placeholder="Nom" name="nom" id="nom" required />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <label for="email">Email</label>
          <div className="container_input_p">
            <input type="email" placeholder="Email" name="email" id="email" />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <label for="tel">Tel:</label>
          <div className="container_input_p">
            <input
              type="email"
              placeholder="Telephone"
              name="tel"
              id="tel"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <div className="container_input_p">
            <textarea id="txt" placeholder="Votre message" required></textarea>
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p className="p_star">
            Les éléments avec " <span  className="star_2" role="img" aria-label="star">☆</span> " sont obligatoires à remplir.
          </p>
          <button>Envoyer</button>
        </form>
      </div>
    </section>
  );
}
