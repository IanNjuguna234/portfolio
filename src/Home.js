import React from 'react';
import styles from './Home.module.css';
import image from './image1.png';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Partner in Tech Excellence</h1>
      <div className={styles.backgroundImageContainer}>
        <img
          src={image} // replace with your image URL
          alt="Background Image"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.descriptionContainer}>
  <p>
    Welcome to CyphercCloud IT Solutions, where innovation meets expertise. We're a cutting-edge technology company that empowers businesses to thrive in a rapidly evolving digital landscape. 
    Our comprehensive suite of IT services covers everything from hardware maintenance to software development, ensuring that your organization stays ahead of the curve. 
    From infrastructure design to application development, our team of experts will work closely with you to craft tailored solutions that drive growth, enhance efficiency, and reduce costs.
     Whether you're a startup or an enterprise, our mission is to help you harness the power of technology to achieve your goals.
  </p>
</div>
    </div>
  );
}

export default Home;