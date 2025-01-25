import React, { useState } from 'react';
import styles from './Dashboard.module.css'
import customLogo from './FireIcon.svg'; // Path to the logo image
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import LoginButton from '../../components/loginbutton';

function Dashboard() {
  // const MapComponent = () => {
  const customIcon = new L.Icon({
    iconUrl: customLogo,  // Logo image URL
    iconSize: [32, 32],  // Size of the icon (adjust as needed)
    iconAnchor: [16, 16], // Point of the icon to anchor (bottom center)
    popupAnchor: [0, -16], // Adjust popup location
    
  })
// };

  // const customIcon = new L.Icon({
  //   iconUrl: customLogo,
  //   iconRetinaUrl: customLogo,
  //   iconAnchor: null,
  //   popupAnchor: null,
  //   shadowUrl: null,
  //   shadowSize: null,
  //   shadowAnchor: null,
  //   iconSize: new L.Point(60, 75),
  //   className: 'leaflet-div-icon'
  // });

  return (    
    <div className={styles.app_container}>
      <div className={styles.nav}>
        <div className={styles.nav_links}>
          
            <div className = {styles.nav_links_buttons}>
              <a href="/">Home</a>
            </div>

            <div className = {styles.nav_links_buttons}>
              <a href="#about">About Us</a>
            </div>

            <div className = {styles.nav_links_buttons}>
              <a href="#services">Services</a>
            </div>

            <div className = {styles.nav_links_buttons}>
              <a href="#contact">Contact</a>
            </div>
        </div>
        
        {/* <div  className = {styles.nav_login}>
          <a href = "#">Login</a>
        </div> */}
        <div className={styles.nav_login} onClick={()=>{
          const { user, loginWithRedirect, isAuthenticated, logOut } = useAuth0();
          if (isAuthenticated) {
            logOut();
          }
          else {
            loginWithRedirect();
          }
        }}>
          Login
        </div>
      </div>



      <div className = {styles.map_wrapper}>
      <MapContainer 
        center={[29.6516, -82.3248]} 
        zoom="13" 
        scrollWheelZoom={true}
        style={{width: "100%", 
          height: "100%",
          borderRadius : "10px"
          // position: "absolute",
          // top: "50%", 
          // left: "0",
          // transform: "translateY(-50%)"}}
        }}
      >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[29.6516, -82.3248]} icon={customIcon}>
            <Popup>
              University of Florida!!!!!??? <br /> This is the location of a fire. 
            </Popup>
          </Marker>
        </MapContainer>
      </div>
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
