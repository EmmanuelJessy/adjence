import React, { useState, useEffect, useRef } from "react";
import logo from "../../src/assets/logo.png";
import ico from "../../src/assets/ico.png";

import dev from "../../src/assets/programmer.png";
import com from "../../src/assets/com.png";
import design from "../../src/assets/design.png";
import data from "../../src/assets/database.png";
import CreateIcon from "@mui/icons-material/Create";
import BoltIcon from "@mui/icons-material/Bolt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmoothScrollWrapper from "../../src/smooth";

function Home() {
  const [digital, setDigital] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const presentationRef = useRef(null);
  const [shadowStyle, setShadowStyle] = useState({
    cercle1: {},
    cercle2: {},
    cercle3: {},
    cercle4: {},
  });

  const [service, setService] = useState(false);
  const [techno, setTechno] = useState(false);
  const [indus, setIndus] = useState(false);

  const text =
    "Au fil des années, \n nous avons perfectionné notre expertise en développement logiciel, web & stratégie numérique. \n Prêts à propulser vos projets technologiques ? \n Atteignons ensemble de nouveaux sommets !";
  const [lineOpacities, setLineOpacities] = useState([]);
  const textRefs = useRef([]); // Pour stocker les références de chaque ligne

  // Découpe le texte en plusieurs lignes
  const getLines = (text) => {
    const words = text.split(" ");
    let lines = [];
    let currentLine = "";
    let suivant = "\n";

    words.forEach((word) => {
      if (word === "\n") {
        // Si un retour à la ligne est trouvé, ajouter la ligne actuelle et réinitialiser
        if (currentLine) {
          lines.push(currentLine);
          currentLine = "";
        }
        lines.push("\n"); // Ajoute le retour à la ligne comme élément séparé
      } else {
        const tempLine = currentLine ? currentLine + " " + word : word;
        if (tempLine.length < 50) {
          currentLine = tempLine;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
    });

    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // Fonction pour mettre à jour les opacités selon la position du scroll
  const handleScroll = () => {
    const newOpacities = textRefs.current.map((lineRef) => {
      if (!lineRef) return 0;

      const rect = lineRef.getBoundingClientRect();
      const windowHeight = window.innerHeight / 1.2;

      // Si la ligne est dans la fenêtre, calculer son opacité
      if (rect.top >= 1 && rect.bottom <= windowHeight / 1.5) {
        return 1;
      } else if (rect.bottom > 0 && rect.top < windowHeight + 10000) {
        // Ligne partiellement visible
        return Math.max(
          0.2,
          Math.min(1, (windowHeight - rect.top) / windowHeight)
        );
      } else {
        // Ligne hors écran
        return 0;
      }
    });

    setLineOpacities(newOpacities);
  };

  useEffect(() => {
    // Initialisation des opacités à 0
    const lines = getLines(text);
    setLineOpacities(new Array(lines.length).fill(0.5));

    // Ajouter l'écouteur de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Nettoyer l'écouteur de scroll lors du démontage du composant
      window.removeEventListener("scroll", handleScroll);
    };
  }, [text]);

  const lines = getLines(text);

  const affichez1 = () => {
    setService(!service);
    setTechno(false);
    setIndus(false);
  };

  const affichez2 = () => {
    setTechno(!techno);
    setService(false);
    setIndus(false);
  };

  const affichez3 = () => {
    setIndus(!indus);
    setService(false);
    setTechno(false);
  };

  // Gestion de l'ombre et du déplacement du texte en fonction de la position de la souris
  const handleMouseMove = (e, cercle) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const shadowX = (offsetX - e.target.clientWidth / 2) / 10;
    const shadowY = (offsetY - e.target.clientHeight / 2) / 10;

    const translateX = (offsetX - e.target.clientWidth / 2) / 20;
    const translateY = (offsetY - e.target.clientHeight / 2) / 20;

    setShadowStyle((prevStyles) => ({
      ...prevStyles,
      [cercle]: {
        boxShadow: `${shadowX}px ${shadowY}px 20px rgba(255, 255, 255, 0.8)`,
        transform: `translate(${translateX}px, ${translateY}px)`, // Translation du texte
      },
    }));
  };

  // Réinitialisation du style lors de la sortie du curseur
  const handleMouseLeave = (cercle) => {
    setShadowStyle((prevStyles) => ({
      ...prevStyles,
      [cercle]: { boxShadow: "none", transform: "translate(0, 0)" },
    }));
  };

  // Alternance entre 'LE DIGITAL' et 'LE WEB'
  useEffect(() => {
    const toggleDigital = () => {
      setDigital((prevDigital) => !prevDigital);
    };

    const interval = setInterval(toggleDigital, 3000);
    return () => clearInterval(interval);
  }, []);

  // Gestion de l'apparition du texte avec l'effet d'opacité

  const texts = [
    "UX/UI DESIGN & PRODUCT DEVELOPMENT",
    "WEB DESIGN & CUSTOM WEB DEVELOPMENT",
    "INNOVATIVE SOLUTIONS",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Changement automatique du texte toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); // 10 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage du composant
  }, [texts.length]);

  

  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollTop = window.scrollY;
        const headerHeight = headerRef.current.offsetHeight;

        if (scrollTop > headerHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTextChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <SmoothScrollWrapper>
      <div className="accueil">
        <div className="home">
          <div className={`entete ${isFixed ? "fixed" : ""}`} ref={headerRef}>
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
                      <BoltIcon style={{ fill: "black" }} />
                    </div>

                    <div className="let">
                      <h5>ON EN DISCUTE</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hsection2" onClick={() => handleTextChange()}>
              <div className="loading">
                <div className="white"></div>
              </div>

              <div className="prof" >
                <div className="ico">
                  <img src={ico} alt="" />
                </div>
                <h4>Adjence</h4>
                <h5>1 h</h5>
              </div>

              <div className="affichage">
                <div className="titre">
                  {texts.map((text, index) => (
                    <h2
                      key={index}
                      className={`text ${
                        index === currentIndex ? "active" : "inactive"
                      }`}
                      onClick={() => handleTextChange()}
                    >
                      {text}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="presentation" ref={presentationRef}>
            <div className="founder">
              <div className="photo"></div>
              <div className="nom">
                <h3>
                  FONDATEURS
                  <br /> DE " ADJENCE "
                </h3>
              </div>
            </div>

            <div className="scroll-animated-text">
              {lines.map((line, index) => (
                <div
                  key={index}
                  ref={(el) => (textRefs.current[index] = el)} // Assigner la référence pour chaque ligne
                  className="text-line"
                  style={{
                    opacity: lineOpacities[index],
                    transition: "opacity 0.9s ease-in-out",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="cercles">
            <h1>UNE TEAM DE CHOC</h1>
            <div className="circulaire">
              <div
                className="cercle cercle1"
                style={shadowStyle.cercle1}
                onMouseMove={(e) => handleMouseMove(e, "cercle1")}
                onMouseLeave={() => handleMouseLeave("cercle1")}
              >
                <img src={dev} alt="" />
                <h2>
                  Développeurs <br />
                  Web & Mobile{" "}
                </h2>
              </div>
              <div
                className="cercle cercle2"
                style={shadowStyle.cercle2}
                onMouseMove={(e) => handleMouseMove(e, "cercle2")}
                onMouseLeave={() => handleMouseLeave("cercle2")}
              >
                {" "}
                <img src={com} alt="" />
                <h2>
                  Experts Communication
                  <br /> Interne & Externe{" "}
                </h2>
              </div>
              <div
                className="cercle cercle3"
                style={shadowStyle.cercle3}
                onMouseMove={(e) => handleMouseMove(e, "cercle3")}
                onMouseLeave={() => handleMouseLeave("cercle3")}
              >
                <img src={design} alt="" />
                <h2>
                  Web Designer
                  <br />& Copywriter{" "}
                </h2>
              </div>
              <div
                className="cercle cercle4"
                style={shadowStyle.cercle4}
                onMouseMove={(e) => handleMouseMove(e, "cercle4")}
                onMouseLeave={() => handleMouseLeave("cercle4")}
              >
                <img src={data} alt="" />
                <h2>
                  Ingénieurs
                  <br />& Architecte Data{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="fin">
            <div className="lumiere"></div>

            <div className="talkbubble">
              <h1>
                Prêt à discuter <br />
                de vos projets avec nous ?
              </h1>

              <div className="2button">
                <div className="mail">
                  <div className="contact">
                    <h5>PAR MESSAGE</h5>
                    <div className="crayon">
                      <div className="blink-animation">
                        <CreateIcon style={{ fontSize: "1.5vw" }} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid black",
                    }}
                  >
                    <h5 style={{ color: "black" }}>RESERVEZ UN RDV</h5>
                    <div
                      className="crayon"
                      style={{ backgroundColor: "#4637d1" }}
                    >
                      <div>
                        <CalendarMonthIcon
                          style={{ fontSize: "1.5vw", fill: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <hr />
          <div className="services">
            <div className="service" onClick={affichez1}>
              <h3>Nos services</h3>
              {service ? <h1 className="moins">-</h1> : <h1>+</h1>}
            </div>
            {service && (
              <div className="messervices">
                <div className="design">
                  <h2>DESIGN</h2>

                  <div className="mesdesign">
                    <h4>Web Design</h4>
                    <h4>UI/UX Design</h4>
                    <h4>UI/UX Design Responsive Web Design</h4>
                    <h4>Mobile App Design</h4>
                    <h4>Landing Website Design</h4>
                    <h4>Saas Website Design</h4>
                    <h4>Branding for Startups</h4>
                    <h4>Website redesign</h4>
                    <h4>Rebranding</h4>
                  </div>
                </div>
                <div className="design">
                  <h2>DEVELOPPEMENT</h2>

                  <div className="mesdesign">
                    <h4>Software Product Development</h4>
                    <h4>Web Development</h4>
                    <h4>CMS Development</h4>
                    <h4>MVP development</h4>
                    <h4>Web application development</h4>
                    <h4>Mobile app development</h4>
                    <h4>Back-end development</h4>
                    <h4>Front-end Development</h4>
                    <h4>Web portal development</h4>
                  </div>
                </div>
                <div className="design">
                  <h2>MARKETING</h2>

                  <div className="mesdesign">
                    <h4>Search Engine Optimisation</h4>
                    <h4>Local SEO</h4>
                    <h4>Technical SEO</h4>
                    <h4>SEO Audit</h4>
                    <h4>Technical Audit</h4>
                    <h4>Conversion Rate Optimization</h4>
                    <h4>GA4 consulting</h4>
                    <h4>Content Marketing</h4>
                    <h4>Web portal development</h4>
                    <h4>Social Media Design</h4>
                    <h4>Pitch Deck Design</h4>
                    <h4>Product Hunt launch</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr />
          <div className="technos">
            <div className="techno" onClick={affichez2}>
              <h3>Nos technologies</h3>
              {techno ? <h1 className="moins">-</h1> : <h1>+</h1>}
            </div>
            {techno && (
              <div className="mestechnos">
                <div className="back">
                  <h2>BACK-END/FRONT-END</h2>

                  <div className="mesback">
                    <h4>Node Js</h4>
                    <h4>React JS</h4>
                    <h4>Next JS</h4>
                    <h4>Vue JS</h4>
                  </div>
                </div>
                <div className="back">
                  <h2>CLOUD</h2>

                  <div className="mesback">
                    <h4>AWS</h4>
                    <h4>Microsoft Azure</h4>
                    <h4></h4>
                    <h4></h4>
                  </div>
                </div>
                <div className="back">
                  <h2>MOBILE DEVELOPPEMENT</h2>

                  <div className="mesback">
                    <h4>React Native</h4>
                    <h4>Flutter</h4>
                    <h4></h4>
                    <h4></h4>
                  </div>
                </div>
                <div className="back">
                  <h2>CMS</h2>

                  <div className="mesback">
                    <h4>Webflow</h4>
                    <h4>WordPress</h4>
                    <h4></h4>
                    <h4></h4>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr />
          <div className="induss">
            <div className="indus" onClick={affichez3}>
              <h3>Nos domaines</h3>
              {indus ? <h1 className="moins">-</h1> : <h1>+</h1>}
            </div>
            {indus && (
              <div className="mesindus">
                <div className="ind">
                  <h2>SANTÉ</h2>

                  <div className="mesind">
                    <h4>Healthcare software development</h4>
                    <h4>Healthcare IT consulting</h4>
                    <h4>Healthcare app development</h4>
                    <h4>Healthcare UI/UX design</h4>
                    <h4>Medical apps for patients</h4>
                    <h4>Healthcare software testing</h4>
                    <h4>Telemedicine app development</h4>
                    <h4></h4>
                    <h4></h4>
                  </div>
                </div>
                <div className="ind">
                  <h2>ÉDUCATION</h2>

                  <div className="mesind">
                    <h4>AEducation software developmentWS</h4>
                    <h4>Education app development</h4>
                    <h4>LMS development services</h4>
                    <h4>E-learning application development</h4>

                    <h4>E-learning software development</h4>

                    <h4>Education portals development</h4>
                    <h4>School management software</h4>
                    <h4></h4>
                  </div>
                </div>

                <div className="ind">
                  <h2>FINANCE</h2>

                  <div className="mesind">
                    <h4>Financial software development</h4>
                    <h4>Web design for financial services</h4>
                    <h4>Financial mobile app development</h4>
                    <h4>Banking apps development</h4>
                    <h4>Payment app development</h4>
                    <h4>Payment integration services</h4>
                    <h4></h4>
                    <h4></h4>
                  </div>
                </div>

                <div className="ind">
                  <h2>TRANSPORT</h2>

                  <div className="mesind">
                    <h4>Transportation software development</h4>
                    <h4>Logistics app development</h4>
                    <h4>Logistics web design</h4>
                    <h4>Transportation management software</h4>
                    <h4>Supply chain software development</h4>
                    <h4></h4>
                  </div>
                </div>
                <div className="ind">
                  <h2>MACHINE LEARNING & IA</h2>

                  <div className="mesind">
                    <h4>AI consulting services</h4>
                    <h4>AI development services</h4>
                    <h4>AI integration services</h4>
                    <h4>AI chatbot development</h4>
                    <h4>ChatGPT integration</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr />

          <div className="copywrite">
            <h4>© Adjence - Tous droits reservés</h4>

            <ul>
              <div className="soulign">
                <li>Gestion de cookies</li>
                <hr />
              </div>
              <div className="soulign">
                <li>Conditions d'utilisation</li>
                <hr />
              </div>
              <div className="soulign">
                <li>Confidentialité</li>
                <hr />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </SmoothScrollWrapper>
  );
}

export default Home;
