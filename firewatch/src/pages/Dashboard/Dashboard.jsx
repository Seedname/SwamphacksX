import React, { useEffect, useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { Container, Group, Title, Paper, TextInput, List, Anchor, AppShell, Grid, Image } from '@mantine/core';
import styles from './Dashboard.module.css';
import { useAuth0 } from "@auth0/auth0-react";
let loggedIn = false;

function MapController({ onMapReady }) {
  const map = useMap();
  
  useEffect(() => {
    if (map) {
      onMapReady(map);
    }
  }, [map, onMapReady]);

  return null;
}

function Dashboard() {
  const [csvData, setCsvData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [map, setMap] = useState(null);

  const handleMapReady = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);
  
  const debounceTimeout = useRef(null);
  
  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch("/worldcities.csv");
        const csvText = await response.text();
        const rows = csvText.split("\n").slice(1);
        const data = rows.map(row => {
          const [city, city_ascii, lat, lng, country] = row.split(",");
          return { city: String(city).replace(/['"]+/g, ''), 
            city_ascii: String(city_ascii).replace(/['"]+/g, ''), 
            lat: String(lat).replace(/['"]+/g, ''), 
            lng: String(lng).replace(/['"]+/g, ''), 
            country: String(country).replace(/['"]+/g, '') };
        });
        setCsvData(data);
      } catch (error) {
        console.error("Error loading CSV:", error);
      }
    };

    fetchCSV();
  }, []);

  const handleSearch = useCallback((query) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      let matches = [];
      for (let i = 0; i < csvData.length; i++) {
        if (!csvData[i] || !csvData[i]?.city_ascii) {
          continue;
        }

        if (csvData[i].city_ascii.toLowerCase().includes(query.toLowerCase())) {
          matches.push(csvData[i]);
          if (matches.length >= 10) {
            break;
          }
        }
        // console.log(matches);
      }
      setFilteredCities(matches);
    }, 300);
  }, [csvData]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const LoginButton = () => {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated)
    if (isAuthenticated) {
      return <Anchor component={Link} to="/logout" c="white" underline="hover" >Logout</Anchor>;
    }
    return <Anchor component={Link} to="/login" c="white" underline="hover" >Login</Anchor>;
  };

  const handleCitySelect = async (city) => {
    setSearchQuery("");
    setFilteredCities([]);

    let latitude = parseFloat(city.lat);
    let longitude = parseFloat(city.lng);
    let pos = L.latLng(latitude, longitude);
    map.setView(pos, 10);

    console.log(pos)
    try {
      await fetch("/api/fire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lat: latitude, lng: longitude })
      });
    } catch (error) {
      console.error("Error sending city coordinates:", error);
    }
  };
  return (
    <AppShell
      header={{ height: 60 }}
      padding={0}
    >
      <AppShell.Header 
        p="xs" 
        style={{ 
          backgroundColor: '#ff6347',
          position: 'fixed',
          zIndex: 200 
        }}
      >
        <Group justify="space-between">
          <Group>
            <Title order={2} c="white" style={{ display: 'flex', alignItems: 'center', marginLeft: '1vw'}}>
              Firewatch
              <img src="/firelogo.png" style={{
                marginLeft: '10px',
                maxHeight: "30px"
              }}/>
            </Title>
          </Group>
          <Group className={styles.nav_buttons}>
            <Anchor component={Link} to="/" className={styles.cta_button}>Home</Anchor>
            <Anchor component={Link} to="/reports" className={styles.cta_button}>Submit Report</Anchor>
            <Anchor component={Link} to="/" className={styles.cta_button}>Login</Anchor>
          </Group>
        </Group>
      </AppShell.Header>
  
  
      <Paper 
        style={{ 
          position: 'absolute',
          top: 80,
          right: 20,
          width: '300px',
          zIndex: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
        shadow="md" 
        p="md" 
        withBorder
      >
        <Title order={4} mb="md">Search Location</Title>
        <TextInput
          placeholder="Search map..."
          value={searchQuery}
          onChange={handleInputChange}
          size="md"
          radius="md"
        />
        {filteredCities.length > 0 && (
          <List spacing="xs" mt="xs" style={{
            listStyle: "none"
          }}>
            {filteredCities.map((city, index) => (
              <List.Item
                key={index}
                onClick={() => handleCitySelect(city)}
                style={{ 
                  cursor: 'pointer',
                  padding: '8px',
                  '&:hover': { backgroundColor: 'var(--mantine-color-gray-0)' },
                  listStyle: "none"
                }}
              >
                {city.city_ascii}, {city.country}
              </List.Item>
            ))}
          </List>
        )}
      </Paper>
  
      <div style={{ 
        position: 'absolute', 
        top: '7%', 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 50   
      }}>
        <MapContainer
          center={[34.0549, -118.2426]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <MapController onMapReady={handleMapReady} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </AppShell>
  );
}

export default Dashboard;