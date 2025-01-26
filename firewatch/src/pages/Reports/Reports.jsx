import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Reports.module.css';
import { Container, Group, Title, Paper, TextInput, List, Anchor, AppShell, Grid, Image } from '@mantine/core';

const Report = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('/api/add-incident', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Report submitted successfully!');
        setFormData({ name: '', location: '', description: '' });
      } else {
        alert('Failed to submit report.');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <>
    

    <div className={styles.container}>
      <div className={styles.background_image}></div>
      <h1 className={styles.heading}>Submit Wildfire Report</h1>
      <h2 className={styles.subheading}>If you want to report a wildfire-related incident, please report it here!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.textarea}
            rows="5"
            required
          />
        </div>
        <div style={{
          display: "inline-flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <button type="button" className={styles.button} style={{
              marginRight: "10px"
          }}><Link to="/">Back to Home</Link></button>
          
          <button type="submit" className={styles.button} style={{
              marginLeft: "10px"
          }}>Submit Report</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Report;