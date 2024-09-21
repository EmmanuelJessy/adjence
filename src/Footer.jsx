import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const conditions = () => {
    navigate("/conditions&confidentialites");
  };
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


  const goToPageAndScroll = () => {
    navigate('/conditions&confidentialites', { state: { scrollTo: 'confidentialite' } });
  };
  
  return (
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
              <h2>CONCEPTION</h2>

              <div className="mesdesign">
                <h4>Conception de sites Web</h4>
                <h4>Conception UI/UX</h4>
                <h4>Conception UI/UX Responsive</h4>
                <h4>Conception d'applications mobiles</h4>
                <h4>Conception de pages d'atterrissage</h4>
                <h4>Conception de sites pour SaaS</h4>
                <h4>Branding pour Startups</h4>
                <h4>Refonte de sites Web</h4>
                <h4>Rebranding</h4>
              </div>
            </div>
            <div className="design">
              <h2>DEVELOPPEMENT</h2>

              <div className="mesdesign">
                <h4>Développement de produits logiciels</h4>
                <h4>Développement Web</h4>
                <h4>Développement de CMS</h4>
                <h4>Développement MVP</h4>
                <h4>Développement d'applications Web</h4>
                <h4>Développement d'applications mobiles</h4>
                <h4>Développement back-end</h4>
                <h4>Développement front-end</h4>
                <h4>Développement de portails Web</h4>
              </div>
            </div>
            <div className="design">
              <h2>MARKETING</h2>

              <div className="mesdesign">
                <h4>Optimisation pour les moteurs de recherche (SEO)</h4>
                <h4>SEO local</h4>
                <h4>SEO technique</h4>
                <h4>Audit SEO</h4>
                <h4>Audit technique</h4>
                <h4>Optimisation du taux de conversion</h4>
                <h4>Consulting GA4</h4>
                <h4>Marketing de contenu</h4>
                <h4>Design pour les réseaux sociaux</h4>
                <h4>Design de Pitch Deck</h4>
                <h4>Lancement sur Product Hunt</h4>
                <h4></h4>
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
              <h2>DEVELOPPEMENT MOBILE</h2>

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
                <h4>Développement de logiciels de santé</h4>
                <h4>Consulting IT pour la santé</h4>
                <h4>Développement d'applications santé</h4>
                <h4>Conception UI/UX pour la santé</h4>
                <h4>Applications médicales pour patients</h4>
                <h4>Test de logiciels de santé</h4>
                <h4>Développement d'applications de télémédecine</h4>
              </div>
            </div>
            <div className="ind">
              <h2>ÉDUCATION</h2>

              <div className="mesind">
                <h4>Développement de logiciels éducatifs</h4>
                <h4>Développement d'applications pour l'éducation</h4>
                <h4>Services de développement LMS</h4>
                <h4>Développement d'applications d'apprentissage en ligne</h4>
              </div>
            </div>

            <div className="ind">
              <h2>FINANCE</h2>

              <div className="mesind">
                <h4>Développement de logiciels financiers</h4>
                <h4>Conception de sites Web pour services financiers</h4>
                <h4>Développement d'applications financières mobiles</h4>
                <h4>Développement d'applications bancaires</h4>
                <h4>Développement d'applications de paiement</h4>
              </div>
            </div>

            <div className="ind">
              <h2>TRANSPORT</h2>

              <div className="mesind">
                <h4>Développement de logiciels de transport</h4>
                <h4>Développement d'applications logistiques</h4>
                <h4>Conception de sites pour la logistique</h4>
                <h4>Logiciels de gestion des transports</h4>
              </div>
            </div>
            <div className="ind">
              <h2>MACHINE LEARNING & IA</h2>

              <div className="mesind">
                <h4>Services de consulting IA</h4>
                <h4>Services de développement IA</h4>
                <h4>Intégration IA</h4>
                <h4>Développement de chatbots IA</h4>
                <h4>Intégration de ChatGPT</h4>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />

      <div className="copywrite">
        <h4>© Adjence - Tous droits réservés</h4>

        <ul>
          <div className="soulign">
            <li>Gestion des cookies</li>
            <hr />
          </div>
          <div className="soulign" onClick={conditions}>
            <li>Conditions d'utilisation</li>
            <hr />
          </div>
          <div className="soulign" onClick={goToPageAndScroll}>
            <li>Confidentialité</li>
            <hr />
          </div>
        </ul>
      </div>
    </div>
  );
}
