import React, { useEffect, useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Container, Group, Title, Paper, TextInput, List, Anchor, AppShell, Grid } from '@mantine/core';
import './Dashboard.module.css';

function Dashboard() {
  const [csvData, setCsvData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch("/worldcities.csv");
        const csvText = await response.text();
        const rows = csvText.split("\n").slice(1);
        const data = rows.map(row => {
          const [city, city_ascii, lat, lng, country] = row.split(",");
          return { city, city_ascii, lat: parseFloat(lat), lng: parseFloat(lng), country };
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
      }
      setFilteredCities(matches);
    }, 300);
  }, [csvData]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleCitySelect = async (latitude, longitude) => {
    setSearchQuery("");
    setFilteredCities([]);

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
      padding="md"
    >
      <AppShell.Header p="xs" style={{ backgroundColor: 'var(--mantine-color-red-6)' }}>
        <Group justify="space-between">
          <Title order={2} c="white">Dashboard</Title>
          <Group>
            <Anchor component={Link} to="/" c="white" underline="hover">Home</Anchor>
            <Anchor component={Link} to="/reports" c="white" underline="hover">Submit Report</Anchor>
            <Anchor component={Link} to="#about" c="white" underline="hover">About Us</Anchor>
            <Anchor component={Link} to="#contact" c="white" underline="hover">Contact</Anchor>
            <Anchor component={Link} to="/login" c="white" underline="hover">Login</Anchor>
          </Group>
        </Group>
      </AppShell.Header>

      <Container size="xl" mt="md">
        <Grid gutter="md">
          <Grid.Col span={8}>
            <Paper style={{ height: 'calc(100vh - 140px)', overflow: 'hidden', borderRadius: '8px' }}>
              <MapContainer
                center={[34.0549, -118.2426]}
                zoom={10}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Paper>
          </Grid.Col>

          <Grid.Col span={4}>
            <Paper shadow="sm" p="md" withBorder>
              <Title order={4} mb="md">Search Location</Title>
              <TextInput
                placeholder="Search map..."
                value={searchQuery}
                onChange={handleInputChange}
                size="md"
                radius="md"
              />
              {filteredCities.length > 0 && (
                <List spacing="xs" mt="xs">
                  {filteredCities.map((city, index) => (
                    <List.Item
                      key={index}
                      onClick={() => handleCitySelect(city.lat, city.lng)}
                      style={{ 
                        cursor: 'pointer',
                        padding: '8px',
                        '&:hover': { backgroundColor: 'var(--mantine-color-gray-0)' }
                      }}
                    >
                      {city.city_ascii}, {city.country}
                    </List.Item>
                  ))}
                </List>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}

export default Dashboard;