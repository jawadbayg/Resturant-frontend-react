import React, { useState } from 'react';
import MenuItemCard from './menuItemCard';
import Popup from './popup';
import './css/menupage.css'; 

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);


  const menuItems = [
    { id: 1, title: 'Beef Burger', price: 9.99, image: '/images/beefb.jpg', description: 'A delicious beef burger with all the fixings.' },
    { id: 2, title: 'Double Patty Beef Burger', price: 11.99, image: '/images/headerburger.jpg', description: 'Twice the beef, twice the taste!' },
    { id: 3, title: 'Chicken Fillet', price: 8.99, image: '/images/chickenfillet.jpg', description: 'Crispy chicken fillet sandwich.' },
    { id: 4, title: 'Extra Saucy Burger', price: 10.99, image: '/images/extras.jpg', description: 'Our burger with extra sauce for extra flavor.' },
    
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="menu-page">
      <div className="container">
        <div className="row">
          {menuItems.map(item => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <MenuItemCard item={item} onClick={handleCardClick} />
            </div>
          ))}
        </div>
      </div>
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
}

export default MenuPage;
