export default function(){
    return(
        <div>
            <div className="homesection">
<div className="cookies">
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
</div>

<div className="home">
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
</div>
        </div>
    )
}