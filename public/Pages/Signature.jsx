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
import SignatureCanvas from "react-signature-canvas";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Footer from "../../src/Footer";

function Signature() {
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

  // Réinitialisation du style lors de la sortie du curseur

  // Alternance entre 'LE DIGITAL' et 'LE WEB'
  useEffect(() => {
    const toggleDigital = () => {
      setDigital((prevDigital) => !prevDigital);
    };

    const interval = setInterval(toggleDigital, 3000);
    return () => clearInterval(interval);
  }, []);

  // Gestion de l'apparition du texte avec l'effet d'opacité

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

  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [fini, setFini] = useState(false);

  const [signatures, setSignatures] = useState([]);

  useEffect(() => {
    const fetchSignatures = async () => {
      const storage = getStorage();
      const listRef = ref(storage, "/signatures"); // Dossier où les signatures sont stockées

      try {
        const res = await listAll(listRef); // Liste tous les fichiers dans le dossier "signatures"
        const urls = await Promise.all(
          res.items.map((item) => getDownloadURL(item))
        );
        setSignatures(urls); // Mettre à jour l'état avec les URLs des signatures
      } catch (error) {
        console.error("Erreur lors de la récupération des signatures :", error);
      }
    };

    fetchSignatures();
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.1, // 10% visible avant déclenchement
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view"); // Ajouter une classe pour déclencher l'animation
        }
      });
    }, options);

    const items = document.querySelectorAll(".signature-item");
    items.forEach((item) => observer.observe(item)); // Observer chaque signature

    return () => {
      items.forEach((item) => observer.unobserve(item)); // Nettoyage
    };
  }, [signatures]);

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
                MERCI POUR VOTRE CONTRIBUTION.{" "}
                {!digital ? (
                  <span className="animate-text">
                    {"A".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"BIENTÔT".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                ) : (
                  <span className="animate-text2">
                    {"A".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"TRES".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}{" "}
                    {"VITE".split("").map((char, index) => (
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
                      JETTE UN COUP D'OEIL
                      <br />
                      SUR LE MUR
                    </h3>
                  </div>
                </div>

                <div className="talk">
                  <div className="let" onClick={scrollToTarget}>
                    <h5 ref={targetRef}>JE VEUX LE VOIR 😊 ! </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="affichmur">
          {signatures.map((url, index) => (
            <img
              key={index} // Add the unique key prop here
              src={url}
              alt={`Signature ${index}`}
              className="signature-image"
            />
          ))}
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

export default Signature;
