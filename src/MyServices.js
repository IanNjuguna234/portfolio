import React from 'react';
import styles from './MyServices.module.css';

function MyServices() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.content}>
        <p>
          I offer a range of services to help you with your web development needs. Here are some of my specialties:
        </p>
        <ul>
          <li>Front-end development (React, JavaScript, HTML, CSS)</li>
          <li>Back-end development (Node.js, Express, databases)</li>
          <li>Full-stack development (combining front-end and back-end)</li>
          <li>UI/UX design (creating user-friendly and visually appealing interfaces)</li>
          <li>Content management system (CMS) development (building systems for managing website content)</li>
          {/* Add more services as needed */}
        </ul>
        <p>
          Feel free to contact me if you have any projects in mind or need help with any of these services.
        </p>
      </div>
    </div>
  );
}

export default MyServices;