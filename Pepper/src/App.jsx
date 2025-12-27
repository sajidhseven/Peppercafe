import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeTab, setActiveTab] = useState('Breakfast');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  const reviews = [
    { id: 1, text: "Fantastic food and great coffee! Highly recommended.", author: "Sarah J." },
    { id: 2, text: "Love the friendly staff and cozy vibe. Perfect spot for brunch.", author: "Tom R." },
    { id: 3, text: "Great place for the family. Kids loved the playground nearby.", author: "Emily W." },
    { id: 4, text: "Best almond croissant I've ever had! Will definitely be back.", author: "Michael B." },
    { id: 5, text: "A hidden gem in Donnybrook. The atmosphere is just perfect.", author: "Jessica L." },
    { id: 6, text: "Delicious lunch options and very reasonably priced.", author: "David K." }
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header data-aos="fade-down" data-aos-duration="1000">
        <div className="container header-container">
          <div className="logo">
            <img src="/assets/logo.png" alt="Peppercino Cafe" style={{ height: '80px' }} />
          </div>

          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><a href="#home" className="active" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-contact desktop-only">
            <span>Call Us: 03 8400 9044</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
            <h2>Fresh Coffee &<br />Comfort Food<br />in Donnybrook</h2>
            <p>Your neighbourhood café for<br />breakfast, lunch & great vibes.</p>
            <div className="hero-buttons">
              <a href="/Peppercino-Menu-Winter.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-pink">View Menu</a>
              <a href="#location" className="btn btn-blue">Get Directions</a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="400">
            <img src="/assets/hero-coffee.jpg" alt="Fresh Coffee and Croissant" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about" className="welcome">
        <div className="container welcome-container">
          <div className="welcome-image" data-aos="fade-right">
            <img src="peppercafe.jpg" alt="Cafe Interior" style={{ borderRadius: '20px', width: '100%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="welcome-text" data-aos="fade-up">
            <h3>Welcome <span className="highlight">to</span> Peppercino Cafe</h3>
            <p>A cozy café in the heart of Donnybrook. Serving delicious coffee, breakfast, and lunch in a family-friendly setting.</p>

            <div className="features">
              <div className="feature-item">
                <div className="icon-circle pink-icon"><i className="fas fa-mug-hot"></i></div>
                <span>Freshly Brewed Coffee</span>
              </div>
              <div className="feature-item">
                <div className="icon-circle blue-icon"><i className="fas fa-utensils"></i></div>
                <span>All-Day Breakfast & Lunch</span>
              </div>
              <div className="feature-item">
                <div className="icon-circle pink-icon"><i className="fas fa-users"></i></div>
                <span>Family Friendly Atmosphere</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Above Section */}
      <section className="step-above">
        <div className="container">
          <h3 className="section-title" data-aos="fade-up">A STEP ABOVE THE REST</h3>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
            We pride ourselves on providing great value, fantastic coffee, and wholesome, delicious food that will make you feel right at home.
          </p>

          <div className="feature-list">

            {/* Row 1: Image Left, Text Right */}
            <div className="feature-row" data-aos="fade-up">
              <div className="feature-image">
                <img src="/beautifulblends.jpg" alt="Beautiful Blends" />
              </div>
              <div className="feature-text">
                <h4>Beautiful Blends</h4>
                <p>From perfectly roasted coffee to beautiful herbal teas, chai lattes and more. We’re proud to say our beverages are the best in the local area!</p>
              </div>
            </div>

            {/* Row 2: Text Left, Image Right */}
            <div className="feature-row reverse" data-aos="fade-up">
              <div className="feature-image">
                <img src="/garteplates.jpg" alt="Great Plates" />
              </div>
              <div className="feature-text">
                <h4>Great Plates</h4>
                <p>Our menu features a variety of cuisines to ensure everyone finds something that will surely become their 'go to'!</p>
              </div>
            </div>

            {/* Row 3: Image Left, Text Right */}
            <div className="feature-row" data-aos="fade-up">
              <div className="feature-image">
                <img src="/playground.jpg" alt="Playground" />
              </div>
              <div className="feature-text">
                <h4>Playground</h4>
                <p>We're perfectly located opposite Peppercorn Park and Playground, sit back and relax with a coffee while the kids play.</p>
              </div>
            </div>

            {/* Row 4: Text Left, Image Right */}
            <div className="feature-row reverse" data-aos="fade-up">
              <div className="feature-image">
                <img src="/community.jpg" alt="Community" />
              </div>
              <div className="feature-text">
                <h4>Community</h4>
                <p>We're located in the heart of Peppercorn Hill estate in Donnybrook and have become a hub for residents and local visitors alike to connect and make memories.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h3 className="section-title" data-aos="fade-up">Our Menu</h3>
          <div className="menu-tabs" data-aos="fade-up" data-aos-delay="100">
            {['Breakfast', 'Lunch', 'Drinks', 'Kids'].map((tab) => (
              <span
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="menu-grid">
            {/* Card 1 */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="200">
              <img src="/assets/avocado-toast.jpg" alt="Avocado Toast" />
              <div className="card-content">
                <div className="card-header">
                  <h4>Avocado Toast</h4>
                  <span className="price">$16.50</span>
                </div>
                <p>Smashed avocado, poached egg, crumbled feta on sourdough.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="300">
              <img src="/assets/burger.jpg" alt="Classic Burger" />
              <div className="card-content">
                <div className="card-header">
                  <h4>Classic Burger</h4>
                  <span className="price">$18.00</span>
                </div>
                <p>Double beef patty, cheese, lettuce, tomato with chips.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="400">
              <img src="/assets/pancakes.jpg" alt="Berry Pancakes" />
              <div className="card-content">
                <div className="card-header">
                  <h4>Berry Pancakes</h4>
                  <span className="price">$17.00</span>
                </div>
                <p>Stack of pancakes, fresh berries, maple syrup & ice cream.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="500">
              <img src="/assets/iced-coffee.jpg" alt="Iced Coffee" />
              <div className="card-content">
                <div className="card-header">
                  <h4>Iced Coffee</h4>
                  <span className="price">$7.00</span>
                </div>
                <p>Espresso, milk, ice cream topped with whipped cream.</p>
              </div>
            </div>
          </div>

          <div className="center-btn" data-aos="fade-up">
            <a href="/Peppercino-Menu-Winter.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-pink btn-large">View Full Menu</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h3 className="section-title" data-aos="fade-up">What Our Customers Say</h3>

          <div className="marquee-wrapper">
            <div className="marquee-content">
              {/* Duplicate the reviews array to create infinite scroll effect */}
              {[...reviews, ...reviews].map((review, index) => (
                <div key={`${review.id}-${index}`} className="testimonial-card-marquee">
                  <div className="stars">★★★★★</div>
                  <p>"{review.text}"</p>
                  <div className="author">— {review.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container footer-container">
          <div className="visit-us" data-aos="fade-right">
            <h3>WE’LL SEE YOU SOON</h3>
            <p>We’re located next door to the Peppercorn Hill Land Sales Office.</p>
            <p>34A ALBURY AVENUE<br />DONNYBROOK, 3064</p>
            <p>Open Hours: 7 DAYS, 8:00AM – 4:00PM</p>
            <p>For enquiries please contact info@peppercinocafe.com.au</p>
            <p>Reservations and bookings</p>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>03 8400 9044</p>
            <p>
              <i className="fab fa-instagram"></i> peppercinocafe<br />
              <i className="fab fa-facebook"></i> peppercinocafe
            </p>
          </div>
          <div className="moments" data-aos="fade-up">
            <h3>Moments at Peppercino</h3>
            <div className="gallery-preview">
              <img src="/assets/avocado-toast.jpg" className="mini-img" alt="Gallery 1" />
              <img src="/assets/burger.jpg" className="mini-img" alt="Gallery 2" />
            </div>
          </div>
          <div className="map-area" data-aos="fade-left">
            <div className="map-placeholder">
              <span><i className="fas fa-map-marker-alt"></i> View on Map</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
