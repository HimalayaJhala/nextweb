// CustomComponent.js
import React, { useState, useEffect } from 'react';
import styles from '/styles/index.module.css';
import Image from 'next/image';
import Head from 'next/head';
import ReactPlayer from 'react-player';

const YourComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  

  return (
    <div className={styles.bodyContainer}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.scrollBehavior}>
        <div className={styles.b1}>
          <div className={styles.heading}>
            <h1 className={styles.we_belive}>
                WE BELIEVE DEVELOPER SHAPE THE <span className={styles.future}>FUTURE </span>
            </h1>
          </div>
        </div>

       
<Image className={styles.pic} src="/download.jpeg" alt="profilepicture" width={500} height={500} />
       

        <div className={styles.Firstbox}>
          <div className={styles.playerwrapper}>
          <Image  className={styles.iphone} src="/iPhone15.png" alt="phone" width={435} height={790} />
            {isClient && (
              <div  style={{ width :'445px',height :'780px' , position: 'relative',   zIndex: 0,  borderRadius: '99px', overflow: 'hidden' , left : '-10px',  top : '37px' }}>    
                <ReactPlayer
                  className="react-player"
                  url="/Screen1.mp4"
                  width="455px"
                  height="720px"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                />
              </div>
            )}
          </div>
          
            
          
          <p className={styles.heading1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
