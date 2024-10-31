"use client";
import about from "./imagens/img1.jpg";
import mission from "./imagens/img2.jpg";
import people from "./imagens/img3.jpg";

import React, { useState } from "react";
import "../slider/slider.css";

export const imagens = [
   {img:about,decription:"card com imagem e descrição"},
   {img:mission,decription:"card com imagem e descrição"},
   {img:people,decription:"card com imagem e descrição"},  
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
    };
  
    return (
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>◀</button>
        <div className="carousel-slide">
          <img src={imagens[currentIndex].img.src}/>
        </div>
        <button className="next" onClick={nextSlide}>▶</button>
  
        <div className="carousel-indicators">
          {imagens.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)} 
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;