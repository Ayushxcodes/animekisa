"use client";
import React, { useState, useEffect } from 'react'

const HeroSectionHome = () => {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  return (
    <div className="p-5 flex justify-center items-center">
      <div className="rounded-lg overflow-hidden bg-white shadow-lg flex justify-center h-90">
        <img src={images[currentIndex]} alt="Hero Banner" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default HeroSectionHome