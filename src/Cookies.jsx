import React, { useState, useEffect } from 'react';

const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Stocke que l'utilisateur a accepté les cookies
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="cookies-banner">
          <div className="cookies-content">
          <p>
  Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site. En continuant à naviguer, vous acceptez notre politique en matière de cookies.
</p>
            <button onClick={handleAcceptCookies}>Accept Cookies</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesBanner;
