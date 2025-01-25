import React, { useState } from 'react';
import styles from './Dashboard.module.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Dashboard() {
  return (
    
     
    <div className={styles.app_container}>
      <MapContainer 
        center={[43.38621, -79.83713]} 
        zoom="13" 
        scrollWheelZoom={true}
        style={{width: "50vw", height: "50vh"}}
      >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[29.6516, -82.3248]}>
            <Popup>
              University of Florida!!!!!??? <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        {/* <div id="map" className = {styles.map}>
        </div>
        <script src="leaflet.js"></script>
        <script src="map.js"></script> */}
    </div>
  
  );

  // return (
  //   <div className={styles.app_container}>
  //     <h1 className={styles.title}>Wildfire Tracker</h1>
  //     <div className={styles.search_container}>
  //       <input
  //         type="text"
  //         placeholder="Enter location..."
  //         value={location}
  //         onChange={(e) => setLocation(e.target.value)}
  //         className={styles.search_input}
  //       />
  //       <button onClick={handleSearch} className={styles.search_button}>Search</button>
  //     </div>
  //     <div className={styles.wildfire_list}>
  //       {wildfires.map((fire) => (
  //         <div key={fire.id} className= {styles.wildfire_card}>
  //           <h2>{fire.name}</h2>
  //           <p><strong>Location:</strong> {fire.location}</p>
  //           <p className={fire.status === 'Active' ? 'status-active' : 'status-contained'}>
  //             {fire.status}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default Dashboard;
