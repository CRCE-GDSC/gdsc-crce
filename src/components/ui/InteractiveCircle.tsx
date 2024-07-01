'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Point {
  id: number;
  text: string;
  image: string;
}

const InteractiveCircle: React.FC = () => {
  const [points] = useState<Point[]>([
    { id: 1, text: "Blockchain", image: "/blockchain.webp" },
    { id: 2, text: "App Development", image: "/app dev.gif" },
    { id: 3, text: "Web Development", image: "/web dev.gif" },
    { id: 4, text: "Machine Learning", image: "/machine learning.gif" },
    { id: 5, text: "Cyber Security", image: "/cyber-security.gif" },
    { id: 6, text: "Cloud Computing", image: "/Cloud Avatar.gif" },
  ]);
  const [activePoint, setActivePoint] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && circleRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const circleHeight = circleRef.current.offsetHeight;
        const scrollProgress = (window.innerHeight - top) / (height - circleHeight);
        const newActivePoint = Math.floor(Math.max(0, Math.min(1, scrollProgress)) * (points.length - 1));
        setActivePoint(newActivePoint);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [points.length]);

  const handlePointClick = (index: number) => {
    setActivePoint(index);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const scrollTo = containerTop + (index / (points.length - 1)) * (containerRef.current.offsetHeight - window.innerHeight);
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative" style={{ height: `${(points.length + 1) * 100}vh` }}>
      <div ref={circleRef} className="sticky top-0 w-full h-screen flex items-center justify-center">
        <div className={`relative ${isMobile ? 'w-full h-full flex' : 'w-[40rem] h-[40rem] rounded-full border-2 border-gray-300'}`}>
          {isMobile && (
            <div className="w-px bg-gray-300 h-1/2 absolute left-4 top-1/4" />
          )}
          {points.map((point, index) => {
            const angle = (360 / points.length) * index - 90; // Start from top (90 degrees)
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * 20; // 20rem is the radius
            const y = Math.sin(radian) * 20;
            
            return (
              <div
                key={point.id}
                className={`absolute transform ${isMobile ? '-translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2'} cursor-pointer`}
                style={{
                  top: isMobile ? `${25 + (index / (points.length - 1)) * 50}%` : `calc(50% + ${y}rem)`,
                  left: isMobile ? '4px' : `calc(50% + ${x}rem)`,
                }}
                onClick={() => handlePointClick(index)}
              >
                <div className={`w-4 h-4 rounded-full ${activePoint === index ? 'bg-blue-500' : 'bg-gray-400'}`} />
                <div className={`absolute ${isMobile ? 'left-6 top-0' : `${x > 0 ? 'left-full ml-2' : 'right-full mr-2'} top-1/2`} transform ${isMobile ? '-translate-y-1/2' : '-translate-y-1/2'} bg-white p-2 rounded shadow-md z-10 whitespace-nowrap ${activePoint === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  <p className="text-lg font-semibold invert">{point.text}</p>
                </div>
              </div>
            );
          })}
          {isMobile && (
            <div className="w-1/2 ml-32 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={points[activePoint].image}
                  alt={points[activePoint].text}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[30rem] h-[30rem] ">
              <Image
                src={points[activePoint].image}
                alt={points[activePoint].text}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCircle;