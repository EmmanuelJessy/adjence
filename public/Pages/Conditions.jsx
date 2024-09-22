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
import { useLocation, useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Footer from "../../src/Footer.jsx";
function Conditions() {
  const [digital, setDigital] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const presentationRef = useRef(null);
  const [shadowStyle, setShadowStyle] = useState({
    cercle1: {},
    cercle2: {},
    cercle3: {},
    cercle4: {},
  });

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

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

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
        
      </div>
      
        <div className="secteur">
       
  <div className="terms-container">
    <h1 className="terms-title">Conditions Générales d'Utilisation</h1>
    <p className="terms-intro">
      Bienvenue sur le site d'ADJENCE, votre partenaire en développement
      logiciel, création web, et accompagnement digital. En accédant et
      en utilisant ce site, vous acceptez les conditions suivantes.
      Veuillez les lire attentivement.
    </p>

    <section className="terms-section">
      <h2 className="terms-subtitle">1. Acceptation des Conditions</h2>
      <p className="terms-text">
        En naviguant sur notre site, vous reconnaissez avoir pris
        connaissance des présentes conditions et vous engagez à les
        respecter. Si vous n'êtes pas d'accord avec ces conditions, nous
        vous prions de ne pas utiliser nos services.
      </p>
    </section>

    <section className="terms-section">
      <h2 className="terms-subtitle">2. Utilisation des Services</h2>
      <p className="terms-text">
        Tous les contenus, informations, et services proposés sur notre
        site sont destinés à un usage personnel et professionnel. Vous
        vous engagez à ne pas les détourner à des fins illégales ou non
        autorisées. ADJENCE se réserve le droit de suspendre ou de
        mettre fin à votre accès à tout moment, en cas de non-respect de
        ces conditions.
      </p>
    </section>

    <section className="terms-section">
      <h2 className="terms-subtitle" id="confidentialite">
        3. Propriété Intellectuelle
      </h2>
      <p className="terms-text">
        L’ensemble des éléments de ce site (textes, images, logos,
        logiciels, etc.) est protégé par les lois sur la propriété
        intellectuelle. Toute reproduction, distribution, ou
        modification sans autorisation écrite préalable d'ADJENCE est
        strictement interdite.
      </p>
    </section>

    <section className="terms-section">
      <h2 className="terms-subtitle">4. Confidentialité des Données</h2>
      <p className="terms-text">
        En utilisant nos services, vous acceptez que certaines
        informations personnelles soient collectées et utilisées
        conformément à notre Politique de Confidentialité. Nous nous
        engageons à protéger vos données et à respecter votre vie
        privée.
      </p>
    </section>

    <section className="terms-section">
      <h2 className="terms-subtitle">5. Responsabilité</h2>
      <p className="terms-text">
        ADJENCE ne saurait être tenue responsable des dommages directs
        ou indirects résultant de l'utilisation du site, notamment en
        cas de bugs, d'interruptions, ou de virus. L’utilisateur est
        seul responsable de son équipement et des mesures de protection
        prises.
      </p>
    </section>

    <section className="terms-section">
      <h2 className="terms-subtitle">6. Modification des Conditions</h2>
      <p className="terms-text">
        ADJENCE se réserve le droit de modifier ou d’actualiser ces
        conditions à tout moment, sans préavis. Nous vous conseillons de
        consulter régulièrement cette page pour vous tenir informé des
        éventuelles mises à jour.
      </p>
    </section>

    <section className="terms-section">
      <h2 className="terms-subtitle">7. Loi Applicable</h2>
      <p className="terms-text">
        Ces conditions sont régies par les lois en vigueur dans notre
        juridiction. En cas de litige, les parties s'engagent à
        rechercher une solution à l'amiable avant d'envisager toute
        action judiciaire.
      </p>
    </section>

    <p className="terms-footer">
      Si vous avez des questions ou des préoccupations concernant ces
      conditions, n’hésitez pas à nous contacter via notre formulaire de
      contact.
    </p>
    <div className="centrage">
      <div className="mail">
        <div className="contact" onClick={contact}>
          <h5 style={{ color: "white" }}>PAR MESSAGE</h5>
          <div className="crayon">
            <div className="blink-animation">
              <CreateIcon style={{ fontSize: "1.5vw" }} />
            </div>
          </div>
        </div>
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
     
      <Footer />
    </div>
  );
}

export default Conditions;
