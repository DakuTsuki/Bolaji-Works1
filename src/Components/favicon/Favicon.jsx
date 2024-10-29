import React from 'react';
import faviconImage from '../../assets/image/logo.png'; // Ensure this path points to your PNG file

const Favicon = () => {
  React.useEffect(() => {
    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.type = 'png'
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = faviconImage; // Use the PNG image
  }, []);

  return null;
};

export default Favicon;