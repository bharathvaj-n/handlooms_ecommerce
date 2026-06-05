import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Collections({ setFilterCategory }) {
  const collectionsList = [
    {
      id: 'festive-saree',
      name: 'Festive Sarees',
      count: '24 designs',
      image: '/saree_festive.png',
      category: 'Sarees'
    },
    {
      id: 'daily-saree',
      name: 'Daily Wear',
      count: '18 designs',
      image: '/saree_daily.png',
      category: 'Sarees'
    },
    {
      id: 'dress-material',
      name: 'Dress Materials',
      count: '15 designs',
      image: '/dress_material.png',
      category: 'Dress Materials'
    },
    {
      id: 'home-textile',
      name: 'Home Textiles',
      count: '12 designs',
      image: '/home_textile.png',
      category: 'Home Textiles'
    }
  ];

  const handleCollectionClick = (category) => {
    setFilterCategory(category);
    const element = document.getElementById('new-arrivals');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="collections-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Exquisite Handwoven Offerings</span>
          <h2 className="section-title-luxury">The Collections</h2>
          <div className="luxury-divider-gold"></div>
        </div>

        <div className="collections-grid">
          {collectionsList.map((col) => (
            <div 
              key={col.id} 
              className="collection-card luxury-card"
              onClick={() => handleCollectionClick(col.category)}
              style={{ cursor: 'pointer' }}
            >
              <div className="collection-img-box">
                {col.image ? (
                  <img src={col.image} alt={col.name} loading="lazy" />
                ) : (
                  <div className="collection-shimmer-placeholder"></div>
                )}
              </div>
              <div className="collection-details">
                <div>
                  <h3 className="collection-name">{col.name}</h3>
                  <span className="collection-pieces">{col.count}</span>
                </div>
                <span className="collection-explore-link">
                  Explore <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
