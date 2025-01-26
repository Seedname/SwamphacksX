import React from 'react';
import styles from './Home.module.css'; // Assuming you'll add some custom styles for this page
import LoginButton from '../../components/loginbutton';

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.background_image}></div>
      
      <header className={styles.navbar}>
        <h1 className={styles.navbar_title}>
          Firewatch
        </h1>
        <div className={styles.navbar_login}>
          <button className={styles.cta_button} onClick={()=>{window.location.href = '/login'}}>
            Login
          </button>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <section className={styles.home_header}>
            <h2>Your trusted tool to predict and track wildfires in real time.</h2>
          </section>

          <section className={styles.home_description}>
            <h2>How It Works</h2>
            <p>
              Our platform uses advanced data analytics and machine learning to predict wildfire risks
              based on current weather patterns, terrain, and historical data. Stay informed and prepared!
            </p>
          </section>

          <section className={styles.home_actions}>
            <button className={styles.cta_button} onClick={() => {
              window.location.href = '/dashboard';
            }}>
              Dashboard
            </button>
            <button className={styles.cta_button} onClick={() => alert('Learn more about wildfires...')}>
              Learn More
            </button>
          </section>

          <footer className={styles.home_footer}>
            <p>&copy; 2025 Wildfire Prediction. All rights reserved. Made by the Dream Team</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;