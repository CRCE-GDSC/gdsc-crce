import React, { useState, useEffect } from 'react';
import { TypewriterEffectSmooth } from './ui/type-effect'; // Adjust the import path as needed

function TypeComponent() {
  const word = [
    {
      text: 'Google',
      className: 'text-5xl md:text-7xl font-bold dark:text-white',
    },

    {
      text: 'Developer',
      className: 'text-5xl md:text-7xl font-bold dark:text-white',
    },
  ]

  const word2 = [
    {
      text: 'Student',
      className: 'text-5xl md:text-7xl font-bold dark:text-white',
    },
    {
      text: 'Club.',
      className: 'text-5xl md:text-7xl font-bold dark:text-white',
    },
  ]
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 2400); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <TypewriterEffectSmooth words={word} />
      {showSecond && <TypewriterEffectSmooth words={word2} />}
    </div>
  );
}

export default TypeComponent;
