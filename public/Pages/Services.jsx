import React, { useState, useEffect, useRef } from "react";
import logo from "../../src/assets/logo.png";
import ico from "../../src/assets/ico.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import back from "../../src/assets/back.png";

import dev from "../../src/assets/programmer.png";
import com from "../../src/assets/com.png";
import design from "../../src/assets/design.png";
import data from "../../src/assets/database.png";
import CreateIcon from "@mui/icons-material/Create";
import BoltIcon from "@mui/icons-material/Bolt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmoothScrollWrapper from "../../src/smooth";
import { useNavigate } from "react-router-dom";
import Footer from "../../src/Footer";

function Services() {
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
    "❝ Chez Adjence, \n chaque membre de notre équipe incarne l'excellence, la passion et l'innovation. Ensemble, nous ne faisons pas que développer des solutions, nous construisons des ponts vers l'avenir de nos clients. Notre force réside dans la synergie de nos talents, qui transforme chaque défi en une opportunité de réussite. ❞";
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
        if (tempLine.length < 40) {
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
      if (rect.top >= 1 && rect.bottom <= windowHeight - 50) {
        return 1;
      } else if (rect.bottom > 0 && rect.top < windowHeight + 2000) {
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

  const imageGroups = [
    [logo, logo, logo, logo], // Groupe 1
    [dev, dev, dev, dev], // Groupe 2
    [com, com, com, com], // Groupe 3
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    // Changer de groupe toutes les 10 secondes
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === imageGroups.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 secondes

    // Nettoyer l'intervalle pour éviter les fuites de mémoire
    return () => clearInterval(interval);
  }, [imageGroups.length]);

  const navigate = useNavigate();

  const services = () => {
    navigate("/nos-services");
  };
  const mur = () => {
    navigate("/le-mur");
  };
  const propos = () => {
    navigate("/nos-solutions");
  };

  const home = () => {
    navigate("/");
  };
  const contact=()=>{
    navigate('/contactez-nous')
  }
  const conditions=()=>{
    navigate('/conditions&confidentialites')
  }

  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="accueil">
      <div className="home">
        <div className={`entete ${isFixed ? "fixed" : ""}`} ref={headerRef}>
          <img src={logo} alt="Logo"  onClick={home}/>
          <ul>
            <li onClick={home}>ACCUEIL</li>
            <hr />

            <li style={{ color: "#fdc448" }} onClick={services}>
              NOS SERVICES
            </li>
            <hr />
            
            <li onClick={mur}>LE MUR</li>
          </ul>

          <div className="contact" onClick={contact}>
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
                NOS SERVICES POUR LE SUCCES DE
                {!digital ? (
                  <span className="animate-text">
                    {"VOS".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"PROJETS".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                ) : (
                  <span className="animate-text2">
                    {"VOTRE".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"BUSINESS".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                )}
              </h1>
              <hr />

              <div className="talks">
                <div className="years">
                  <h2>x 2</h2>
                  <div className="exp">
                    <h3>
                      PLUS PRODUCTIF <br />
                      PLUS DE RESULTATS OBTENUS
                    </h3>
                  </div>
                </div>

                <div className="talk">
                  <div className="eclair">
                    <BoltIcon style={{ fill: "black" }} />
                  </div>

                  <div className="let"onClick={scrollToTarget}>
                    <h5>ON EN DISCUTE ?</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="presentation" ref={presentationRef}>
          <div className="founder">
            <div className="photo"></div>
            <div className="nom">
              <h3>
                CEO
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
                {index === 0 ? (
                  // Première lettre de la première ligne
                  <>
                    <span className="first-char">{line.charAt(0)}</span>
                    {line.slice(1)}
                  </>
                ) : index === lines.length - 1 ? (
                  // Dernière lettre de la dernière ligne
                  <>
                    {line.slice(0, -1)}
                    <span className="last-char">
                      {line.charAt(line.length - 1)}
                    </span>
                  </>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>
          
        </div>
        
        <div className="tablematiere">
          <div className="tables">
            <h2>Table de services</h2>
          </div>
          <div className="table1">
            <hr />
            <div className="services">
              <div className="service" onClick={affichez1}></div>

              <div className="messervices">
                <div className="design">
                  <h2
                    style={{
                      fontSize: "3vw",
                      fontFamily: "Suisse4",
                      color: "grey",
                    }}
                  >
                    DESIGN
                  </h2>

                  <div className="mesdesign">
                    <h4 style={{ color: "white" }}>Design de sites Web</h4>
                    <h4 style={{ color: "white" }}>Design UI/UXn</h4>
                    <h4 style={{ color: "white" }}>
                    Design UI/UX Responsive
                    </h4>
                    <h4 style={{ color: "white" }}>Design d'applications mobiles</h4>
                    <h4 style={{ color: "white" }}>Design de Landing Page</h4>
                    <h4 style={{ color: "white" }}>Design pour SaaS</h4>
                    <h4 style={{ color: "white" }}>Branding pour Startups</h4>
                    <h4 style={{ color: "white" }}>Refonte de sites Web</h4>
                    <h4 style={{ color: "white" }}>Rebranding</h4>
                  </div>
                </div>
                <div className="design">
                  <h2
                    style={{
                      fontSize: "3vw",
                      fontFamily: "Suisse4",
                      color: "grey",
                    }}
                  >
                    DEVELOPPEMENT
                  </h2>

                  <div className="mesdesign">
                    <h4 style={{ color: "white" }}>
                    Développement de produits logiciels
                    </h4>
                    <h4 style={{ color: "white" }}>Développement Web</h4>
                    <h4 style={{ color: "white" }}>Développement de CMS</h4>
                    <h4 style={{ color: "white" }}>Développement de MVP</h4>
                    <h4 style={{ color: "white" }}>
                    Développement d'applications Web
                    </h4>
                    <h4 style={{ color: "white" }}>Développement d'applications mobiles</h4>
                    <h4 style={{ color: "white" }}>Développement back-end</h4>
                    <h4 style={{ color: "white" }}>Développement front-end</h4>
                    <h4 style={{ color: "white" }}>Développement de portails Web</h4>
                  </div>
                </div>
                <div className="design">
                  <h2
                    style={{
                      fontSize: "3vw",
                      fontFamily: "Suisse4",
                      color: "grey",
                    }}
                  >
                    MARKETING
                  </h2>

                  <div className="mesdesign">
                    <h4 style={{ color: "white" }}>
                    Optimisation pour les moteurs de recherche (SEO)
                    </h4>
                    <h4 style={{ color: "white" }}>SEO local</h4>
                    <h4 style={{ color: "white" }}>SEO technique</h4>
                    <h4 style={{ color: "white" }}>Audit SEO</h4>
                    <h4 style={{ color: "white" }}>Audit technique</h4>
                    <h4 style={{ color: "white" }}>
                    Optimisation du taux de conversion
                    </h4>
                    <h4 style={{ color: "white" }}>Optimisation GA4</h4>
                    <h4 style={{ color: "white" }}>Marketing de contenu</h4>
                   
                    <h4 style={{ color: "white" }}>Design pour les réseaux sociaux</h4>
                    <h4 style={{ color: "white" }}>Design de Pitch Deck</h4>
                    <h4 style={{ color: "white" }}>Lancement de produit</h4>
                    <h4></h4>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>{" "}
        </div>{" "}
        <div className="solutions">
          <div className="eco">
            <h1>
              Optez pour un écosystème digital <br /> <span>PERFORMANT</span>
            </h1>
          </div>
          <div className="ecosyst">
            <div className="service1">
              <div className="un">
                <div className="icone">
                  <div className="cercleicone">
                    <ExpandMoreIcon
                      style={{ fontSize: "2vw", fill: "white" }}
                    />
                  </div>
                </div>

                <div className="titleservice">
                  <h2>Stratégie numérique intégrée</h2>

                  <div className="sous_titre">
                    <hr />
                    <h4>La vision</h4>
                  </div>

                  <div className="texte">
                    <p>
                      Nous créons des stratégies digitales sur mesure, adaptées
                      aux besoins spécifiques de votre entreprise. Grâce à un
                      audit approfondi et une analyse précise des données, nous
                      définissons des objectifs clairs et des plans d'action
                      efficaces pour maximiser votre impact digital.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="deux">
                <div className="icone">
                  <div className="cercleicone">
                    <ExpandMoreIcon
                      style={{ fontSize: "2vw", fill: "white" }}
                    />
                  </div>
                </div>

                <div className="titleservice">
                  <h2>Développement Logiciel </h2>

                  <div className="sous_titre">
                    <hr />
                    <h4>Des outils sur mésure</h4>
                  </div>

                  <div className="texte">
                    <p>
                      Nous concevons des applications web, mobiles et des
                      solutions logicielles personnalisées, adaptées à vos
                      processus métiers. En intégrant des technologies modernes,
                      nous vous aidons à automatiser vos opérations et à
                      optimiser l'efficacité de vos équipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service2">
              <div className="titreservice2">
                <h1>O</h1>
              </div>

              <div className="desc">
                <h3>Concept "O"</h3>
                <h2>Optimisation de la perfomance digitale</h2>
                <p>
                  L'optimisation continue est essentielle pour garantir des
                  résultats durables. Nous analysons vos performances
                  numériques, ajustons vos campagnes en fonction de vos
                  objectifs et optimisons vos stratégies pour améliorer votre
                  taux de conversion, tout en maximisant la croissance et la
                  satisfaction de vos clients.
                </p>

                <div className="motcles">
                  <div className="cles">
                    <h5>Optimisation</h5>
                  </div>
                  <div className="cles">
                    <h5>Croissance</h5>
                  </div>
                  <div className="cles">
                    <h5>Performance</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="solutions">
        <div className="eco">
          <h1>
            Boostez votre marque <br /> <span>AU SOMMET</span>
          </h1>
        </div>
        <div className="services1">
          <div className="top1">
            <div className="premier">
              <div className="cercle">
                <h3>01</h3>
              </div>
              <div className="description2">
                <h2>Vision <br />& Mission</h2>
                <h4>Définir l'avenir de votre Marque</h4>
              </div>
            </div>
            <div className="suite1">
              <p>
                Explorons comment clarifier la vision et la mission de votre
                entreprise pour orienter vos efforts de marque et aligner toutes
                vos actions sur un objectif commun.
              </p>
            </div>
          </div>
          <div className="top2">
            <div className="premier">
              <div className="cercle">
                <h3>02</h3>
              </div>
              <div className="description2">
                <h2>Analyse <br />de marché</h2>
                <h4>Comprendre Votre Position</h4>
              </div>
            </div>
            <div className="suite2">
              <p>
                Analysons des tendances du marché, la concurrence et le profil
                de votre clientèle cible pour adapter votre stratégie de marque
                et vous démarquer efficacement.
              </p>
            </div>
          </div>
          <div className="top3">
            <div className="premier">
              <div className="cercle">
                <h3>03</h3>
              </div>

              <div className="description2">
                <h2>
                  Stratégie <br />de communication
                </h2>
                <h4>Engager et Convertir</h4>
              </div>
            </div>
            <div className="suite3">
              <p>
                Développons une stratégie de communication claire pour
                promouvoir votre marque, en engageant votre audience et
                transformant les prospects en clients fidèles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section" ref={targetRef}>
        <div className="fin">
          <div className="lumiere"></div>

          <div className="talkbubble">
            <h1>
              Prêt à discuter <br />
              de vos projets avec nous ?
            </h1>

            <div className="2button">
              <div className="mail">
                <div className="contact" onClick={contact}>
                  <h5>PAR MESSAGE</h5>
                  <div className="crayon" >
                    <div className="blink-animation">
                      <CreateIcon style={{ fontSize: "1.5vw" }} />
                    </div>
                  </div>
                </div>
                <div
                  className="contact" onClick={contact}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",

                  }}
                >
                  <h5 style={{ color: "black" }}>RESERVEZ UN RDV</h5>
                  <div
                    className="crayon"
                    style={{ backgroundColor: "#4637d1", display:'flex', justifyContent:'center', alignContent:'center' }}
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
      <Footer/>
    </div>
  );
}

export default Services;
