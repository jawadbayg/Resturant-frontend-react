import React from 'react';

const MenuItemCard = ({ item, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(item)}>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItemCard;
