import React, { useEffect } from 'react';

const NotificationBanner = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // La bannière disparaît après 3 secondes
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`notification-banner ${show ? 'show' : 'hide'}`}>
      {message}
    </div>
  );
};

export default NotificationBanner;
