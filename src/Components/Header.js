import React, { useState, useEffect } from 'react';
import '../Styles/Header.css'
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    let normalizedPosition = e.clientX / (width / 2) - 1;
    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    spansSlow.forEach((span) => {
      span.style.transform = `translate(${normalizedPosition * 100}%)`;
    });

    spansFast.forEach((span) => {
      span.style.transform = `translate(${normalizedPosition * 200}%)`;
    });
  };

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="wrap">
      <div className="line">
        <div className="left">
          <div className="content">
            <span class="spanSlow">Roman's</span>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <span class="spanSlow">Roman's</span>
          </div>
        </div>
      </div>
    
      <div className="line">
        <div className="left">
          <div className="content">
            <span class="spanFast">Page</span>
          </div>
        </div>
       <div class="right">
          <div className="content">
            <span class="spanFast">Page</span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Header;