import React, { useState, useEffect, useRef } from "react";
import logo from "../../src/assets/logo.png";

import { getStorage, ref, uploadString } from "firebase/storage"; // Import correct pour Firebase v9
import { storage, db } from "../../src/firebase";
import { collection, addDoc } from "firebase/firestore"; // Importer les fonctions Firestore

import CreateIcon from "@mui/icons-material/Create";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import NotificationBanner from "../../src/Banner";
import Footer from "../../src/Footer";

function Mur() {
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
    "❝ Chez Adjence, \n chaque membre de notre équipe incarne l'excellence, la passion et l'innovation. Ensemble, nous ne faisons pas que développer des solutions, nous construisons des ponts vers l'avenir de nos clients. Notre force réside dans la synergie de nos talents, qui transforme chaque défi technologique en une opportunité de réussite. ❞";
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
  const contact = () => {
    navigate("/contactez-nous");
  };

  const conditions = () => {
    navigate("/conditions&confidentialites");
  };

  const [rating, setRating] = useState(0); // Stocke la note actuelle
  const [hover, setHover] = useState(0);

  const [sign, setSign] = useState();
  const [showBanner, setShowBanner] = useState(false);

  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleSave = async () => {
    if (rating === 0) {
      setShowBanner(true);
      // Afficher la bannière si pas de vote
      return;
    }

    try {
      // Sauvegarder le vote (nombre d'étoiles) dans Firestore
      const voteData = {
        stars: rating,
        date: new Date().toISOString(),
      };

      const newVoteRef = await addDoc(collection(db, "Votes"), voteData);

      // Sauvegarder la signature dans Firebase Storage (si nécessaire)
      if (sign && !sign.isEmpty()) {
        const dataURL = sign.toDataURL();
        const fileName = `signatures/${new Date().getTime()}.png`;

        const storageRef = ref(storage, fileName);
        await uploadString(storageRef, dataURL, "data_url");
      } else {
      }
      navigate("/remerciements");
    } catch (error) {}
  };

  const [penColor, setPenColor] = useState("black");
  const handleClear = () => {
    if (sign) {
      sign.clear(); // Efface la signature
    }
  };

  const changePenColor = (color) => {
    setPenColor(color); // Changer la couleur du stylo
  };

  return (
    <div className="accueil">
      <div className="home">
        <div className={`entete ${isFixed ? "fixed" : ""}`} ref={headerRef}>
          <img src={logo} alt="Logo" onClick={home} />
          <ul>
            <li onClick={home}>ACCUEIL</li>
            <hr />

            <li onClick={services}>NOS SERVICES</li>
            <hr />

            <li onClick={mur} style={{ color: "#fdc448" }}>
              LE MUR
            </li>
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
                IMMORTALISEZ L'INSTANT AVEC
                {!digital ? (
                  <span className="animate-text">
                    {"UN".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"AVIS".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                ) : (
                  <span className="animate-text2">
                    {"UNE".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"SIGNATURE".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                )}
              </h1>
              <hr />

              <div className="talks">
                <div className="years">
                  <div className="exp">
                    <h3>
                      LAISSEZ UN AVIS
                      <br />+ UNE SIGNATURE SUR LE MUR ?
                    </h3>
                  </div>
                </div>

                <div className="talk">
                  <div className="let" onClick={scrollToTarget}>
                    <h5 ref={targetRef}>D'ACCORD JE SIGNE 😊 ! </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signature">
          <div className="avis">
            <div>
              <h2>
                Comment avez-vous trouvé cette experience sur notre site ?
              </h2>
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="signons">
              <NotificationBanner
                message="Veuillez donner une note avant d'enregistrer."
                show={showBanner}
                onClose={handleCloseBanner}
              />
              <h2>Signez-ici</h2>
              <div className="emargement">
                <SignatureCanvas
                  canvasProps={{
                    width: 500,
                    height: 200,
                    className: "sigCanvas",
                  }}
                  penColor={penColor}
                  ref={(data) => setSign(data)}
                />
              </div>
              <div className="talk2" onClick={handleSave}>
                <div className="let">
                  <h5>J'ENREGISTRE 😊 !</h5>
                </div>
              </div>
            </div>

            <div className="couleurs">
              <div className="col">
                <div
                  className="bleu"
                  onClick={() => changePenColor("blue")}
                ></div>
                <div
                  className="noir"
                  onClick={() => changePenColor("black")}
                ></div>
              </div>
              <div className="talk2" onClick={handleClear}>
                <div className="let" style={{ backgroundColor: "white" }}>
                  <h5>EFFACER </h5>
                </div>
              </div>
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
                <div className="contact" onClick={contact}>
                  <h5>PAR MESSAGE</h5>
                  <div className="crayon">
                    <div className="blink-animation">
                      <CreateIcon style={{ fontSize: "1.5vw" }} />
                    </div>
                  </div>
                </div>
                <div
                  className="contact"
                  onClick={contact}
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
      <Footer />
    </div>
  );
}

export default Mur;
