'use client'

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Title = ({ children }) => {
  const titleRef = useRef(null);
  const [titleWidth, setTitleWidth] = useState(0);
  const gap = 1; // 3px gap between logo and text

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
  }, [children]);

  const logoOffset = titleWidth / 2 + gap;

  return (
    <div className="mb-16 flex items-center justify-center">
      <Image
        src="/assets/gdsc_logo_left.png"
        height={50}
        width={50}
        alt="left_logo"
        className="moveLeft z-10"
        style={{ transform: `translateX(${logoOffset}px)` }}
      />
      <h2 ref={titleRef} className="title fadeInOut">
        {children}
      </h2>
      <Image
        src="/assets/gdsc_logo_right.png"
        height={52}
        width={52}
        alt="right_logo"
        className="moveRight z-10"
        style={{ transform: `translateX(-${logoOffset}px)` }}
      />
    </div>
  );
};

export default Title;