import React, { useEffect, useState } from 'react';
import { FaRocket, FaCode, FaBolt, FaShieldAlt, FaChartLine, FaGlobe, FaUsers, FaStar, FaPlayCircle, FaVideo, FaArrowRight, FaTwitter, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter
  useEffect(() => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const increment = target / 200;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current) + (counter.textContent.includes('.') ? '%' : '+');
          setTimeout(updateCounter, 1);
        } else {
          counter.textContent = target + (counter.textContent.includes('.') ? '%' : '+');
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
        }
      });
      
      observer.observe(counter);
    });
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <FaRocket />
              <span>Nexus</span>
            </div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#stats">Stats</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-buttons">
              <button className="btn btn-secondary">Sign In</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - CENTERED TEXT ADDED */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            {/* LEFT SIDE TEXT */}
            <div className="hero-text">
              <div className="tag">
                <span className="pulse-dot"></span>
                ✨ Revolutionizing Digital Experience
              </div>
              
              {/* CENTERED MAIN HEADING */}
              <div className="hero-center">
                <h1 className="hero-title">
                  Build <span className="gradient-text">Amazing</span> 
                  <br />
                  Digital Experiences
                </h1>
                
                <p className="hero-subtitle">
                  We help businesses transform ideas into reality with our cutting-edge platform.
                  Join 10,000+ companies accelerating their digital transformation journey.
                </p>
                
                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={() => alert('Starting free trial!')}>
                    <FaPlayCircle /> Start Free Trial
                  </button>
                  <button className="btn btn-secondary" onClick={() => alert('Playing demo!')}>
                    <FaVideo /> Watch Demo
                  </button>
                </div>
                
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-value">10K+</div>
                    <div className="stat-label">Happy Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">99.9%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">24/7</div>
                    <div className="stat-label">Support</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* RIGHT SIDE CARD */}
            <div className="hero-card">
              <div className="card-header">
                <div>
                  <h3><FaChartLine /> Performance Dashboard</h3>
                  <p>Real-time Analytics</p>
                </div>
                <div className="badge">
                  <FaStar /> +42.3%
                </div>
              </div>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-number-small">2.4s</div>
                  <div className="stat-label">Load Time</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🛡️</div>
                  <div className="stat-number-small">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-number-small">15K</div>
                  <div className="stat-label">Active Users</div>
                </div>
              </div>
              <div className="progress-bars">
                <div className="progress-bar" style={{ width: '80%' }}>
                  <span>Performance</span>
                  <span>80%</span>
                </div>
                <div className="progress-bar" style={{ width: '65%' }}>
                  <span>Adoption</span>
                  <span>65%</span>
                </div>
                <div className="progress-bar" style={{ width: '90%' }}>
                  <span>Satisfaction</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything You Need to Succeed</h2>
            <p className="section-subtitle">Packed with powerful features designed to accelerate your growth</p>
          </div>
          <div className="features-grid">
            {[
              { icon: <FaCode />, title: 'Clean Code', desc: 'Well-structured code with best practices' },
              { icon: <FaBolt />, title: 'Lightning Fast', desc: 'Optimized for maximum performance' },
              { icon: <FaShieldAlt />, title: 'Secure', desc: 'Enterprise-grade security' },
              { icon: <FaChartLine />, title: 'Scalable', desc: 'Grows with your business' },
              { icon: <FaGlobe />, title: 'Global CDN', desc: 'Worldwide delivery network' },
              { icon: <FaUsers />, title: 'Team Ready', desc: 'Advanced collaboration tools' }
            ].map((feature, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <a href="#">Learn more <FaArrowRight /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" id="stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '10000', text: 'Happy Customers', suffix: '+' },
              { number: '99.9', text: 'Uptime Percentage', suffix: '%' },
              { number: '150', text: 'Countries Served', suffix: '+' },
              { number: '24', text: '/7 Support', suffix: '' }
            ].map((stat, i) => (
              <div className="stat-box" key={i}>
                <div className="stat-number" data-count={stat.number}>0{stat.suffix}</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Hear from companies who transformed their business</p>
          </div>
          <div className="testimonial-grid">
            {[
              { text: "This platform transformed our workflow. Productivity increased by 200% in first month.", name: "Sarah Johnson", role: "CEO, TechCorp" },
              { text: "Best investment we've made. Revenue grew 3x in 6 months.", name: "Michael Chen", role: "Product Director" },
              { text: "Incredible results from day one. Intuitive interface made adoption seamless.", name: "Emma Davis", role: "CTO, Digital Solutions" }
            ].map((testimonial, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-content">"{testimonial.text}"</div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Nexus</h3>
              <p>Building the future of digital experiences</p>
              <div className="social-links">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaDribbble /></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:hello@nexus.com">hello@nexus.com</a></li>
                <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;