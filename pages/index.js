// CustomComponent.js
import React from 'react';
import styles from '/styles/index.module.css';


export default function Home ()  {
    return (
        <div className={styles.bodyContainer} >
            <div className={styles.b1}>
                <div className={styles.heading}>
                    <h1 className={styles.we_belive}>WE BELIEVE DEVELOPER SHAPE THE <span className={styles.future}>FUTURE </span></h1>
                </div>
            </div>

            <div>
                <img className={styles.pic} src="download.jpeg" alt="profilepicture" />
                <p className={styles.heading1}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
};
