import React from "react";
import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";

function aPropos() {
  return (
    <div id="aPropos" className="a-propos-container">
        <h1>À propos</h1>
        <p>
          Ayant étudié en intégration multimédia, <span className="text-color">je suis passionné par l'interaction entre les divers logiciels de programmation et de design</span>, et j'adore explorer différentes combinaisons d'outils pour créer des expériences uniques et immersives. Mon parcours m'a permis de développer des compétences en programmation tout en explorant les aspects artistiques du design numérique.
          <br />
          <br />
          Basé à <span className="text-color">Montréal</span>, Québec.
        </p>
      </div>
  );
}

export default aPropos;
