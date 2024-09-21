import React, { useState, useEffect, useRef } from "react";
import logo from "../../src/assets/logo.png";
import ico from "../../src/assets/ico.png";
import img1 from "../../src/assets/img1.png";
import img2 from "../../src/assets/img2.png";
import img3 from "../../src/assets/img3.jpg";
import img4 from "../../src/assets/img4.jpg"
import img5 from "../../src/assets/img5.png";
import img6 from "../../src/assets/img6.png";
import img7 from "../../src/assets/img7.png";
import img8 from "../../src/assets/img8.png";
import img9 from "../../src/assets/img9.png";
import img10 from "../../src/assets/img10.jpg";
import img11 from "../../src/assets/img11.jpg";
import img12 from "../../src/assets/img12.jpg";
import img13 from "../../src/assets/img13.jpg";
import img14 from "../../src/assets/img14.jpeg";
import img15 from "../../src/assets/img15.jpg";
import img16 from "../../src/assets/img16.jpg";
import img17 from "../../src/assets/img17.jpg";
import img18 from "../../src/assets/img18.jpg";
import img19 from "../../src/assets/img19.jpg";
import img20 from "../../src/assets/img20.jpg";
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
import CookiesBanner from "../../src/Cookies";

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
    "DESIGN UX/UI & DÉVELOPPEMENT DE PRODUIT",
    "CONCEPTION & DÉVELOPPEMENT WEB PERSONNALISÉ",
    "IDENTITÉ DE MARQUE",
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
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % imageGroups.length);
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % imageGroups2.length);
  };

  const imageGroups = [
    [img1, img2, img3, img4], // Groupe 1
    [img9, img6, img7, img2], // Groupe 2
    [img13, img14, img15, img16], // Groupe 3
  ];

  const imageGroups2 = [
    [img5, img6, img7, img8], // Groupe 1
    [img10, img11, img12, img15], // Groupe 2
    [img17, img18, img19, img20], // Groupe 3
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

  const services =()=>{
    navigate('/nos-services');
  }
  const mur =()=>{
    navigate('/le-mur');
  }
  const propos =()=>{
    navigate('/nos-solutions');
  }

  const home=()=>{
    navigate('/')
  }

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
        <CookiesBanner/>
        <div className="home">
          
          <div className={`entete ${isFixed ? "fixed" : ""}`} ref={headerRef}>
            <img src={logo} alt="Logo" onClick={home} />
            <ul>
            <li  style={{color:'#fdc448'}} onClick={home}>ACCUEIL</li>
            <hr />
              
              <li onClick={services}> NOS SERVICES</li>
             
              
              <hr />
              <li  onClick={mur}>LE MUR</li>
              
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
                    <h2 >5 ans</h2>
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

                    <div className="let" onClick={scrollToTarget}>
                      <h5>ON EN DISCUTE ?</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hsection2" onClick={() => handleTextChange()}>
              <div className="loading">
                <div className="white"></div>
              </div>

              <div className="prof">
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

                <div className="affiches">
                  <div className="affiche1">
                    {imageGroups[currentGroupIndex].map((imageSrc, index) => (
                      <div className="img" key={index}>
                        <img
                        src={imageSrc}
                        alt={`Image ${index + 1}`}
                        
                      />
                      </div>
                    ))}
                  </div>
                  <div className="affiche2">
                  {imageGroups2[currentGroupIndex].map((imageSrc, index) => (
                      <div className="img" key={index}>
                        <img
                        src={imageSrc}
                        alt={`Image ${index + 1}`}
                        
                      />
                      </div>
                    ))}
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
          <div className="solutions">
          <div className="eco">
            <h1>
              Faites confiance à notre team <br /> <span>DE CHOC</span>
            </h1>
          </div>
          </div>
          <div className="cercles">
          
          
          
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
        <div className="section" ref={targetRef}>
          <div className="fin" >
            <div className="lumiere"></div>

            <div className="talkbubble" >
              <h1>
                Prêt à discuter <br />
                de vos projets avec nous ?
              </h1>

              <div className="2button">
                <div className="mail">
                  <div className="contact" onClick={contact}>
                    <h5>PAR MESSAGE</h5>
                    <div className="crayon">
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
        <Footer/>
      </div>
    
  );
}

export default Home;
