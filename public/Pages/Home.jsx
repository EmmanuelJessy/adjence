import back from "../../src/assets/back.png";
import logo from "../../src/assets/a.png";
import adjence from "../../src/assets/adjence.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Home() {
  return (
    <div className="home">
      <div className="bg">
        {/* <img src={back} alt="" /> */}
      </div>

      <div className="header">
        <div className="entete">
          <ul>
            <li>Vos défis</li>
            <img src={logo} alt="" />
            <li>Nos solutions</li>
            <li>Le contact</li>
          </ul>
        </div>

        <div className="adjence">
          <img src={adjence} alt="" />
        </div>
      </div>

      <div className="eco">
        <h1>
          Créez un écosystème digital <br /> <span>PERFORMANT</span>
        </h1>
      </div>
      <div className="services">
        <div className="service1">
          <div className="un">
            <div className="icone">
              <div className="cercle">
                <ExpandMoreIcon style={{ fontSize: "2vw" }} />
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
                  Nous créons des stratégies digitales sur mesure, adaptées aux
                  besoins spécifiques de votre entreprise. Grâce à un audit
                  approfondi et une analyse précise des données, nous
                  définissons des objectifs clairs et des plans d'action
                  efficaces pour maximiser votre impact digital.
                </p>
              </div>
            </div>
          </div>
          <div className="deux">
            <div className="icone">
              <div className="cercle">
                <ExpandMoreIcon style={{ fontSize: "2vw" }} />
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
                  Nous concevons des applications web, mobiles et des solutions
                  logicielles personnalisées, adaptées à vos processus métiers.
                  En intégrant des technologies modernes, nous vous aidons à
                  automatiser vos opérations et à optimiser l'efficacité de vos
                  équipes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service2">
          <div className="titreservice2">
            <img src={back} alt="" />
            <h1>O</h1>
          </div>

          <div className="desc">
            <h3>Concept "O"</h3>
            <h2>Optimisation de la perfomance digitale</h2>
            <p>
              L'optimisation continue est essentielle pour garantir des
              résultats durables. Nous analysons vos performances numériques,
              ajustons vos campagnes en fonction de vos objectifs et optimisons
              vos stratégies pour améliorer votre taux de conversion, tout en
              maximisant la croissance et la satisfaction de vos clients.
            </p>

            <div className="motcles">
              <div className="cles">Optimisation</div>
              <div className="cles">Croissance</div>
              <div className="cles">Performance</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tente">
        <h2>Ça vous tente ?</h2>
        <button>Laissez-nous un message</button>
      </div>

      <div className="eco">
        <h1>
          Boostez votre marque
          <br /> <span>AU SOMMET</span>
        </h1>
      </div>

      <div className="services1">
        <div className="top1">
          <div className="cercle">
            <h3>01</h3>
          </div>
          <div className="description2">
            <h2>Vision et Mission</h2>
            <h4>Définir l'avenir de votre Marque</h4>
          </div>
        </div>
        <div className="top2">
          <div className="cercle">
            <h3>02</h3>
          </div>
          <div className="description2">
            <h2>Analyse de marché</h2>
            <h4>Comprendre Votre Position</h4>
          </div>
        </div>
        <div className="top3">
          <div className="cercle">
            <h3>03</h3>
          </div>

          <div className="description2">
            <h2>
              Stratégie de <br /> communication
            </h2>
            <h4>Engager et Convertir</h4>
          </div>
        </div>
      </div>
      <div className="servicesuite">
        <div className="suite1">
          <p>
            Explorons comment clarifier la vision et la mission de votre
            entreprise pour orienter vos efforts de marque et aligner toutes vos
            actions sur un objectif commun.
          </p>
        </div>
        <div className="suite2">
          <p>
            Analysons des tendances du marché, la concurrence et le profil de
            votre clientèle cible pour adapter votre stratégie de marque et vous
            démarquer efficacement.
          </p>
        </div>
        <div className="suite3">
          <p>
            Développons une stratégie de communication claire pour promouvoir
            votre marque, en engageant votre audience et transformant les
            prospects en clients fidèles.
          </p>
        </div>
      </div>
      <div className="tente">
        <h2>
          Ne cherchez plus une agence, <span>L’ADJENCE</span> est là !!!
        </h2>
        <button>Laissez-nous un message</button>
      </div>

      <div className="footer">
        {/* <img src={back} alt="" /> */}

        <img src={adjence} alt="" />

        <div className="entete">
          <ul>
          <li>Vos défis</li>
            
            <li>Nos solutions</li>
            <li>Le contact</li>
          </ul>
        </div>

        <h4>Tous droits réservés -- <span>ADJENCE</span></h4>
      </div>
    </div>
  );
}

export default Home;
