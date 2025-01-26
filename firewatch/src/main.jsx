import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const theme = {
  primaryColor: 'red',
  colors: {
    red: [
      '#FFE7E7',
      '#FFD0D0',
      '#FFA5A5',
      '#FC7474',
      '#F74D4D',
      '#F03333',
      '#E62222',
      '#D61C1C',
      '#C21919',
      '#AB1818',
    ],
  },
  fontFamily: 'Arial, sans-serif',
  components: {
    Container: {
      defaultProps: { size: 'xl', px: 'md' }
    },
    Button: {
      defaultProps: { size: 'md' }
    },
    Anchor: {
      defaultProps: { 
        color: 'white',
        underline: 'hover'
      }
    }
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);