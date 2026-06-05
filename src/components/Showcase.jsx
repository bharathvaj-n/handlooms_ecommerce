import React from 'react';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Showcase({ openWhatsApp, filterCategory, setFilterCategory }) {
  const products = [
    {
      id: 1,
      name: "Pollachi Classic Maroon Saree",
      category: "Sarees",
      material: "Premium Combed Cotton",
      price: 2450,
      image: "/saree_festive.png",
      isNew: true,
      color: "Deep Maroon with Gold Zari"
    },
    {
      id: 2,
      name: "Mayilkan Ivory & Forest Saree",
      category: "Sarees",
      material: "Mercerized Soft Cotton",
      price: 2850,
      image: "/saree_daily.png",
      isNew: true,
      color: "Ivory Cream & Forest Green"
    },
    {
      id: 3,
      name: "Thazhampoo Gold Border Saree",
      category: "Sarees",
      material: "Pit Loom Pure Cotton",
      price: 3200,
      image: "/saree_festive.png",
      isNew: false,
      color: "Heritage Maroon & Fine Zari"
    },
    {
      id: 4,
      name: "Vasanth Temple Motif Suit Set",
      category: "Dress Materials",
      material: "Fine Slub Cotton (3pc)",
      price: 1650,
      image: "/dress_material.png",
      isNew: true,
      color: "Deep Maroon Block Print"
    },
    {
      id: 5,
      name: "Anaimalai Checked Lungi",
      category: "Lungis",
      material: "Starch-Free Combed Cotton",
      price: 680,
      image: "/lungi.png",
      isNew: true,
      color: "Forest Green & Maroon Checks"
    },
    {
      id: 6,
      name: "Aliyar Heritage Table Runner",
      category: "Home Textiles",
      material: "Handspun Cotton Weave",
      price: 1250,
      image: "/home_textile.png",
      isNew: false,
      color: "Ivory Linen with Gold Accents"
    }
  ];

  const categories = ["All", "Sarees", "Dress Materials", "Lungis", "Home Textiles"];

  const filteredProducts = filterCategory === "All" 
    ? products 
    : products.filter(p => p.category === filterCategory);

  const scrollLeft = () => {
    const el = document.getElementById('product-carousel-grid');
    if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const el = document.getElementById('product-carousel-grid');
    if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section id="new-arrivals" className="showcase-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">The Latest Weaves</span>
          <h2 className="section-title-luxury" id="showcase-heading">New Arrivals</h2>
          <div className="luxury-divider-gold"></div>
        </div>

        {/* Category Filter Tabs */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            margin: '2rem 0 3rem 0',
            flexWrap: 'wrap' 
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`motif-choice-card ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Wrapper */}
        <div className="showcase-carousel-container">
          {/* Scroll Buttons for Desktop */}
          <div 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              left: '-2.5rem', 
              zIndex: 10,
              display: 'block' 
            }}
            className="carousel-control-btn-left"
          >
            <button 
              className="story-icon-box" 
              style={{ width: '40px', height: '40px', cursor: 'pointer', background: 'var(--color-bg)' }}
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              right: '-2.5rem', 
              zIndex: 10,
              display: 'block' 
            }}
            className="carousel-control-btn-right"
          >
            <button 
              className="story-icon-box" 
              style={{ width: '40px', height: '40px', cursor: 'pointer', background: 'var(--color-bg)' }}
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Scrolling Grid */}
          <div className="showcase-grid" id="product-carousel-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card luxury-card">
                <div className="product-img-area">
                  {product.isNew && <span className="new-arrival-ribbon">New Weave</span>}
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <span className="product-tag">{product.material}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">₹ {product.price.toLocaleString('en-IN')}</div>
                  <button 
                    className="product-wa-btn" 
                    onClick={() => {
                      console.log(`Analytics: Product WhatsApp order clicked for ID ${product.id}`);
                      openWhatsApp(product.name, product.color);
                    }}
                  >
                    <MessageSquare size={14} /> Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="carousel-instructions">
          ← Swipe or scroll to explore all weaves →
        </p>
      </div>
    </section>
  );
}
