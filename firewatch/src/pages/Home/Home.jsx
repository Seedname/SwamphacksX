import React from 'react';
import styles from './Home.module.css';
import LoginButton from '../Login/LoginButton.jsx';

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.background_image}></div>
      
      <header className={styles.navbar}>
        <h1 className={styles.navbar_title}>
          Firewatch
        </h1>

        <div className={styles.navbar_login}>
          <LoginButton/>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <section className={styles.home_header}>
            <h2>Track wildfires in real time and help the community!</h2>
          </section>

          <section className={styles.home_description}>
            <p>
              Technologies: Leaflet, Auth0, XWeather, MongoDB, React, Node.js, Vite, World Cities Database, Mantine, Express
            </p>
          </section>

          <section className={styles.home_actions}>
            <button className={styles.cta_button} onClick={() => {
              window.location.href = '/dashboard';
            }}>
              Dashboard
            </button>
            <button className={styles.cta_button} onClick={() => {
              window.location.href = '/reports';
            }}>
              Submit Incident Report
            </button>
          </section>

          <footer className={styles.home_footer}>
            <p>&copy; 2025 Firewatch </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;