/*import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import styles from './Reports.module.css'

// document.body.style.backgroundColor = "lightblue";


// const Report = () => {

// //   const { user, isAuthenticated } = useAuth0();
// //   const [description, setDescription] = useState('');

// const handleSubmit = async (e) => {
//     e.preventDefault();
    // if (!isAuthenticated) {
    //   return;
    // }

    // const report = {
    //   email: user.email,
    //   description,
    //   date: new Date().toISOString(),
    // };

// //     const response = await fetch('http://localhost:5000/api/reports', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(report),
// //     });

// //     if (response.ok) {
// //       alert('Report submitted successfully!');
// //       setDescription('');
// //     } else {
// //       alert('Failed to submit report.');
// //     }
// //   };
//   return (
//     <div className="styles.body">
//       <h1 className="text-2xl font-bold mb-4">Submit Wildfire Report</h1>
//       <h2 className="text-2xl font-bold mb-4"> If you want to report a wildfire-related incident, please report it here!</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <textarea
//           placeholder="Describe the incident..."
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-lg"
//           rows="5"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-3 rounded-lg"
//         >Submit
//         </button>
//       </form>

//       <h1>testtest</h1>
//     </div>
    
//   );
// };

// export default Report;

const Report = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Report submitted successfully!');
    setFormData({ name: '', location: '', description: '' });
    
  };

  return (
    
    <div className={styles.container}>
      <h1 className="text-2xl font-bold mb-4">Submit Wildfire Report</h1>
      <h2 className="text-2xl font-bold mb-4"> If you want to report a wildfire-related incident, please report it here!</h2>
      <h1 className={styles.heading}>Submit a Report</h1>
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
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            stclassNamele={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Submit Report</button>
      </form>
    </div>
  );
};

// Inline styles for quick styling
// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '50px auto',
//     height: '100vh',
//     padding: '60px',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     backgroundColor: 'lightblue',
//   },  
//   heading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//     alignItems: center,
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   formGroup: {
//     marginBottom: '15px',
//     textAlign: 'left',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     fontSize: '18px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

export default Report;*/

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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Report submitted successfully!');
    setFormData({ name: '', location: '', description: '' });
    try {
      const response = await fetch('/api/incidents', {
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

    // Uncomment and update the following lines to send data to the server
    // const response = await fetch('http://localhost:5000/api/reports', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   alert('Report submitted successfully!');
    //   setFormData({ name: '', location: '', description: '' });
    // } else {
    //   alert('Failed to submit report.');
    // }
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
          {/* <div className={styles.button}>
            <Link to="/" className={styles.backButton}>Back to Home</Link>`
          </div> */} 
          <button type="button" className={styles.button} style={{
              marginRight: "10px"
          }}><Link to="/">Back to Home</Link></button>

          {/* <Anchor component={Link} to="/dashboard" c="white" underline="hover" >Dashboard</Anchor> */}
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