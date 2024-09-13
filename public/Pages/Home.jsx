import React, { useState, useEffect } from "react";
import logo from "../../src/assets/logo.png";

import CreateIcon from "@mui/icons-material/Create";
import BoltIcon from '@mui/icons-material/Bolt';

function Home() {
  const [digital, setDigital] = useState(false);

  useEffect(() => {
    // Fonction pour alterner l'état de digital
    const toggleDigital = () => {
      setDigital((prevDigital) => !prevDigital);
    };

    // Configuration du setInterval pour changer l'état toutes les 3 secondes
    const interval = setInterval(toggleDigital, 3000);

    // Nettoyage du setInterval lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="entete">
        <img src={logo} alt="Logo" />
        <ul>
          <li>SERVICES</li>
          <hr />
          <li>PROJETS</li>
          <hr />
          <li>RESSOURCES</li>
          <hr />
        </ul>

        <div className="contact">
          <h5>CONTACTEZ-NOUS</h5>
          <div className="crayon">
            <div className="blink-animation">
              <CreateIcon style={{ fontSize: "1.5vw" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="homesection">
        <div className="hsection1">
          <div className="sec1">{/* Contenu section 1 */}</div>
          <div className="sec2">
            <h1>
              EXPLORONS ENSEMBLE
              {!digital ? (
                <span className="animate-text">
                  {"LE".split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}{" "}
                  {"DIGITAL".split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              ) : (
                <span className="animate-text2">
                  {"LE".split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}{" "}
                  {"WEB".split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              )}
            </h1>
            <hr />

            <div className="talks">
              <div className="years">
                <h2>5 ans</h2>
                <div className="exp">
                  <h3>
                    DE PERFECTIONNEMENT <br />
                    D'ACCOMPAGNEMENT STRATÉGIQUE
                  </h3>
                </div>
              </div>

              <div className="talk">
                <div className="eclair">
                  <BoltIcon style={{fill:'black'}}/>
                </div>

                <div className="let">
                  <h5>ON EN DISCUTE</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hsection2">{/* Contenu section 2 */}</div>
      </div>
    </div>
  );
}

export default Home;
