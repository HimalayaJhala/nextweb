
import React, { useState, useEffect } from 'react';
import styles from '/styles/index.module.css';
import stylb from '/styles/social.module.css';
import stylec from '/styles/globals.css';
import Image from 'next/image';
import Head from 'next/head'; 
import ReactPlayer from 'react-player';

import CustomCursor from '../components/CustomCursor';


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
  <title> Himalaya Jhala portfolio</title>
  <meta name = "Himalaya Jhala Portfolio website" content=" Web Developer: Explore the portfolio of Himalaya Jhala, showcasing his expertise in crafting user-friendly and impactful web experiences using JavaScript, HTML, CSS, React,React Native  Next.js, and Node.js and strong UI/UX design skills." />
  <meta name="theme-color" content="WHITE"/>
     </Head>
      <CustomCursor/>

      <div className={styles.scrollBehavior}>
      
        <div className={styles.b1}>
          <div className={styles.heading}>
            <h1 className={styles.we_belive}>
              WE BELIEVE DEVELOPER SHAPE THE <span className={styles.future}>FUTURE </span>
            </h1>
          </div>
        </div>

        <div className={styles.centerpic}>
      
           <Image
            className={styles.pic}
            src="/download.jpeg"
            alt="Profile Picture"
            width={500}
            height={500}
           />
        </div>


        <div className={styles.buttond}>
          <a href="/path-to-your-resume.pdf" download="Your_Resume_Name.pdf" className={styles.downloadResumeButton}>
            Download Resume
          </a>
        </div>



        <div className={styles.socialc}>
          <div className={styles.social}>


            <div className={styles.socials1}>
              <a href="https://www.linkedin.com/in/himalaya-jhala-879542231/">
                <Image src="/linkedin.png" alt="leetcode" width={50} height={50} />
              </a>
            </div>

            <div className={styles.socials2}>
              <a href="https://leetcode.com/HimalayaJhala/">
                <Image src="/leetcode.png" alt="leetcode" width={50} height={50} />
              </a>
            </div>

            <div className={styles.socials3}>
              <a href="https://github.com/HimalayaJhala">
                <Image src="/github.png" alt="leetcode" width={50} height={50} />
              </a>
            </div>

          </div>

        </div>

  {/* <div class="banner">
    <div class="cards">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div> */}


        <div className={styles.Firstbox}>
          <div className={styles.playerwrapper}>
            <Image className={styles.iphone} src="/iPhone15.png" alt="phone" width={435} height={790} />
            {isClient && (
              <div style={{ width: '445px', height: '780px', position: 'relative', zIndex: 0, overflow: 'hidden', top: '37px', borderradius: '150px' }}>
                <ReactPlayer
                  className="react-player"
                  url="/Screen1.mp4"
                  width="435px"
                  height="720px"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                />
              </div>
            )}
          </div>


          <div className={styles.playerwrapper1}>
            <Image className={styles.iphone} src="/iPhone15.png" alt="phone" width={365} height={670} />
            {isClient && (
              <div style={{ width: '370px', height: '620px', position: 'relative', overflow: 'hidden', top: '32px', borderradius: '1500px' }}>
                <ReactPlayer
                  className="react-player"
                  url="/Screen1.mp4"
                  width="365px"
                  height="610px"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                  style={{ borderRadius: '100px' }}

                />
              </div>
            )}
          </div>


          <div className={styles.para}>
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


        <div className={styles.laptopdiv}>
          <Image className={styles.laptop} src="/macbookp.png" alt="laptop" width={1284} height={792} />
          {isClient && (
            <div style={{ position: 'absolute' }}>
              <ReactPlayer
                className={styles.reactplayer1}
                url="/Recording.mp4"
                width="960px"
                height="764px"
                playing={true}
                loop={true}
                controls={false}
                muted={true}
              // style={{borderRadius: '100px'}}
              />
            </div>
          )}
        </div>


        <div className={styles.laptopdiv1}>
          <Image className={styles.laptop1} src="/macbookp.png" alt="laptop" width={394} height={252} />
          {isClient && (
            <div style={{
            }}>
              <ReactPlayer

                className={styles.reactplayer2}
                url="/Recording.mp4"
                width="399px"
                height="194px"
                playing={true}
                loop={true}
                controls={false}
                muted={true}
              />
            </div>
          )}
        </div>

        <div className={styles.para1}>
          <p className={styles.heading2}>
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
