import React from 'react';
import styles from './Home.module.css'; // Assuming you'll add some custom styles for this page
import LoginButton from '../../components/loginbutton';
// import './App.css';

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
          window.location.href = '/dashboard';
        }}>
          Dashboard
        </button>
        {/* <button className={styles.cta_button} onClick={()=>{
          window.location.href = '/login';
        }}>Login</button> */}
        <LoginButton className={styles.cta_button}>{}</LoginButton>
        <button className={styles.cta_button} onClick={() => alert('Learn more about wildfires...')}>
          Learn More
        </button>
      </section>

      <footer className={styles.home_footer}>
        <p>&copy; 2025 Wildfire Prediction. All rights reserved. Made by the Dream Team</p>
      </footer>
    </div>
  );
};

const submitIncident = async () => {
  const incidentData = {
    type: 'Fire',
    description: 'Wildfire near the forest',
    location: { lat: 29.6516, lng: -82.3248 }
  };

  try {
    const response = await fetch('http://localhost:5000/incidents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(incidentData)
    });

    const data = await response.json();
    console.log('Incident reported:', data);
  } catch (error) {
    console.error('Error reporting incident:', error);
  }
};


export default Home;
