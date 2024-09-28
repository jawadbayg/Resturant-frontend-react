import React, { useEffect } from 'react';
import './css/popup.css'; // Make sure to create this CSS file for styling

const Popup = ({ item, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={`popup-overlay show`}>
      <div className="popup">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="popup-img-container">
          <img src={item.image} alt={item.title} className="popup-img"/>
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="price">${item.price.toFixed(2)}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default Popup;
