import back from "../../src/assets/back.png";
import logo from "../../src/assets/a.png";
import adjence from "../../src/assets/adjence.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Home() {
  return (
    <div className="home">
      <div className="bg">
        <img src={back} alt="" />
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
                <ExpandMoreIcon />
              </div>
            </div>

            <div className="titleservice">
              <h2>Stratégie numérique intégrée</h2>

              <div className="sous_titre">
                <hr />
                <h4>La vision</h4>
              </div>
            </div>
          </div>
          <div className="deux">
            <div className="icone">
              <div className="cercle">
                <ExpandMoreIcon />
              </div>
            </div>

            <div className="titleservice">
              <h2>Développement de solutions logicielles sur mesure </h2>

              <div className="sous_titre">
                <hr />
                <h4>Des outils sur mésure</h4>
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
            <h3>Concept</h3>
            <h2>Optimisation de la perfomance digitale</h2>
            <p>
              L'optimisation continue est essentielle pour garantir des
              résultats durables. Nous analysons vos performances numériques,
              ajustons vos campagnes en fonction de vos objectifs et optimisons
              vos stratégies pour améliorer votre taux de conversion, tout en
              maximisant la croissance et la satisfaction de vos clients.
            </p>

            <div className="motcles">
                <div className="cles">
                  Optimisation
                </div>
                <div className="cles">
                  Croissance
                </div>
                <div className="cles">
                  Performance
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
