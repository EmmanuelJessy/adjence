import React, { useState, useEffect, useRef } from "react";
import logo from "../../src/assets/logo.png";
import dev from "../../src/assets/programmer.png";
import com from "../../src/assets/com.png";
import design from "../../src/assets/design.png";
import data from "../../src/assets/database.png";
import CreateIcon from "@mui/icons-material/Create";
import BoltIcon from "@mui/icons-material/Bolt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [service, setService] = useState(false);
  const [techno, setTechno] = useState(false);


  const affichez1 = () => {
    setService(!service);
  };

  const affichez2 = () => {
    setTechno(!techno);
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
  useEffect(() => {
    const handleScroll = () => {
      const presentation = presentationRef.current;
      const scrollTop = window.scrollY;
      const presentationTop = presentation.offsetTop;
      const presentationHeight = presentation.clientHeight;

      if (
        scrollTop >= presentationTop - window.innerHeight &&
        scrollTop <= presentationTop + presentationHeight
      ) {
        setOpacity(true);
      } else {
        setOpacity(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="accueil">
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
                    <BoltIcon style={{ fill: "black" }} />
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

        <div className="presentation" ref={presentationRef}>
          <div className="founder">
            <div className="photo"></div>
            <div className="nom">
              <h3>
                FONDATEUR
                <br /> DE " ADJENCE "
              </h3>
            </div>
          </div>

          <div className="texte">
            <h2>
              <span>Au fil des années, </span> <br />
              nous avons perfectionné notre expertise en développement logiciel,
              web et stratégie numérique. Prêts à propulser vos projets
              technologiques ? Atteignons ensemble de nouveaux sommets !
            </h2>
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
                 
                </div>
              </div>
              <div className="back">
                <h2>MOBILE DEVELOPPEMENT</h2>

                <div className="mesback">
                  <h4>React Native</h4>
                  <h4>Flutter</h4>
                 
                </div>
              </div>
              <div className="back">
                <h2>CMS</h2>

                <div className="mesback">
                  <h4>Webflow</h4>
                  <h4>WordPress</h4>
                 
                </div>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="indus">
          <h3>Nos domaines</h3>
          <h1>+</h1>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Home;
