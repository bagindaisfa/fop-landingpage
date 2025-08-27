import { useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import MainContent from './components/MainContent';

// Check if under construction mode is enabled
const isUnderConstruction = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';

function App() {
  useEffect(() => {
    if (!isUnderConstruction) return;
    
    const animate = () => {
      const icon = document.querySelector('.construction-icon') as HTMLElement;
      if (icon) {
        icon.style.transform = 'rotate(5deg)';
        setTimeout(() => {
          icon.style.transform = 'rotate(-5deg)';
          setTimeout(() => {
            icon.style.transform = 'rotate(0deg)';
          }, 300);
        }, 300);
      }
    };
    
    const interval = setInterval(animate, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isUnderConstruction) {
    return (
      <div className="construction-container">
        <div className="construction-content">
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Field of Paradise Logo" 
              className="logo"
            />
          </div>
          
          <div className="construction-icon">🚧</div>
          
          <h1>Under Construction</h1>
          <p className="construction-text">
            Our website is currently under construction. We're working hard to bring you an amazing experience.
          </p>
          
          <div className="social-links">
            <a href="https://www.instagram.com/fieldofparadise.padel/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://maps.app.goo.gl/NyBdYsxWFnz9rVHT9?g_st=ipc" target="_blank" rel="noopener noreferrer" className="social-link">Our Location</a>
          </div>
        </div>
      </div>
    );
  }

  // Render main content when not in under-construction mode
  return <MainContent />;
}

export default App;
