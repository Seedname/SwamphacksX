import React from 'react';
import styles from './Home.module.css'; // Assuming you'll add some custom styles for this page
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
          {/* <button className={styles.cta_button} onClick={()=>{window.location.href = '/login'}}>
            Login
          </button> */}
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <section className={styles.home_header}>
            <h2>Track wildfires in real time, find the best route to the travel and water sources nearby, and submit incident reports to help the community!</h2>
          </section>

          <section className={styles.home_description}>
            {/* <h2>How It Works</h2> */}
            <p>
              Technologies: Leaflet, Auth0, XWeather, MongoDB, React, Node.js, Vite, World Cities Database, Ma
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
              Submit Report
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