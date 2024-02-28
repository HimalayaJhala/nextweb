import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IndexPage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ yoyo: true, repeat: -1 }); // Configure yoyo animation

    tl.to(imageRef.current, { x: 200, duration: 2 }); // Animate image movement in x direction

  }, []);

  return (
    <div className="container">
      <img ref={imageRef} src="your-image.jpg" alt="Image" />
    </div>
  );
};

export default IndexPage;
