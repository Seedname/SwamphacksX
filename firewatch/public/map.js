// Initialize the map
import 'leaflet.js'
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet'


const L = window.L;
const map = L.map('map').setView([20, 0], 2); // Default view (centered on the world)
<div id="map"></div>

// Add a tile layer (OpenStreetMap)
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
});
osm.addTo(map);
console.log(true);

<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

// Add search functionality
// Your OpenWeatherMap API key
//const WEATHER_API_KEY = "2129766da5a3b59033a690a268a4365f";

// Add a tile layer (OpenStreetMap)
/* L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map); */

// Add search functionality
/* document.getElementById('search').addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value;
    if (query) {
      try {
        // Search for the location
        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
        );
        const results = await locationResponse.json();

        if (results.length > 0) {
          const { lat, lon } = results[0];
          map.setView([lat, lon], 10); // Zoom into the searched region
          
          // Fetch weather data for the location
          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
          );
          const weatherData = await weatherResponse.json();

          // Display weather information
          const weatherInfo = `
            <strong>${query}</strong><br>
            Temperature: ${weatherData.main.temp}°C<br>
            Condition: ${weatherData.weather[0].description}
          `;
          L.marker([lat, lon]).addTo(map).bindPopup(weatherInfo).openPopup();
        } else {
          alert('No results found. Please try a different search term.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }
  }
});*/