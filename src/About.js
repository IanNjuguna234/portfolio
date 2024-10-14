import React from 'react';
import companyImage from './logo.png'; // Replace with the path to your company image
import founderImage from './founderImage.jpg'; // Replace with the path to your founder image
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.companySection}>
        <img src={companyImage} alt="CypherCloud IT Solutions Kenya" className={styles.companyImage} />
        <div className={styles.companyDescription}>
          <h2>About CypherCloud IT Solutions Kenya</h2>
          <p>
            CypherCloud IT Solutions Kenya is a leading technology company dedicated to providing innovative solutions in the fields of web and application programming, networking, data analysis, machine learning, and artificial intelligence. 
            Our mission is to empower businesses with cutting-edge technology to enhance their operations and achieve their goals.
          </p>
          <p>
            At CypherCloud IT Solutions Kenya, we are committed to delivering high-quality, reliable, and efficient IT solutions to our clients. 
            We believe in continuous learning and staying at the forefront of technological advancements to provide the best possible services.
          </p>
        </div>
      </div>
      <div className={styles.founderSection}>
        <img src={founderImage} alt="Founder" className={styles.founderImage} />
        <div className={styles.founderDescription}>
          <h2>About the Founder</h2>
          <p>
            The company was founded by an experienced IT professional who graduated with a degree in BSc IT. With extensive expertise in web and application programming, networking, data analysis, machine learning, and AI, our founder has a passion for leveraging technology to solve real-world problems and drive business success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;