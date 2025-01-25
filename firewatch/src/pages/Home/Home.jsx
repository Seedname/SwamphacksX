import React from 'react';
import styles from './Home.module.css'; // Assuming you'll add some custom styles for this page

const Home = () => {
  return (
    <div className={styles.home_container}>
      <header className={styles.home_header} >
        <h1>FireWatch</h1>
        <p>Your trusted tool to predict and track wildfires in real time.</p>
      </header>

      <section className={styles.home_description}>
        <h2>How It Works</h2>
        <p>
          Our platform uses advanced data analytics and machine learning to predict wildfire risks
          based on current weather patterns, terrain, and historical data. Stay informed and prepared!
        </p>
      </section>

      <section className={styles.home_actions}>
        <button className={styles.cta_button} onClick={() => {
          
        }}>
          Dashboard
        </button>
        <button className={styles.cta_button} onClick={() => alert('Learn more about wildfires...')}>
          Learn More
        </button>
      </section>

      <footer className={styles.home_footer}>
        <p>&copy; 2025 Wildfire Prediction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
