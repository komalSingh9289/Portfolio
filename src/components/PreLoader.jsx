import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import animationData from '../assets/images/coffee.json';

const PreLoader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.fromTo(
      text.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
      }
    );

  }, []);

  const handleComplete = () => {
    const preloader = preloaderRef.current;
    if (preloader) {
      gsap.to(preloader, {
        y: '-100%',
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          preloader.style.display = 'none'; // Hide preloader after sliding out
          if (onComplete) onComplete();
        },
      });
    }
  };

  return (
    <div className='preloader-section' ref={preloaderRef}>
      <Lottie
        animationData={animationData}
        loop={false}
        onComplete={handleComplete}
      />
      <h2 className='preloader-text' ref={textRef}>
        {'Fueling up with coffee and code...'.split('').map((letter, index) => (
          <span key={index} className='letter'>
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default PreLoader;
